import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardText, CardTitle } from 'reactstrap'

const CatShow = ({ cats }) => {
  const { id } = useParams()
  console.log(id)

  const cat = cats?.find(cat => cat.id === +id)

  return (
    <div className="page-body">
      <Card body className="card-show">
        <img
          alt="Card image cap"
          src={cat.image}
        />
        <CardTitle tag="h5">
          { cat.name }, { cat.age}
        </CardTitle>
        <CardText>
          {cat.enjoys}
        </CardText>
      </Card>
    </div>
  )
}
export default CatShow