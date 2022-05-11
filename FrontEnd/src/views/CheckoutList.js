import {
  Table,
  Card,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import React,{ useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiEye } from "react-icons/hi";
import { useReactToPrint } from 'react-to-print';


export default function CheckoutList() {
  const [item, setItem] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [checkouts, setCheckouts] = useState([]);
  const [products, setProducts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

   const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(handlePrint);
  // console.log(content);

  useEffect(() => {
    const getProductByCheckoutId = async () => {
      if (item) {
        const { data } = await axios.get("/api/checkout/detail/" + item.id);
        setProducts(data);
      }
    };
    getProductByCheckoutId();
  }, [item, openDetail]);

  // ALL FUNCTION FETCH
  const fetchCheckouts = async () => {
    const { data } = await axios.get("/api/checkout");
    setCheckouts(data);
  };

  useEffect(() => {

    fetchCheckouts();
  }, []);

  // *************HANDLE OPEN DETAIL************
  const handleOpenDetail = (item) => {
    setOpenDetail(true);
    setItem(item);
  };

  // ************HANDLE DELETE************
  const deleteCheckoutList = async () => {
    console.log("deleting");
    console.log(deleteId);
    await axios.delete("http://127.0.0.1:8090/api/checkout/detail/" + deleteId);
   // console.log(data);

    setOpenDelete(false);
    setOpenDetail(false);
    fetchCheckouts();
  }

  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID </th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {checkouts.map((c, i) => (
                <tr key={i} className="border-top">
                  <td>
                    {c.id}-{c.checkoutId}
                  </td>
                  <td>{c.user.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.totalPrice} USD</td>
                  <td>
                    <Button onClick={() => handleOpenDetail(c)} color="info">
                      <HiEye />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      {/* MODAL POP UP FORM */}
      <Modal
        toggle={() => {
          setOpenDetail(!openDetail);
        }}
        isOpen={openDetail}
        style={{marginTop:"10%"}}
      >
        <ModalHeader
          toggle={() => {
            setOpenDetail(!openDetail);
          }}
        >
          Detail Order
        </ModalHeader>

        <ModalBody ref={componentRef}>
          <Table borderless striped>
            <thead>
              <tr>
                <th scope="row" style={{fontSize:"18px", fontWeight: "1px solid black"}}>Name</th>
                <th scope="row" style={{fontSize:"18px", fontWeight: "1px solid black"}}>Mount</th>
                <th scope="row" style={{fontSize:"18px", fontWeight: "1px solid black"}}>Cost</th>

              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.product.price * item.quantity} USD</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {item && (
            <div>
              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px black solid "}}>User Name:</strong>
                {item.user.username}
              </p>
              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>ID:</strong>
                {item.id}-{item.checkoutId}

              </p>
              {products.length > 0 && (


                <p>
                  <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>Total Cost: </strong>
                  {products.reduce((p, c) => {
                    return p + c.product.price * c.quantity;
                  }, 0)} USD

                </p>
              )}

              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>Adress: </strong>
                {`${item.address}, ${item.commune}, ${item.district}, ${item.province}`}
              </p>
              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>Phone:</strong>
                {item.phone}
              </p>
              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>Email:</strong>
                {item.user.email}
              </p>
              <p>
                <strong style={{fontSize:"18px", fontWeight: "1px solid black"}}>Create at:</strong>
                {item.createdAt}
              </p>
            </div>
          )}
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handlePrint}>
            Print
          </Button>{" "}

          <Button color="warning" onClick={() =>{
            setOpenDelete(true);
            setDeleteId(item.id);
          }}>
            Delete
          </Button>
          <Button
            onClick={() => {
              setOpenDetail(!openDetail);
            }}
          color="danger">
            Close
          </Button>
          {/* <Button>Update</Button> */}
        </ModalFooter>
      </Modal>
          {/* *************MODEL DELETE CHECKOUTPRODUCT*********** */}

      <Modal isOpen={openDelete} toggle={() => setOpenDelete(false)} style={{marginTop:"15%"}}>
        <ModalHeader toggle={() => setOpenDelete(false)}>Delete ?</ModalHeader>
        <ModalBody>Do you want delete this order?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteCheckoutList(deleteId)}>
            Delete
          </Button>{" "}
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
