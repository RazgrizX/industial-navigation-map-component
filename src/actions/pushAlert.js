export const pushAlert = (alert) => dispatch => {
  let now = new Date();
  console.log(alert);
  dispatch({
    type: 'PUSH_ALERT',
    payload: {text: alert, time: now}
  })
}