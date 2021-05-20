export default function publishersReducer(state = {
  publishers: []
}, action) {
  switch (action.type) {

    case 'FETCH_PUBLISHERS':
      return {publishers: action.payload}
    case 'ADD_PUBLISHER':
      return {...state, publishers: [...state.publishers, action.payload]}
      case 'ADD_GAME':
     let publishers = state.publishers.map(publisher => {
       if (publisher.id === action.payload.id) {
         return action.payload
       } else {
         return publisher
       }
     })
     return {...state, publishers: publishers}
    default:
      return state
  }
}
