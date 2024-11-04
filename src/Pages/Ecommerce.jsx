import { Fragment } from "react"
import { Button, Card, Carousel, Container, Form, Image, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const Ecommerce = () => {
    return <Fragment>
        {/* Header / NavBar */}
        <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Image src="./logo.png" alt="logo" height={40}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#collections">Collections</Nav.Link>
                    <Nav.Link href="#about-us">About Us</Nav.Link>
                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Carousel */}

        <Carousel nextIcon={<FaArrowAltCircleRight />} prevIcon={<FaArrowAltCircleLeft />}>
            <Carousel.Item>
                <Image src="./ad1.png" alt="ad1" className="w-100" style={{ height: "500px" }} />
                <Carousel.Caption>
                    <h3>Hello</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo ipsa corporis voluptates dolore rem iste odit incidunt perspiciatis ducimus molestiae saepe dicta impedit, distinctio voluptatibus minus, fuga accusamus debitis!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./ad2.png" alt="ad2" className="w-100" style={{height: "500px"}}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./ad3.png" alt="ad3" className="w-100" style={{height: "500px"}}/>
            </Carousel.Item>
        </Carousel>

        {/* Cards */}

        <div className="d-flex overflow-auto gap-2 mt-3 px-2">
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
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
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
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
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
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
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
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
        </div>

        {/* Form */}

        <div className="d-flex flex-column flex-md-row">
            <Stack className="w-100">
                <h3>Contact Us</h3>
                <Stack>
                    <div>Email: sample@gmail.com</div>
                    <div>Phone: +91 8374837383738</div>
                </Stack>
            </Stack>
            <Form className="w-100">
                <Form.Group>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter your name..."/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message: </Form.Label>
                    <Form.Control as={"textarea"} rows={4} placeholder="Enter your name..." style={{resize: "none"}}/>
                </Form.Group>
                <Button>SendMessage</Button>
            </Form>
        </div>
    </Fragment>
}

export default Ecommerce