import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../reducer/Store";
import { useLocation } from "react-router-dom";
function CartBox() {
  const { state } = useContext(UserContext);
  const location = useLocation();
  // console.log("pathname", location.pathname);
  const check =
    location.pathname === "/login"
      ? true
      : location.pathname === "/register"
      ? true
      : false;
  return (
    <div className={check ? "d-none" : ""}>
      <Link to="/cart">
        <div className="container-icon-cart" style={{ zIndex: "99" }}>
          <div className="position-relative">
            <i className="bi bi-bag-check icon-cart"></i>
            <Badge bg="danger" pill className="pill-badge">
              {state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </Badge>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartBox;
