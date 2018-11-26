export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'PUSH_ALERT':
    let alerts = [];
    if(state.alerts) {
      alerts = state.alerts.concat(action.payload);
    } else {
      alerts.push(action.payload);
    }
    return Object.assign({}, state, {
      alerts: alerts
    });
    default:
    return state
  }
}