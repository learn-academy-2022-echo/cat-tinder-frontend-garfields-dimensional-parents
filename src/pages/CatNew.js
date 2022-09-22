// imports
import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {

  // data
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  // methods/functions
  const handleCats = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setNewCat({...newCat, [e.target.name]: e.target.value})
    console.log(newCat)
    // Pass the path you want to navigate as the argument 
  }
  
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  console.log("newcat object", newCat)

  return (
    <>
      <h2> Cat's Profile </h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Cat's Name
          </Label>
          <Input
            name="name"
            placeholder="Put that fur ball's name"
            type="text"
            onChange={handleCats}
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Cat's Age
          </Label>
          <Input
            name="age"
            placeholder="Put that fur ball's age"
            type="number"
            onChange={handleCats}
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Cat's Interests
          </Label>
          <Input
            name="enjoys"
            placeholder="What gets your cat meowing"
            type="text"
            onChange={handleCats}
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Cat's Picture
          </Label>
          <Input
            name="image"
            placeholder="Load up your purrrrrfect photo"
            type="url"
            onChange={handleCats}
            value={newCat.image}
          />
        </FormGroup>
        <Button
          onClick={handleSubmit}
          name="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  )
}
export default CatNew