const intialState = {
  error: "",
  account: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, error: action.msg };
    case "SIGNUP":
      return { ...state, account: action };
    default:
      return state;
  }
};

export default reducer;
