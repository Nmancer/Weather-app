export default (state = {}, action) => {
  if (action.type === "FETCH_LOCATION") {
    return action.payload;
  }
  return state;
};
