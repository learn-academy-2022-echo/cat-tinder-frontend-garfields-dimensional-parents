# Set up commands 
$ yarn create react-app cat-tinder
$ cd cat-tinder
$ git remote add origin https://github.com/learn-academy-2022-echo/cat-tinder-frontend-garfields-dimensional-parents.git
$ git checkout -b main
$ yarn start
$ git add .
$ git commit -m "Initial commit, all good"
$ git push origin main

# Tools we'll be using for Cat Tinder Frontend

# Trello
  - Trello
  - Github
    - Syllabus [Cat Tinder Intro](https://github.com/learn-academy-2022-echo/Syllabus/blob/main/cat-tinder/frontend/intro.md)
  - Wireframe
    - any wire framing app you desire to use
    - [Excalidraw](https://excalidraw.com/)
    - [Figma](https://www.figma.com/)
  - [React](https://reactjs.org/)
  - [Reactstrap](https://reactstrap.github.io/)
  - [React Router Dom](https://v5.reactrouter.com/web/api/BrowserRouter)
  - Mock Data

##  Trello and Kanban boards

- Kanban boards highlight two things  
    - Time, in the form of swim lanes  
    - Tasks, in the form of cards  

- A kanban board system will usually have boards that represent three concepts  
    - to-do   
    - doing  
    - done  
- The Cat Tinder Trellos have been set up for you and you do not need to update/ augment them to successfully complete Cat Tinder

Each card will have a branch name that will be required to use for your branches when looking to get a PR approved. 


## Github
- We'll be using a similar process to what we did with assessments but now we will be sharing our PR's and having them reviewed for approval daily

- cat-tinder-frontend and cat-tinder-backend will be different Github repositories that will utelize the same teams


## Creating Basic code for the react components 

```javascript
import React from './react'

const App = () => {
  return (
    <div> App </div>
  )
}
export default App
```


## Installs ReactStrap and React-Router-Dom
`$ yarn add bootstrap reactstrap react-router-dom`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

src/App.js
```javascript
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catindex" element={<CatIndex />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
```
### SPA (Single Page Application) Routing
 - Constantly running all JS in the browser
 - Mimics request response cycles like rails
  - but doesn't have the req/res cycle

# Mock Data
- When creating fullstack applications it's helpful to have mock data to work with while we are getting set up 

src/mockCats.js
```javascript
const cats = [
  {
    id: 1,
    name: "Peaches",
    age: 6,
    enjoys: "Cream",
    image: "https://images.unsplash.com/photo-1529"
  },
  ...
]
export default cats
```

# Styling components 
- checkout out Reactstrap documentations and find the Code that you want to pull in
  - Headers
  - Nav Bars
  - Links
- Be sure to double check the updates to your react project as you bring in the styled components. 


# Testing 


$ yarn add --dev @testing-library/user-event
