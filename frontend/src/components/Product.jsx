import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Rating from './Rating';


function Product(Props) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${Props.product._id}`}>
            <Card.Img src={Props.product.image}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${Props.product._id}`}>
                <Card.Title as="div">
                    <strong>{ Props.product.name }</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={Props.product.rating} text={`${Props.product.numReviews} reviews`} color={'#f8e825'} />
                </div>
            </Card.Text>
            <Card.Text as="h3">
                ${Props.product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product