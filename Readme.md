# PieceMeal V2

The deployed server is running at http://piecemeal-api.herokuapp.com/api-docs/. Also see the
Github repo here; https://github.com/psithanant/piece-meal-swagger

## Overview
This app is designed for users with dietary restrictions. Piecemeal provides
users with recipes and ingredients that do not violate their dietary restrictions.
Furthermore, PieceMeal users can explore other user-created recipes for new cooking ideas.
PieceMeal users can also set up their own dashboard profile where they can
keep track of their favorite recipes, ingredients, and analytical information.

## Technology

Front End:

On the Front End Piece Meal V2 is built with React-native and Redux. Additional technologies used include Redux-Forms, Fetch, React-Native-Router, React-Native-Base, Redux-Thunk/Redux-Promise-Middleware, and Jest for testing.

Back End:

The server for Piece Meal is built with Node.js and Express with a PostgreSQL database. To connect the server and database Knex and Bookshelf are used.
For authentication PieceMeal uses Facebook OAuth with Passport Sessions to authenticate and authorize students and JWT Tokens are transported in cookies for admins. Additional technologies used include bcrypt, Circles-CI, body-parser, and mocha/supertest for testing.

### Running the App:
To run PieceMeal:

#### iOS

Download & install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the App Store.

To initiate React Native, please run these commands in your terminal:
  - `brew install node` to install node
  - `brew install watchman` to install watchman
  - `npm install -g react-native-cli` to install React-Native's command line interface
  - `npm install rnpm -g
  - `npm install react-native-module --save
  - `rnpm link react-native-module
  - `sudo gem install cocoapods

Then, to open the app in the simulator, run:
  - `react-native run-ios
