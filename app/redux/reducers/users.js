import axios from 'axios';
import cosmicConfig from '../../config/cosmic';
import FormData from 'form-data';

// Constants
const CREATE_USER = 'CREATE_USER';
const LOGIN = 'LOGIN';

// Action Creators
const createUser = user => ({ type: CREATE_USER, user });
const login = user => ({ type: LOGIN, user });

// Reducer
export default (user = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case LOGIN:
      return action.user;
    default:
      return user;
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
  let data = new FormData();
  data.append('media', {
        uri: user.profilePicture,
        type: 'image/jpeg',
        name: 'image'
      });

  axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/media`, data)
  .then(res => res.data.media)
  .then(media => {
    return axios.post(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/add-object`, {
      title: user.name,
      type_slug: 'users',
      metafields: [
        {
          key: 'name',
          type: 'text',
          value: user.firstName + ' ' + user.lastName,
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

const authenticate = user => {
  axios.get(`https://api.cosmicjs.com/v1/${cosmicConfig.bucket.slug}/object-type/users/search?metafield_key=username&metafield_value=${user.username}`)
  .then(res => res.data)
  .then(data => console.log(data))
}
