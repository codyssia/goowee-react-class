## NODE
* In package.json, add `"proxy": "http://localhost:8080",` above dependencies
* Copy MessageList.css into the new project folder
* Add `"server": "nodemon server.js",` to the scripts
* Change `"start"` to `"client"`
* Start the React app `yarn run client`
* Wait for browser (should see react stuff)
* Open a new terminal tab and start the server: `yarn run server`
