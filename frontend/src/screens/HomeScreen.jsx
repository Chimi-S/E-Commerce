import { useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import {useDispatch,useSelector} from "react-redux";
import {getProducts} from "../store/productSlice.jsx";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

function HomeScreen() {
    const dispatch = useDispatch();
    const {products: products, status: status, errorMessage: errorMessage} = useSelector((state) => state.product);

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch]);

    return (
        <div>
            <h1>Latest products</h1>
            { status === 'loading' ? <Loader/>
                : status === 'error' ? <Message variant='danger'>{errorMessage}</Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        )) }
                    </Row>
            }
        </div>
    );
}

export default HomeScreen