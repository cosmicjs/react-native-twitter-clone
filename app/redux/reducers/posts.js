import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import FormData from 'form-data';
import cosmicConfig from '../../config/cosmic';

// Constants
const INITIALIZE = 'INITIALIZE_POSTS';
const CREATE = 'CREATE_POST';

// Action Creators
const init   = posts => ({ type: INITIALIZE, posts });
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
  const user = post.metadata;
  return {
    name: user.name,
    username: user.username,
    profilePicture: {uri: user.profile_picture.url},
    content: post.content.replace(/<[^>]*>/g, ''),
    created: post.created,
  }
})

const formatPost = data => {
  const post = data.object;
  return {
  name: post.metadata.name,
  username: post.metadata.username,
  profilePicture: { uri: post.metadata.profile_picture.url},
  content: post.content,
  created: post.created,
  }
}

// Dispatcher
export const loadPosts = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/posts`)
    .then(res => formatPosts(res.data.objects))
    .then(formattedPosts => dispatch(init(formattedPosts)))
    .catch(err => console.error(`Could not load posts`, err));
};

export const createPost = post => dispatch => {
  let data = new FormData();
  data.append('media', {
        uri: post.user.profilePicture,
        type: 'image/jpeg',
        name: 'image'
      });
  axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/media`, data)
  .then(res => res.data.media)
  .then(media => {
    return axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/add-object`, {
      title: post.user.username + ' post',
      type_slug: 'posts',
      content: post.content,
      metafields: [
        {
          key: 'name',
          type: 'text',
          value: post.user.name,
        },
        {
          key: 'username',
          type: 'text',
          value: post.user.username, //something here
        },
        {
          key: 'profile_picture',
          type: 'file',
          value: media.name,
        }
      ]
    })
  })
  .then(res => console.log('RESPONSE: ', res.data))
  .then(() => Actions.feed())
  .catch(error => console.error('Post unsuccessful', error))
}

