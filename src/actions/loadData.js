export const loadAction = () => dispatch => {
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://192.168.43.224:3000/state', true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
     dispatch({
      type: 'LOAD_ACTION',
      payload: data
    })
   }
 }

 request.send();
}