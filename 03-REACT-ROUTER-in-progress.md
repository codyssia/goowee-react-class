## REACT ROUTER
1. Install react-router-dom: `yarn add react-router-dom`
10. Create a folder called components (inside src)
11. Move all 3 files beginning with App into components
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
