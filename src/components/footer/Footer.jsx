import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function Footer() {
  const location = useLocation();
  // console.log("pathname", location.pathname);
  const check =
    location.pathname === "/login"
      ? true
      : location.pathname === "/register"
      ? true
      : false;
  return (
    <div style={{ background: "#eee" }} className="mt-5">
      <Container className={check ? "d-none pt-5" : "pt-5"}>
        <Row>
          <Col className="h6" lg={2} md={6} sm={12}>
            <ul style={{ fontSize: "13px" }}>
              <span className="nav-link text-secondary">ค้นหาสินค้า</span>
              <Link to="#" className="nav-link text-secondary">
                แว่นตา
              </Link>
              <Link to="#" className="nav-link text-secondary">
                แว่นกันแดด
              </Link>
              <Link to="#" className="nav-link text-secondary">
                แบรนด์ทั้งหมด
              </Link>
              <Link to="#" className="nav-link text-secondary">
                ค้นหาหน้าพิเศษ
              </Link>
            </ul>
          </Col>
          <Col className="h6" lg={3} md={6} sm={12}>
            <ul className="" style={{ fontSize: "13px" }}>
              <h6 className="nav-link text-secondary">
                เกี่ยวกับการซื้อสินค้า
              </h6>
              <Link to="#" className="nav-link text-secondary">
                เลนส์ของเรา
              </Link>
              <Link to="#" className="nav-link text-secondary">
                Logo Customer Guarantees
              </Link>
            </ul>
          </Col>
          <Col className="h6" lg={2} md={6} sm={12}>
            <ul className="" style={{ fontSize: "11px" }}>
              <h6 className="nav-link text-secondary">เกี่ยวกับLogo</h6>
              <Link to="#" className="nav-link text-secondary">
                ค้นหาร้านค้า
              </Link>
              <Link to="#" className="nav-link text-secondary">
                บริการทั้งหมด
              </Link>
              <Link to="#" className="nav-link text-secondary">
                บริการเปลี่ยนเลนส์
              </Link>
              <Link to="#" className="nav-link text-secondary">
                Logo MEMBERSHIP
              </Link>
              <Link to="#" className="nav-link text-secondary">
                ข้อมูลบริษัท
              </Link>
              <Link to="#" className="nav-link text-secondary">
                ร่วมงานกับเรา
              </Link>
              <Link to="#" className="nav-link text-secondary">
                EYE CAMP
              </Link>
            </ul>
          </Col>
          <Col className="h6" lg={2} md={6} sm={12}>
            <ul className="" style={{ fontSize: "13px" }}>
              <h6 className="nav-link text-secondary">ช่วยเหลือ</h6>
              <Link to="#" className="nav-link text-secondary">
                ติดต่อเรา
              </Link>
              <Link to="#" className="nav-link text-secondary">
                FAQs
              </Link>
              <Link to="#" className="nav-link text-secondary">
                การใช้งานเว็บไซต์
              </Link>
              <Link to="#" className="nav-link text-secondary">
                สำหรับลูกค้าใหม่
              </Link>
              <div className="mt-4">
                <Link to="#" className="nav-link text-secondary">
                  แผนผังเว็บไซต์
                </Link>
                <Link to="#" className="nav-link text-secondary">
                  สร้างบัญชีใหม่
                </Link>
              </div>
            </ul>
          </Col>
          <Col className="h6" lg={3} md={6} sm={12}>
            <h6 className="text-secondary">ติดต่อเรา</h6>
            <div className="d-flex">
              <h3>02-123-4567</h3>
              <div className="d-flex flex-column text-secondary ps-3">
                <span>เวลาทำการ</span>
                <span>จ.-ศ. 9:30 - 18:30</span>
              </div>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437__340.jpg"
              alt=""
              className="img-fluid w-25 mt-5"
            />
          </Col>
        </Row>
        <div className="d-flex py-5 gap-4 h4">
          <i className="bi bi-facebook  icon-social"></i>
          <i className="bi bi-instagram icon-social"></i>
          <i className="bi bi-twitter icon-social"></i>
          <i className="bi bi-shop icon-social"></i>
          <i className="bi bi-youtube icon-social"></i>
        </div>
      </Container>
      <footer className={check ? "login-footer" : "pt-5 d-none"}>
        <p>COPYRIGHT (C) Logo co., ltd. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default Footer;
