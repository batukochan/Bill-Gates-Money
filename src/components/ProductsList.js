import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/bgSlice/bgSlice'
import { useEffect, useRef } from 'react'
import { increase } from '../redux/bgSlice/bgSlice'
import { Card, Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
import './styles.css'
const ProductsList = () => {
   

    const handle = (targetvalue) => {

        console.log(targetvalue.innerHTML)
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const data = useSelector(state => state.billgates.products)

    return (

        <Container>
            <Row>
                {data.map((product, i) =>
                    <Col key={i} md={3} sm={6}>
                        <Card className='mb-1'>
                            <Card.Img className='cardImg' variant="top" src={`${product.image}`} />
                            <Card.Body>
                                <Card.Title className='ucnokta'>{product.title}</Card.Title>
                                <Card.Text className='ucnokta' style={{ fontSize: '12px' }}>
                                    {product.description}
                                </Card.Text>
                                <Card.Title style={{ fontSize: '16px' }}>{product.price} $</Card.Title>

                                <div className='inputArea'>
                                    <Button size='sm' variant="danger" >Sell</Button>
                                    <InputGroup  >
                                        <FormControl style={{ textAlign: 'center' }} className='smaller-input' size='sm' type="number" />
                                    </InputGroup>

                                    <Button size='sm' variant='info' onClick={(e) => handle(e.target)} >Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>

    )
}

export default ProductsList
