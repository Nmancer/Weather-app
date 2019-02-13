export default (state = {}, action) => {
  if (action.type === "FETCH_CURRENTWEATHER") {
    return action.payload;
  }
  return state;
};
