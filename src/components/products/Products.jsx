import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../reducer/Store";

function Products({ product }) {
  // console.log(product);
  const { state, dispatch } = useContext(UserContext);
  const addToCart = (product) => {
    const newItem = state.cart.cartItems.find((x) => x.id == product.id);
    const quantity = newItem ? newItem.quantity + 1 : 1;
    dispatch({ type: "Add_TO_CART", payload: { ...product, quantity } });
  };
  return (
    <Card style={{ height: "350px" }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          className="card-img-top"
          src={product.img}
          alt={product.name}
          style={{ height: "200px" }}
        />
      </Link>
      <Card.Body className="">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>price : {product.price}</Card.Text>
        <Link to="/cart">
          <Button variant="warning" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Products;
