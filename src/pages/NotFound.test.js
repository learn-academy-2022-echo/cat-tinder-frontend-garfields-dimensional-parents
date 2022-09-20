import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'


describe("<NotFound/>", () => {
  // A user can see the NotFound page
  test("renders the NotFound page for the user", () => {
    // Arrange
    render(<NotFound />)
    // Act - 
    // can be interactions like clicking, 
    // be passive actions like seeing something
    const element = screen.getByText(/Ooops, no cats here!/i)
    // Assert
    expect(element).toBeInTheDocument()
  })
})