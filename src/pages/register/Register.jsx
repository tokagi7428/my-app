import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Register() {
  return (
    <div className="mt-4">
      <Container className="pt-5">
        <Form className="w-75 mx-auto">
          <h1 className="text-center">สมัครใช้งาน</h1>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Row>
            <Col md={6} sm={12}>
              <Form.Group className="mb-2">
                <Form.Label>ชื่อ </Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-2">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>ที่อยู่</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Comfirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button className="">สมัครใช้งาน</Button>
          <div className="mt-3">
            มีบัญชีผู้ใช้แล้ว ? <a href="/login">เข้าใช้งาน</a>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
