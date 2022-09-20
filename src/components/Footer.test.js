import { screen, render } from '@testing-library/react'
import Footer from './Footer'


describe("<Footer/>", () => {
  // A user can see the Footer page
  test("renders the Footer page for the user", () => {
    // Arrange
    render(<Footer />)
    // Act - 
    // can be interactions like clicking, 
    // be passive actions like seeing something
    const element = screen.getByText(/2022 Charlean, Austin & Sarah/i)
    // Assert
    expect(element).toBeInTheDocument()
  })
})