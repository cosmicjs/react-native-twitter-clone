import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import cosmicConfig from '../../config/cosmic';

// Constants
const INITIALIZE = 'INITIALIZE_POSTS';
const CREATE = 'CREATE_POST';

// Action Creators
const init = posts => ({ type: INITIALIZE, posts });
const create = post => ({ type: CREATE, post });

// Reducer
export default (posts = [], action) => {
  switch (action.type) {
    case INITIALIZE:
      return action.posts;
    case CREATE:
      return [action.post, ...posts];
    default:
      return posts;
  }
}

// Helper Functions
const formatPosts = data => data.map(post => {
  const user = post.metadata.user.metadata;
  return {
    name: user.name,
    username: user.username,
    profilePicture: {uri: user.profile_picture.url},
    content: post.content.replace(/<[^>]*>/g, ''),
    created: post.created,
  }
})

const formatPost = (response, postData) => {
  const post = response.object;
  const user = postData.user;
  return {
    name: user.name,
    username: user.username,
    profilePicture: { uri: user.profilePicture.url },
    content: post.content,
    created: post.created,
    }
}

const postSorter = (a, b) => {
  return new Date(b.created) - new Date(a.created);
}

// Dispatcher
export const loadPosts = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/posts`)
    .then(res => {
      if (res.data.objects){
      return formatPosts(res.data.objects)
      } else {
        return [];
      }
    })
    .then(formattedPosts => formattedPosts.sort(postSorter))
    .then(sortedPosts => dispatch(init(sortedPosts)))
    .catch(err => console.error(`Could not load posts`, err));
};

export const createPost = post => dispatch => {
  axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/add-object`, {
      title: post.user.username + ' post',
      type_slug: 'posts',
      content: post.content,
      metafields: [
        {
          type: 'object',
          title: 'User',
          key: 'user',
          object_type: 'users',
          value: post.user.id
        },
      ]
    })
      .then(res => formatPost(res.data, post))
      .then(formattedPost => dispatch(create(formattedPost)))
      .then(() => Actions.feed({type: 'popAndReplace'}))
      .catch(error => console.error('Post unsuccessful', error))
}
