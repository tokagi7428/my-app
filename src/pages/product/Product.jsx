import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../reducer/Store";
import product from "../../products.js";
import { useContext } from "react";

function Product() {
  const { state, dispatch } = useContext(UserContext);
  const { cart } = state;
  const param = useParams();
  const { id } = param;

  const productId = product.data.filter((item) => item.id == id);
  // console.log(cart.cartItems);

  function addToCart(product) {
    const newItem = cart.cartItems.find((x) => x.id === product.id);
    // console.log("quantity: ", newItem.quantity);
    const quantity = newItem ? newItem.quantity + 1 : 1;
    dispatch({ type: "Add_TO_CART", payload: { ...product, quantity } });
  }

  return (
    <div className="mt-5">
      <Container className="pt-5">
        <Row>
          <Col md={6}>
            <img
              src={productId[0].img}
              alt={productId[0].name}
              className="w-100"
              style={{ height: "400px" }}
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body className="">
                <Card.Title className="text-center">
                  รายละเอียดสินค้า
                </Card.Title>
                <Card.Text>ชื่อสินค้า : {productId[0].name}</Card.Text>
                <Card.Text>ราคา : {productId[0].price} บาท</Card.Text>
                <Card.Text>รายละเอียดสินค้า : {productId[0].desc}</Card.Text>
                <div className="d-flex justify-content-around">
                  {/* <Link to="/cart"> */}
                  <Button
                    variant="warning"
                    onClick={() => addToCart(productId[0])}
                  >
                    Add to Cart
                  </Button>
                  {/* </Link> */}
                  <Link to="/cart">
                    <Button variant="success">ซื้อเลย</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
