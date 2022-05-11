import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../assets/css/productDetail.css';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
export default function ProductDetail(props) {
  const id = props.id;
  const [product, setProduct] = useState(null);
  const fetchData = async () => {
    const { data } = await axios.get("/api/products/" + id);
    setProduct(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  return (
    <Container className="container">
      {product && (
        <Card style={{ paddingTop:"50px"}}>
          {/* <h2 style={{fontWeight:"bold", fontSize:"20px", textAlign:"center", marginTop:"-20px"}}> Detail of {product.title} </h2> */}
          <Row >
            <Col md={6}>
              <CardImg
                width="70%"
                alt="Card image cap"
                src={"/upload/" + product.image}              
              />
            </Col>

            <Col md={6}>
              <CardBody >
                <CardTitle className="title" tag="h5">{product.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.category?.name}
                </CardSubtitle>

                <CardText className="info"> <b>Information:</b> {product.description}... </CardText>
                <CardText className="price">
                  <b>Cost: </b>{product.price} USĐ</CardText>
                <Button color="success" className="btnAdd"
                outline >Add to Card</Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
}
