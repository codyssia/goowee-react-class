Install tools:
yarn

## CREATE-REACT-APP
1. Create a new app: `npx create-react-app create-react-app-redux`
2. Enter the app's directory: `cd create-react-app-redux`
4. Start the app: `yarn start`
3. Open the app in your text editor of choice
5. Open src/App.js
6. Remove `import logo from '. /logo.svg';`
7. Remove everything inside the <div>
8. Add a header inside the div with some text
9. Delete logo.svg
10. Create a folder called components (inside src)
11. Move all 3 files beginning with App into components


## REACT ROUTER
1. Install react-router-dom: `yarn add react-router-dom`
2. Open index.js
2. Add Component to the react import so it looks the import in App.js
3. Import BrowserRouter and routes (not yet created):
```
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
```
4. Remove the App import
5. Create an AppContainer component:
```
class AppContainer extends Component {
  render() {
    return (

    );
  }
}
```
6. Add `<BrowserRouter>` inside the return (+ closing tag)
7. Add a `<div>` inside BrowserRouter
8. Pass the routes into the div, like this: `{routes}`
9. Change App to AppContainer in the ReactDOM.render method (near the bottom)
10. Create routes.js (inside src)
11. Import React, Route, Switch, and the App component
```
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
```
12. Export Switch wrapped in parentheses (as the default), like this:
```
export default (
  <Switch>

  </Switch>
);
```
13. Add a new Route inside the Switch. Make App the component for the exact path of root ('/'):
```
<Route exact path={'/'} component={App} />
```


## REDUX (Part 1)
1. Install redux and react-redux: `yarn add redux react-redux`
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
import rootReducer from './reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
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
