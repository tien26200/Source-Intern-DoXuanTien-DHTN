import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  ButtonGroup,
} from "reactstrap";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup,
  decrementQty,
  incrementQty,
} from "../contexts/cart.js";

import { BiTrash } from "react-icons/bi";
import  "../assets/scss/CartPrieview.scss";

const CartPreview = (props) => {
  const navigate = useNavigate();
  const { items: cartItems } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const handleDecreament = (productId) => {
    return decrementQty(dispatch, productId);
  };

  const handleIncreament = (productId) => {
    return incrementQty(dispatch, productId);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    navigate("/checkout");
    navigate(0);
    console.log("checkout");
  };

  const cartTotal = cartItems
    .map((item) => item.props.text * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  return (
    <div>
      <Card style={{ overflowY: "auto", height: "350px" }}>
        <CardBody>
          
          <div className="cart-Title">
            <CardTitle tag="h5">Your Cart</CardTitle>
          </div>

          <div className="cart-Cover" style={{ overflowY: "auto", height: "350px" }}>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <tbody>
              {cartItems.map((product, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="img-Cart">
                        <img
                        src={product.props.image}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      </div>
                      
                      <div className="ms-3">
                        <h6 className="mb-0">{product.props.title}</h6>
                        <span className="text-muted">
                          {product.props.text} USĐ
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>{product.quantity}</td> 
                  <td>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        onClick={() => handleDecreament(product.props.id)}
                      >
                        -
                      </Button>
                      <Button
                        color="warning"
                        size="sm"
                        onClick={() => handleIncreament(product.props.id)}
                      >
                        +
                      </Button>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => handleRemove(product.props.id)}
                      >
                        <BiTrash />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <div className="d-flex justify-content-between">
              <p className="text-primary fw-bold">Total Money</p>
              <p className="text-danger fw-bold">{cartTotal}.USD</p>
            </div>
            <div className="d-flex justify-content-end">
              {props.showCheckout && (
                <Button
                  onClick={handleProceedCheckout}
                  type="button"
                  color="primary"
                >
                  Pay
                </Button>
              )}
            </div>
          </div>
          </div>
          {/* *************** TOTAL COST AND PAY************************** */}
          
          
        </CardBody>
        
      </Card>
    </div>
  );
};

export default CartPreview;
