export default (state = {}, action) => {
 switch (action.type) {
  case 'LOAD_ACTION':
  return Object.assign({}, state, {
    coordinates_2: state.coordinates_1 || null,
    coordinates_1: state.coordinates || null,
    coordinates: action.payload
  });
  default:
  return state
}
}