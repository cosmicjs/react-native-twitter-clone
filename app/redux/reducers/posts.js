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
// const formatUser = data => ({
//   name: data.object.title,
//   userName: data.object.metadata.username,
//   profilePicture: data.object.metadata.profile_picture,
// })


// Dispatcher
export const loadPosts = () => dispatch => {
  axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/posts`)
    .then(res => console.log(res.data))
    // .then(res => dispatch(init(res.data)))
    .catch(err => console.error(`Could not load tweets`, err));
};
