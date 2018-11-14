import { POST_MESSAGE } from '../actions/constants';

export default function messagesReducer(state = [], action) {
  switch(action.type) {
    case POST_MESSAGE:
      return [
        ...state,
        Object.assign({}, action.message),
      ];
    default:
      return state;
  }
}
