import { screen, render } from '@testing-library/react'
import CatShow from './CatShow'
import mockCats from '../mockCats'
import { MemoryRouter } from 'react-router-dom'

describe("<CatShow/>", () => {
  const cat = mockCats[0]
  test("renders a card for the cat that is passed down to component", () => {
    // Arrange
    const route = "/catshow/1"
    render(
        <MemoryRouter initialEntries={[route]}>
          <CatShow cats={mockCats} />
        </MemoryRouter> 
        )
    // Act 
      const meowElement = screen.getByText(cat.name)
      // Assert
      expect(meowElement).toBeInTheDocument()
  })
})