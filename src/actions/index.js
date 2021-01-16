import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

const SHOW_AUTOCOMPLETE = 'SHOW_AUTOCOMPLETE';

export const fetchAutocomplete = (username) => (dispatch) => {
  axios
    .get(URL)
    .then((payload) =>
      dispatch({
        type: SHOW_AUTOCOMPLETE,
        payload: payload.data.filter((item) => {
          if (!username || username === '') {
            return null;
          }
          return item.username.toLowerCase().startsWith(username.toLowerCase());
        }),
      })
    )
    .catch((error) => console.log(error));
};
