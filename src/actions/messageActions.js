import { POST_MESSAGE } from './constants';

export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    message,
  }
}
