import React, { useState } from "react";
import { menuArray } from "./MenuArray";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,

  Alert,
} from "react-bootstrap";
import { Navbar, Nav,  } from "react-bootstrap";
import { motion } from 'framer-motion';

export default function MenuCart() {
  const [
    drinksArray,
    appsArray,
    soupSaladArray,
    rollsArray,
    nigiriArray,
    calzoneArray,
    pizzaArray,
  ] = menuArray;
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAgeConfirmation, setShowAgeConfirmation] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setShowSuccessAlert(true);
    if (drinksArray.includes(item)) {
      setShowAgeConfirmation(true);
    }
    setTimeout(() => {
      setShowSuccessAlert(false);
      setShowAgeConfirmation(false);
    }, 3000); // remove after 3 seconds
  };

  const openDescriptionModal = (item) => {
    setSelectedItem(item);
    setShowCartModal(false);
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const closeDescriptionModal = () => {
    setSelectedItem(null);
  };

  return (
    <Container>
      <FaShoppingCart
        size={30}
        onClick={openCartModal}
        style={{
          cursor: 'pointer',
          position: 'fixed',
          top: '2%',
          left: 'calc(100% - 50px)',
          zIndex: 9999, 
          marginTop: "120px"
        }}
      />
      <Alert
          variant="success"
          show={showSuccessAlert}
          style={{
            position: 'fixed',
            width:'80%',
            margin:'5px',
            top: '2%',
            zIndex: 9998, 
          }}
          onClose={() => setShowSuccessAlert(false)}
          dismissible
        >
          Item has been added to your cart. {showAgeConfirmation && "Are you 21 or over, punk?"}
        </Alert>
      <Modal show={showCartModal} onHide={closeCartModal} style={{color:'#333'}}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3 style={{fontFamily: "courier"}}>{item.title}</h3>
                <p style={{fontFamily: "courier"}}>{Array.isArray(item.price) ? item.price[0] : item.price}</p>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      <h1 className="mt-4" style={{ textDecoration: 'underline', width: "100%", margin: "0 auto", textAlign: "center" }}>To-Go Menu</h1>
      <motion.div
  initial={{ y: '100%' }} // Initially, move the section down below the viewport
  animate={{ y: 0 }} // Animate the section to slide up to its original position
  transition={{ type: 'spring', stiffness: 100 }} // Add a spring transition effect
>
    <Navbar expand="lg" style={{ width: "80%", margin: "0 auto" }}>
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "#ff00c1", border: "2px 2px solid white", margin: "0 auto"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ alignItems: "center", margin: "0 auto" }}>
            <Nav.Link href="#drinks" className="menu-nav-link">Drinks</Nav.Link>
            <Nav.Link href="#apps" className="menu-nav-link">Appetizers</Nav.Link>
            <Nav.Link href="#soupSalad" className="menu-nav-link">Soup/Salad</Nav.Link>
            <Nav.Link href="#rolls" className="menu-nav-link">Sushi Rolls</Nav.Link>
            <Nav.Link href="#nigiri" className="menu-nav-link">Nigiri</Nav.Link>
            <Nav.Link href="#calzones" className="menu-nav-link">Calzones</Nav.Link>
            <Nav.Link href="#pizza" className="menu-nav-link">Pizza</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </motion.div>

      {/* Drinks Section */}
      <motion.div
  initial={{ x: '-100%' }} // Initially, move the section down below the viewport
  animate={{ x: 0 }} // Animate the section to slide up to its original position
  transition={{ type: 'spring', stiffness: 100, duration: .5 }} // Add a spring transition effect
>
      <Row>

        <h2 id="drinks" className="mt-4 h2-menu" style={{ color: '#fff' }}>Drinks</h2>
        {drinksArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="enjoy a refreshing beverage"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333', fontFamily: "Courier"}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
      </motion.div>

      {/* Appetizers Section */}
      <Row>
        <h2 id="apps" className="mt-4 h2-menu" style={{ color: '#fff' }}>Appetizers</h2>
        {appsArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="You deserve an appetizer"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

                    {/* Soupds & Salads */}
      <Row>
        <h2 id="soupSalad" className="mt-4 h2-menu" style={{ color: '#fff' }}>Soups & Salad</h2>
        {soupSaladArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="Soup salad both why not?"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <h2 id="rolls" className="mt-4 h2-menu" style={{ color: '#fff' }}>Sushi Rolls</h2>
        {rollsArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="Domo aragato"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Nigiri */}
      <Row>
        <h2 id="nigiri" className="mt-4 h2-menu" style={{ color: '#fff' }}>Nigiri</h2>
        {nigiriArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="It just means fish I think"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


                  {/* Calzones */}
      <Row>
        <h2 id="calzones" className="mt-4 h2-menu" style={{ color: '#fff' }}>Calzones</h2>
        {calzoneArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
            <img
                    src={item.image}
                    className="card-img-top menu-img"
                    alt="enjoy a refreshing beverage"
                  />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

                    {/* pizzas */}
      <Row>
        <h2 id="pizza" className="mt-4 h2-menu" style={{ color: '#fff' }}>Pizza</h2>
        {pizzaArray.map((item, index) => (
          <Col md={4} key={item.item} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ maxHeight: "200px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {Array.isArray(item.price)
                    ? item.price.join(", ")
                    : item.price}
                </Card.Text>
                <Button style={{backgroundColor:'#333'}} onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button variant="link" style={{color:'#333'}} onClick={() => openDescriptionModal(item)}>
                  Show Description
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for showing menu item description */}
      <Modal show={selectedItem !== null} onHide={closeDescriptionModal} style={{ color: '#333' }}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontFamily: "Courier"}}>
          {selectedItem && <p>{selectedItem.description}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDescriptionModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
