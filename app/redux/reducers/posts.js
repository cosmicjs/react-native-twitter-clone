import axios from 'axios';
import cosmicConfig from '../../config/cosmic';

// Constants
const INITIALIZE = 'INITIALIZE_POSTS';
const CREATE     = 'CREATE_POST';

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

// Helper Function
const formatPosts = data => data.map(post => {
  const user = post.metadata.user.metadata;
  return {
    name: user.name,
    username: user.username,
    profilePicture: {uri: user.profile_picture.url},
    content: post.content.replace(/<[^>]*>/g, ''),
  }
})


// Dispatcher
export const loadPosts = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/posts`)
    .then(res => formatPosts(res.data.objects))
    // .then(formattedPosts => console.log(formattedPosts))
    .then(formattedPosts => dispatch(init(formattedPosts)))
    .catch(err => console.error(`Could not load tweets`, err));
};
