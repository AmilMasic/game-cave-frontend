export function fetchPublishers() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/publishers')
    .then(resp => resp.json())
    .then(publishers => dispatch({
      type: 'FETCH_PUBLISHERS',
      payload: publishers
    }))
  }

}
