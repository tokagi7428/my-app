import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserContext } from "../../reducer/Store";

function FormNonUser({ data }) {
  const { setShowForm, showForm } = data;
  const { state, dispatch } = useContext(UserContext);
  const [nonUser, setNonUser] = useState({
    fname: "" || state.nonUser?.fname,
    lname: "" || state.nonUser?.lname,
    telephone: "" || state.nonUser?.telephone,
    address: "" || state.nonUser?.address,
  });
  const formNonUser = (e) => {
    const value = e.target.value;
    setNonUser({ ...nonUser, [e.target.name]: value });
  };
  const submitForm = () => {
    const { fname, lname, telephone, address } = nonUser;
    const ok = confirm("Do you want to save this form?");
    if (telephone === "" || fname === "" || lname === "" || address === "") {
      return alert("Plz fill full");
    } else if (!ok) {
      return;
    } else {
      setShowForm(false);
      dispatch({ type: "ADD_INFO_NONUSER", payload: nonUser });
    }
  };
  return (
    <div className="">
      {showForm && (
        <div className="form-payment">
          <Container className="form-payment-inside px-3">
            <span onClick={() => setShowForm(false)} className="close-payment">
              CLOSE
            </span>
            <Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={nonUser.fname}
                  name="fname"
                  placeholder="First Name"
                  onChange={formNonUser}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={nonUser.lname}
                  name="lname"
                  placeholder="Last Name"
                  onChange={formNonUser}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tel</Form.Label>
                <Form.Control
                  type="text"
                  value={nonUser.telephone}
                  name="telephone"
                  placeholder="Last Name"
                  onChange={formNonUser}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control
                  as="textarea"
                  value={nonUser.address}
                  type="textarea"
                  name="address"
                  rows={3}
                  onChange={formNonUser}
                />
              </Form.Group>
            </Form>
            <Button className="mt-2" onClick={submitForm}>
              submit
            </Button>
          </Container>
        </div>
      )}
    </div>
  );
}

export default FormNonUser;
