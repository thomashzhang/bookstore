# Book Store
Simple bookstore app written in typescript. Credits go to: https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA for having a base tutorial.

# Live Demo
Live demo: http://test-bookstore.herokuapp.com

# Local installation
1. Install NodeJS [7.10.0](https://nodejs.org/dist/v7.10.0/node-v7.10.0-x64.msi) and NPM.
2. Clone or download the repository.
3. Go into the project folder, and open up terminal/cmd/powershell/git shell.
4. Run `npm install` to install the dependencies.
5. Install [mongoDB](https://www.mongodb.com/download-center?jmp=nav#production) and if on Windows, set up environment variables properly (do a google search). Then run `mondgod` from the terminal/cmd.
5. Run `npm start` to start the app.
6. Go to http://localhost:3000 to view the app in action!
If you want to further develop this app, you must run `tsc` before running `npm start`. It might be a wise idea to change the `package.json` file's start script to `"start": "tsc || nodemon"` to not have to run both commands or refresh your browser window.
