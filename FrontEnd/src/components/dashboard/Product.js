import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

import "../../assets/css/product.css"
import { CartDispatchContext, addToCart } from "../../contexts/cart";


// ĐÂY LÀ PHẦN SẢN PHẨM CỦA TRANG USER

const Product = (props) => {

  const dispatch = useContext(CartDispatchContext);
  const handleAddToCart = () => {
    const product = { props, quantity: 1 };
    addToCart(dispatch, product);

    console.log("Was Add Product");

  };

    // *******************Phần này để cắt chuỗi cho information******************************
  // const truncate = (input) =>
  //   input.length > 20 ? `${input.substring(0, 20)}...` : input;
  return (

    <Card className="card_Cover">



      <CardImg
        onClick={() => props.openModal(props.id)}
        alt="Card image cap"
        src={props.image}
        height="300"
        className="cart-img"
      />

      <CardBody className="p-4">
          <CardTitle tag="h5" className="cart-title">
            <b>{props.title}</b>
          </CardTitle>
        {/* <CardSubtitle>{truncate(props.subtitle)}</CardSubtitle> */}
        <CardText className="mt-3">{props.text} USD</CardText>

        {/* *******************ĐÂY LÀ PHẦN THÊM VÀO GIỎ HÀNG Ở TRANG USER****************** */}

        <div className="btn-product">
          <Button className="cart-button" outline color="secondary" onClick={handleAddToCart}><span className="cart"> Add to</span> Cart</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Product;
