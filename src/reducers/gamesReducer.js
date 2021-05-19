export default function gamesReducer(state = [], action) {
  switch (action.type) {
    // case 'FETCH_GAMES':
    //   return {games: action.payload}
    case 'ADD_GAME':
      return {...state, games: [...state.game, action.payload]}
    default:
      return state
  }
}
