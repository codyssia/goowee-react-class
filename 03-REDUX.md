## REDUX (Part 1)
1. Install redux, react-redux, and thunk: `yarn add redux react-redux thunk`
2. Create a folder called actions (inside src)
3. Create constants.js (inside actions)
4. Add and export a POST_MESSAGE constant:
```
export const POST_MESSAGE = 'POST_MESSAGE';
```
5. Create messageActions.js (inside actions)
6. Import the POST_MESSAGE constant:
```
import { POST_MESSAGE } from './constants';
```
7. Create a postMessage action creator:
```
export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    message,
  }
}
```
8. Create a folder called reducers (inside src)
9. Create reducer.js (inside reducers)
10. Import POST_MESSAGE (from actions/constants.js):
```
import { POST_MESSAGE } from '../actions/constants';
```
11. Create a messagesReducer function, pass in state (with a default param of []) and action, and make this the default export:
```
export default function messagesReducer(state = [], action) {

}
```
12. Add a switch statement inside messagesReducer. Pass in action.type:
```
switch(action.type) {

}
```
13. Inside the switch, add a case for POST_MESSAGE, and return an array. Add a default and return state:
```
case POST_MESSAGE:
  return [];
default:
  return state;
```
14. In the array, use the spread operator on state, and pass action.message into Object.assign (after the empty object):
```
  ...state,
  Object.assign({}, action.message),
```
15. Create index.js (inside reducers), and add the following:
```
import { combineReducers } from 'redux';
import messages from './messagesReducer';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
```
16. Create configureStore.js (inside src), and add the following:
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}
```
17. Open index.js
18. Import Provider and configureStore:
```
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';
```
19. Create the store (above the AppContainer):
```
const store = configureStore();
```
20. In AppContainer, wrap the BrowserRouter (and everything else) in a `<Provider>` (and close it)
21. Add a store prop into Provider, and pass the store into that:
```
<Provider store={store}>
```
22. Open App.js
23. Import PropTypes, connect, and bindActionCreators, as well as the messageActions:
```
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../actions/messageActions';
```
24. Change the export passes App into the function returned from connect()
```
export default connect()(App);
```
25. Pass two messages into connect: mapStateToProps and mapDispatchToProps
26. Create the function mapStateToProps, and pass in state and ownProps:
```
function mapStateToProps(state, ownProps) {

}
```
27. Return messages from state (which comes from the rootReducer):
```
return {
  messages: state.messages,
}
```
28. Create the function mapDispatchToProps, and pass in dispatch:
```
function mapDispatchToProps(dispatch) {

}
```
29. Return actions with bindActionCreators:
```
return {
  actions: bindActionCreators(actions, dispatch),
}
```
30. Add propTypes and require messages and actions:
```
App.propTypes = {
  messages: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}
```


## REDUX (Part 2)
1. Add state to the App:
```
state = {

}
```
2. Give it a message property, set to an empty string: `message: '',`
3. Create a method called handleChangeMessage. Pass in event, and pull message out. Set state with the new message:
```
handleChangeMessage = event => {
  const message = event.target.value;
  return this.setState({ message });
}
```
4. Add an input element below the heading, with the message value from state. Invoke handleChangeMessage on changes:
```
<input
  value={this.state.message}
  onChange={this.handleChangeMessage}
/>
```
5. Create another method, handleSubmitMessage. Get the message from state and pass it into the postMessage action. Then reset state:
```
handleSubmitMessage = () => {
  const message = { text: this.state.message };
  this.props.actions.postMessage(message);
  return this.setState ({ message: '' });
}
```
6. Add another input of type submit, to trigger handleSubmitMessage on a click:
```
<input
  type="submit"
  onClick={this.handleSubmitMessage}
/>
```
7. Map over this.props.messages (below the inputs). Pass in message and i:
```
{this.props.messages.map((message, i) =>

)}
```
8. For each iteration, return a p element. Give it a key of i, and pass in message.text:
```
<p key={i}>{message.text}</p>
```
