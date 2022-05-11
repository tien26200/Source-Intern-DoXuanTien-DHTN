import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ModalHeader,
  ModalFooter,
  Button,
  Table,
  Modal,
  ModalBody,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
function Category() {
  const [category, setCategory] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const getCategory = async () => {
    const { data } = await axios.get("/api/category");
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);


  // Delete ID when add Product
  const hanlde = () => {
    setEditId(null);
    setOpen(false);
  }
 
  const createProduct = async () => {
    if (editId) {
      const { data } = await axios.put("/api/category/" + editId, {
        name: name,
      });
    } else {
      const { data } = await axios.post("/api/category", { name: name });
      console.log(data);
    }

    setOpen(false);
    getCategory();
  };
  const deleteCategory = async () => {
    await axios.delete("/api/category/" + deleteId);
    setOpenDelete(false);
    getCategory();
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">List Category</CardTitle>
          <div className="d-flex">
            <Button
              onClick={() => {setOpen(true); setName("")}}
              className="btn"
              color="primary"
            >
              Add Category
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item, index) => (
                <tr key={index} className="border-top">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setEditId(item.id);
                        setName(item.name);
                      }}
                      type="button"
                      class="btn btn-success"
                    >
                      Update
                    </button>
                    
                    <button
                      onClick={() => {
                        setOpenDelete(true);
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
        </CardBody>
      </Card>

      <Modal  onClosed={hanlde} isOpen={open} toggle={() => {setOpen(false); if(!open) setName("");}} style={{padding:"20vh  0 0 0 "}}>
        <ModalBody >
          <FormGroup>
            <Label for="categoryName">Name</Label>
            <Input
              id="categoryName"
              name="name"
              placeholder="Category Name"
              type="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </FormGroup>
          <Button onClick={createProduct} outline color="primary">
            Add Category
          </Button>
          
          <Button onClick={()=>setOpen(false)} outline color="danger">
            Close
          </Button>
        </ModalBody>
      </Modal>

      {/* <Modal isOpen={openDelete} toggle={() => setOpenDelete(false)} style ={{marginTop:"100px"}}>
        <ModalBody>
          <p>Delete Category?</p>
          <Button onClick={deleteCategory} className="btn" color="danger">
            Delete
          </Button>
        </ModalBody>
      </Modal> */}

      <Modal isOpen={openDelete} toggle={() => setOpenDelete(false)} style={{marginTop:"15%"}}>
        <ModalHeader toggle={() => setOpenDelete(false)}>Delete ?</ModalHeader>
        <ModalBody>Do you want delete this Catergory?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteCategory}>
            Delete
          </Button>{" "}
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Category;
