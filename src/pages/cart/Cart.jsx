import { useState } from "react";
import { useContext } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import FormNonUser from "../../components/formNonuser/FormNonUser";
import { UserContext } from "../../reducer/Store";

function Cart() {
  const [payment, setPayment] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const [address, setAddress] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const {
    cart: { cartItems },
  } = state;
  if (cartItems.length === 0) {
    return <p className="mt-5 text-center h1 text-danger">Not found product</p>;
  }
  // useEffect(() => {
  //   if (payment) {
  //     document.body.style.opacity = "0.6";
  //     document.body.style.background = "rgba(0,0,0,0.3)";
  //   } else {
  //     document.body.style.opacity = "1";
  //   }
  // });
  const total =
    cartItems.length > 0 &&
    cartItems.reduce((a, b) => a + b.quantity * b.price, 0);
  const updateToCart = (product, quantity) => {
    // console.log(product);
    dispatch({ type: "Add_TO_CART", payload: { ...product, quantity } });
  };

  const removeToCart = (item) => {
    dispatch({ type: "REMOVE_TO_CART", payload: item });
  };
  console.log({ state });
  return (
    <div className="mt-5 position-relative ">
      <Container className="pt-5 ">
        <Row className="bg-cart  ">
          <Col md={5} className="mb-2">
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-3">
                  รายการรวมสินค้า
                </Card.Title>
                <Card.Text className="d-flex justify-content-lg-between">
                  <span>ราคารวม</span>
                  <span>{total} บาท</span>
                </Card.Text>
                <Card.Text className="d-flex justify-content-lg-between">
                  <span>ค่าจัดส่ง</span>
                  <span>{100} บาท</span>
                </Card.Text>
                {state.userInfo.status ? (
                  <Card.Text>
                    Address : {state.userInfo.address.Street + " "}
                    <span>{state.userInfo.address.Province} </span>
                    <span>{state.userInfo.address.City} </span>
                    <span>{state.userInfo.address.Country} </span>
                    <span>{state.userInfo.address.Postal} </span>
                    <br />
                    <span>{state.userInfo.address.PhoneNumber} </span>
                  </Card.Text>
                ) : (
                  <span
                    onClick={() => setShowForm(true)}
                    className="text-primary text-decoration-underline"
                    style={{ cursor: "pointer" }}
                  >
                    edit
                  </span>
                )}
                {state.nonUser?.fname && (
                  <div>
                    <div className="">
                      name :{" "}
                      <span>
                        {state.nonUser?.fname} {"\t"}
                        {state.nonUser?.lname}
                      </span>
                    </div>
                    Address : <span> {state.nonUser?.address}</span>
                    <br />
                    <span>{state.nonUser?.PhoneNumber} </span>
                  </div>
                )}
              </Card.Body>
              <Card.Text className="m-2">
                <Button variant="success" onClick={() => setPayment(true)}>
                  กดชำระสินค้า
                </Button>
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} md={7} className="mb-2 ">
            <ListGroup>
              {cartItems?.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row className="align-items-center">
                    <Col sm={4} xs={4}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded img-fluid me-3"
                        style={{ height: "100px", width: "200px" }}
                      />
                    </Col>
                    <Col sm={2} xs={1}>
                      <span>{item.name}</span>
                    </Col>
                    <Col sm={2} xs={2}>
                      <span>{item.price}</span>
                    </Col>
                    <Col sm={3} xs={4} className="d-flex align-items-center">
                      <button
                        style={{ fontSize: "10px" }}
                        onClick={() => updateToCart(item, item.quantity + 1)}
                      >
                        <i
                          className="bi bi-plus-circle"
                          style={{ fontSize: "14px", cursor: "pointer" }}
                        ></i>
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        style={{ fontSize: "10px" }}
                        onClick={() => updateToCart(item, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <i
                          className="bi bi-dash-circle"
                          style={{ fontSize: "14px", cursor: "pointer" }}
                        ></i>
                      </button>
                    </Col>
                    <Col sm={1} xs={1}>
                      <span
                        className="text-danger nav-item"
                        onClick={() => removeToCart(item)}
                      >
                        <i
                          className="bi bi-trash-fill"
                          style={{ fontSize: "24px", cursor: "pointer" }}
                        ></i>
                      </span>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        {showForm && <FormNonUser data={{ setShowForm, showForm }} />}
        {payment && (
          <div className="form-payment">
            <Container className="form-payment-inside">
              <span onClick={() => setPayment(false)} className="close-payment">
                CLOSE
              </span>
              <InputGroup>
                <Form.Control placeholder="Card number" />
              </InputGroup>
              <InputGroup>
                <Form.Control placeholder="MM/YY" />
                <Form.Control placeholder="CVC" />
              </InputGroup>
              <h6 className="mt-3 text-secondary">Country or region</h6>
              <Form.Group>
                <Form.Select aria-label="Country">
                  <option value="china">China</option>
                  <option value="japan">Japan</option>
                  <option value="thailand">Thailand</option>
                  <option value="unitedstate">unitedstate</option>
                </Form.Select>
                <Form.Control placeholder="ZIP" />
              </Form.Group>
              <Form.Check
                type="checkbox"
                label="Save this card for future Vendors payments"
              />
              <Button className="mt-2">payment</Button>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cart;
