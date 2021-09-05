# react-calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

The deployed version of this app is available online → [React Calculator](https://react-calculator-quiz.herokuapp.com/login).

To test the functionalities of this application you can use the following credentials:

```
email: yoss@example.com
password: 123456
```

### Getting Started

To get started clone this repo and install the dependencies in the root directory ↓

| STEPS   | [NPM](https://www.npmjs.com/)     |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Run     |`npm run dev`                      |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Layout and Tree

```

.
├── backend                            # BACKEND
│   ├── config                         # DB connection   
│   ├── controllers                    # Routes controllers
│   ├── data                           # Test data
│   ├── middleware
│   ├── models                         # DB models
│   ├── routes                         # API routes
│   ├── utils                          # JSON web token
│   ├── seeder.js                      # DB seeder
│   └── server.js                      # Server file
├── frontend                           # FRONTEND
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   └── src
│       ├── actions                    # REDUX Actions                       
│       ├── components                 # Reusable Components
│       ├── constants                  # REDUX Constants                       
│       ├── reducers                   # REDUX Reducers                       
│       ├── screens                    # App Screens
│       ├── utils                      # Config for API call 
│       ├── App.css
│       ├── App.js
│       ├── index.css
│       ├── index.js                       
│       └── store.js                   # REDUX Store
├── .env                               # Config variables (Node env, port, DB string & JWT secret)
├── .gitignore
├── package-lock.json
├── package.json
├── Procfile                           # HEROKU deployment
└── README.md

```
### App

#### ES6 + Features

- Arrow Functions
- Template Literals
- Destructuring Assignment
- Block-Scoped Variables Let and Const
- async await with try/catch
- Modules export/import
- New Built-In Methods

#### Libraries/Frameworks

- react: UI library
- react-router-dom: Browser Router, Route and Link components
- redux react-redux: Global State Management framework
- redux-thunk: Middleware for async calls
- axios: For HTTP requests
- nodejs: JS runtime for BE
- express: NodeJS framework to create server
- express-async-handler: To handle async operations to retrieve data from DB
- mongoose: For database structuring with mongodb
- bcryptjs: For hashing user passwords
- jsonwebtoken: JWT implementation library
- dotenv: Loads environment variables from a .env file into process.env
- nodemon: To run server file on every new change
- concurrently: To run both FE + BE server at the same time

#### Flow

##### Component Hierarchy

```
  App
│ │
│ ├── PassedScreen
│ │
│ ├── FailedScreen
│ │
│ ├── Logo
│ │
│ ├── LoginScreen
│ │
│ ├── RegisterScreen
│ │
│ ├── HomeScreen
│ │   ├── Navbar
│ │   └──Calculation
```

#### Api Calls

##### Users

1. Post - Register User

```
'../api/users'

```

2. Post - Login User

```
'../api/users/login'

```

3. Post - Record Total Attempts

```
'../api/users/attempts'

```

4. Get - Get User Details

```
'../api/users/:id'

```


##### Calculations

1. Get - Get Calculations List

```
'../api/calculations'

```

2. Get - Get Calculation Details

```
'../api/calculations/:id'

```

##### NOTE: Local Storage

JWT token for authentication is stored in the local storage of the browser and added to header of the request.

### Author

- [callejas1](https://github.com/callejas1)
