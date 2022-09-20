import { screen, render } from '@testing-library/react'
import Home from './Home'

// describe("", ()=>{
//   test("", ()=>{
//     expect()
//   })
// })

describe("<Home/>", ()=>{
  // A user can see the home page
  test("renders the home page for the user", ()=>{
    // Arrange
    render(<Home/>)
    // Act - 
      // can be interactions like clicking, 
      // be passive actions like seeing something
    const element = screen.getByText(/It's like Tinder, but for Cats/i)
    // Assert
    expect(element).toBeInTheDocument()
  })
})