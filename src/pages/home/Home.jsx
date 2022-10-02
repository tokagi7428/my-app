import React from "react";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import BannerComponent from "../../components/branner/BannerComponent";
import Products from "../../components/products/Products";
import products from "../../products.js";

function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const keys = products.data.map((item) => Object.keys(item))[0];

  const searchFilter = () => {
    return search
      ? products.data.filter((item) =>
          keys.some((key) =>
            typeof item[key] === "string"
              ? item[key].toLowerCase().includes(query.toLowerCase())
              : item["price"] >= Number(query)
          )
        )
      : products.data;
  };
  const handleQuery = (e) => {
    const query = e.target.value;
    if (query === "") {
      setSearch(false);
      setQuery("");
    } else {
      setQuery(query);
    }
    // console.log({ query, search });
  };
  return (
    <div className="">
      <BannerComponent />
      <div className="text-center my-4">
        <h2>รายชื่อสินค้า</h2>
        <InputGroup style={{ maxWidth: "500px" }} className="px-5 m-auto mt-3">
          <Form.Control onChange={handleQuery} />
          <Button
            onClick={() => setSearch(true)}
            style={{ zIndex: "9" }}
            disabled={query === ""}
          >
            search
          </Button>
        </InputGroup>
      </div>
      <Row className="w-75 mx-auto">
        {searchFilter().map((product) => (
          <Col lg={4} md={6} sm={12} key={product.id} className="mt-3">
            <Products product={product} style={{ height: "300px" }} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
