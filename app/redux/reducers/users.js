import axios from 'axios';
import cosmicConfig from '../../config/cosmic';
import FormData from 'form-data';

const initialState = {
  activeUser: {},
}

// Constants
const CREATE_USER = 'CREATE_USER';

// Action Creators
const createUser = user => ({ type: CREATE_USER, user });

// Reducer
export default (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case CREATE_USER:
      nextState.activeUser = action.user;
      return nextState;
    default:
      return prevState;
  }
}

// Helper Function
const formatUser = data => ({
  name: data.object.title,
  userName: data.object.metadata.username,
  profilePicture: data.object.metadata.profile_picture,
})

// Dispatcher
export const addUser = user => dispatch => {
  const url = `https://api.cosmicjs.com/v1/${cosmicCong.bucket.slug}/media`;
  let data = new FormData();
  data.append('media', {
        uri: user.profilePicture,
        type: 'image/jpeg',
        name: 'image'
      });

  axios.post(url, data)
  .then(res => res.data.media)
  .then(media => {
    return axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/add-object`, {
      title: user.name,
      type_slug: 'users',
      metafields: [
        {
          key: 'name',
          type: 'text',
          value: user.name,
        },
        {
          key: 'username',
          type: 'text',
          value: user.username,
        },
        {
          key: 'password',
          type: 'text',
          value: user.password,
        },
        {
          key: 'profile_picture',
          type: 'file',
          value: media.name,
              }
            ]
          }
        )}
      )
      .then(res => formatUser(res.data))
      .then(formattedUser => dispatch(createUser(formattedUser)))
      .catch(err => console.error(`Creating user unsuccesful`, err))
}
