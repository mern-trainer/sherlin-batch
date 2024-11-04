import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Bootstrap = () => {
    
    const array = new Array(10).fill(0).map((_, index) => index + 1)
    
    return <Container fluid className="mt-1">
        <Row>
            {/* <Col xs="12" sm="6" md="4" lg="3" sm="6" md="4" lg={{offset: 1, span: 2}} className="bg-danger">1</Col>
            <Col xs="12" sm="6" md="4" lg="3" sm="6" md="4" lg="3" className="bg-success">1</Col>
            <Col xs="12" sm="6" md="4" lg="3" sm="6" md="4" lg="3" className="bg-warning">1</Col>
            <Col xs="12" sm="6" md="4" lg="3" sm="6" md="12" lg="3" className="bg-danger">1</Col> */}
            {
                array.map(element => {
                    return <Col key={element} xs="12" sm="6" md="4" lg="3">
                        <Card>
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1602458519/photo/colorful-powder-explosion-on-white-background.jpg?s=612x612&w=0&k=20&c=qP4wiTwHShIIIi4pfx2EDO-ynQ1rnt3meO2o3K47n9A=" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="success" className="w-100">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
        </Row>
    </Container>
}

export default Bootstrap
