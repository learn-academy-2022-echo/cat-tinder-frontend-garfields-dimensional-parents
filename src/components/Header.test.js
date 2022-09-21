import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Header from './Header'


describe("<Header/>", ()=>{
  test("Header renders without error", ()=>{
    // Arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const indexLink = screen.getByText(/Meet the Cats/i)
    expect(indexLink).toBeInTheDocument()
  })
  test("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meet the Cats"))
    expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("Add a New Cat"))
    expect(screen.getByText("Add a New Cat")).toBeInTheDocument()
    userEvent.click(screen.getByText("Adopt a Cat!"))
    expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument()
  })
})