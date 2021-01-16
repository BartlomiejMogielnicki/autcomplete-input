const initialState = {
  usernameOptions: [],
};

const SHOW_AUTOCOMPLETE = 'SHOW_AUTOCOMPLETE';

const rootReducer = (state = initialState, action) => {
  if (action.type === SHOW_AUTOCOMPLETE) {
    return {
      usernameOptions: action.payload.map((item) => item.username),
    };
  }

  return state;
};

export default rootReducer;
