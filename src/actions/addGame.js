export const addGame = (game, publisherId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/publishers/${publisherId}/games`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(publisher => {
      if (publisher.error) {
        alert(publisher.error)
      } else {
        dispatch({type: 'ADD_GAME', payload: publisher})
      }
    }
  )
  }
}
