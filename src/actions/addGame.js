export const addGame = (game) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/games', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(game => dispatch({type: 'ADD_GAME', payload: game}))

}
