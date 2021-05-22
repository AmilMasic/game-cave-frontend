export const deleteGame = (gameId, publisherId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/publishers/${publisherId}/games/${gameId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(publisher => dispatch({type: 'DELETE_GAME', payload: publisher}))
  }

}
