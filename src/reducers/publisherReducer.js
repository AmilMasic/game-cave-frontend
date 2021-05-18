export default function publisherReducer(state = {publishers: []}, action) {
  switch (action.type) {
    case 'FETCH_PUBLISHERS':
      return {publishers: action.payload}
    default:
      return state
  }
}
