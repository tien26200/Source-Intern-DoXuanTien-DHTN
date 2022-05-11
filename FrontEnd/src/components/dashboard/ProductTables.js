import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import ProductAdd from "../../views/admin/ProductAdd";
import ProductTable from "../../assets/css/productTable.css"

const ProductTables = () => {
  const [open, setOpen] = useState(false);
  const [openMDelete, setOpenMDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const navigate= useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToAdd = () => {
    // navigate("/product/add");
    setOpen(true);
    setCurrentProduct(null);
  };
  const onClose = () => {
    setOpen(false);
    fetchData();
  };
  const deleteProduct = async () => {
    const { data } = await axios.delete("/api/products/" + deleteId);
    console.log(data);
    fetchData();
    setOpenMDelete(false);
  };
  return (
    <>
      <div>


    {/* ************************ĐÂY LÀ PHẦN ADMIN********************************* */}
     
        <Card>
          <CardBody>
            
            <CardTitle tag="h5">List Products</CardTitle>
            <Button onClick={navigateToAdd} className="btn" color="primary">
                Add Products
           </Button>
            {/* <div className="d-flex">        
            </div> */}
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            
              <thead>
                <tr>
                  <th>Name products</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Cost</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.title}</td>
                    <td>{item.category?.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <img className="img-ProductAdmin"
                        src={"/upload/" + item.image}
                        alt={item.title}
                        height={50}
                      ></img>
                    </td>
                    <td>
                      {/* EDIT PRODUCT */}
                      <button
                        onClick={() => {
                          setOpen(true);
                          setCurrentProduct(item);
                        }}
                        type="button"
                        class="btn btn-success"                       
                      >
                        Edit
                      </button>

                      {/* DELETE PRODUCT */}
                      <button
                        onClick={() => {
                          setOpenMDelete(true);
                          setDeleteId(item.id);
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

             {/* ADD PRODUCT            */}
            
            

          </CardBody>
        </Card>
        
        {/* MODEL ADD */}
        
        <Modal isOpen={open} toggle={() => setOpen(false)} style={{padding:"10vh 2vh 0 0 "}}>       
          <ModalBody>

            <ProductAdd onClose={onClose} product={currentProduct} />
          </ModalBody>
        </Modal>
        
      </div>

      {/* MODEL QUESTION*/}
      <Modal isOpen={openMDelete} toggle={() => setOpenMDelete(false)}>
        <ModalHeader toggle={() => setOpenMDelete(false)}>Delete ?</ModalHeader>
        <ModalBody>Do you want delete this product?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteProduct(deleteId)}>
            Delete
          </Button>{" "}
          <Button onClick={() => setOpenMDelete(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ProductTables;
