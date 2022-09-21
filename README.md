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

# Jest
  - Built into React when we use "Create React App"
  - Perfect for working with lots of different testing libraries 
  - Has a set of methods for creating simple tests
    - describe
    - it/ test
    - expect
  


# RTL (React-Testing-Library)  
" The more your tests resemble the way your software is used, the more confidence they can give you." - RTL authors

- Built into React when we use "Create React App"
- Great for accessing both components and DOM nodes
  - The rtl authors recommend you focus on nodes instead of entire Components
-  


Basic Test
 ```javascript
import { screen, render } from '@testing-library/react'
import Component from './Component'


describe("<Component/>", ()=>{
  // A user can see the Component page
  test("renders the Component page for the user", ()=>{
    // Arrange
    render(<Component/>)
    // Act - 
      // can be interactions like clicking, hovering or typing
      // can be passive, like seeing something
    const element = screen.getByText(/It's text!/i)
    // Assert
    expect(element).toBeInTheDocument()
  })
})
```

Interactive test
  - using User-Event Testing Library
  - If you need to update the user-event library   
    $ `yarn add --dev @testing-library/user-event`
    
 ```javascript

import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Component from './Component'


describe("<Component/>", ()=>{
  test("Component renders without error", ()=>{
    // Arrange
    render(<Component/>)
    const indexLink = screen.getByText(/Meet the Cats/i)
    expect(indexLink).toBeInTheDocument()
  })
  test("Component has clickable links", () => {
    render(
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Link 1"))
    expect(screen.getByText("Link 1")).toBeInTheDocument()
    userEvent.click(screen.getByText("Link 2"))
    expect(screen.getByText("Link 2")).toBeInTheDocument()
    userEvent.click(screen.getByText("Link 3"))
    expect(screen.getByText("Link 3")).toBeInTheDocument()
  })
})
```

# CRUD Functionality 

# Read Functionality

## Index
  - Shows all the data

    # Testing
    - Smart and dumb components 
    - testing a dumb component with props
      - It can only check for values it is being handed 
      - test for all the cats being passed as props
      
## Show
  - Shows one instance of our data





