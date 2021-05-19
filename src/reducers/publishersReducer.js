export default function publishersReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_PUBLISHERS':
      return {publishers: action.payload}
    case 'ADD_PUBLISHER':
      return {...state, publishers: [...state.publishers, action.payload]}
    default:
      return state
  }
}
