export default (state = {}, action) => {
  if (action.type === "FETCH_FORECAST") {
    return action.payload;
  }
  return state;
};
