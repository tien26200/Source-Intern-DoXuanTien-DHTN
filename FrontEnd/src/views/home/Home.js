import { Row, Col, Nav, NavItem, NavLink, Modal, ModalBody,Dropdown,DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/dashboard/Product";
import ProductDetail from "./ProductDetail";
import "../../assets/css/home_user.css";
import Icon from "../../assets/images/logos/1.png";

import Slider from "./Slider";
import Policy from "./Policy";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [Input, setInput] = useState('');
  const [foundProducts, setFoundProducts] = useState(category);

   const filter = (e) => {
    // const keyword = e.target.value;
    if (Input !== '') {
      const results = category.filter((product) => {
        return product.name.toLowerCase().startsWith(Input.toLowerCase());

        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
      console.log("hello");
      fetchData();
    } else {
      setFoundProducts(category);

      // If the text field is empty, show all users
    }


  };

  // const Handletoggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
    setFilterData(data);
  };


  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {

    const getCategory = async () => {
      const { data } = await axios.get("/api/category");
      console.log("dataa", data);
      setCategory(data);
    };
    getCategory();
  }, []);

  const filterItem = (curcat) => {
    const newItem = products.filter((newVal) => {
      return newVal.category.name === curcat;
    });
    setFilterData(newItem);
  };

  const handleOpenModal = (id) => {
    setOpen(true);
    setActiveProduct(id);
  };

  return (
    <>
    {/* <Slider/>
          <Policy/> */}



      <Col>
        <div className="col-Product">
        <Col >

          <Row>
            <h2 className="title">LATEST <span style={{color:"#AA0000"}}>PRODUCT</span></h2>
        {/* ĐÂY LÀ PHẦN SẮP XẾP SẢN PHẨM */}
            <div className="sort-Product">
            <Nav vertical>
              <div className="name-Sort">
                <input
        type="search"
        onChange={e => setInput(e.target.value)}
        className="input"
        placeholder="Filter"
        style={{border:'1px solid #333'}}
      />
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                {/* -----CLICK TO OPEN SORT------- */}
                <span className="title-Icon">Catergory: </span>
                <DropdownToggle color="transparent" className="drop-DownToggle">
                {/* ********cái này là hình mũi tên sổ xuống********************                           */}
                       <div className="drop-DownShow">

                       <button>
                        <img className="img-Icon"
                        src={Icon}
                        alt="Icon"
                      />
                        </button>
                       </div>


                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                  <NavItem  className="pointer-Item">
                    <NavLink onClick={() => setFilterData(products)}>
                    <span >All Caterogy</span>
                    </NavLink>
                  </NavItem>

                {category.map((item) => (
                    <NavItem className="pointer-Item">
                        <NavLink
                        onClick={() => filterItem(item.name)}
                        className="pointer-Link">
                          {item.name}
                        </NavLink>
                    </NavItem>
                    ))}


                  </DropdownItem>
                </DropdownMenu>

              </Dropdown>
                </div>
                </Nav>

                </div>
                  {Input !== '' ? (foundProducts.map((product, index) => (
                    <div className="product-ListOnUser">
                <Product className="product-ListOnProduct"
                  openModal={handleOpenModal}
                  id={product.id}
                  image={"/upload/" + product.image}
                  title={product.title}
                  subtitle={product.description}
                  text={product.price}
                />
                </div>
                    )) ): (filterData.map((product, index) => (
                <div className="product-ListOnUser">
                <Product className="product-ListOnProduct"
                  openModal={handleOpenModal}
                  id={product.id}
                  image={"/upload/" + product.image}
                  title={product.title}
                  subtitle={product.description}
                  text={product.price}
                />
                </div>

            )))}










            </Row>
            </Col>
            </div>
            </Col>

            {/* ----------------------PHẦN POPUP FORM DETAIL PRODUCT -------------------------------*/}
            <div className="modal-Popup">
              <Modal
                isOpen={open}
                toggle={() => setOpen(false)}
                className="modal-Popup-DetailProduct"
              >
                <ModalBody className="product-Detail">
                  <ProductDetail id={activeProduct} />
                </ModalBody>
              </Modal>
            </div>

    </>

  );
};

export default Home;
