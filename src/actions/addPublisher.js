export const addPublisher = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/publishers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(publisher => dispatch({type: 'ADD_PUBLISHER', payload: publisher}))

  }
}
