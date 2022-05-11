import React, { useEffect, useState, useContext } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate, NavLink } from "react-router-dom";
import './style.scss';
import user1 from "../../../assets/images/users/user4.jpg";
import axios from "axios";
import {
    CartStateContext,
    CartDispatchContext,
    toggleCartPopup,
} from "../../../contexts/cart";
import {
    Badge,
    NavItem,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from "reactstrap";

import {
    AuthDispatchContext,
    AuthStateContext,
    signOut,
  } from "../../../contexts/auth";

  import { ImCart } from "react-icons/im";
  import CartPreview from "../../../components/CartPreview";

// -----------------ĐÂY LÀ PHẦN FUNCTION--------------------
function Header() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await axios.get("/api/category");
            setCategory(data);
        };
        getCategory();
    }, []);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const cartDispatch = useContext(CartDispatchContext);
    const { items: cartItems, isCartOpen } = useContext(CartStateContext);
    const cartQuantity = cartItems.length;
    const { isLoggedIn, user, isLoggingIn } = useContext(AuthStateContext);
    console.log(isLoggedIn, user, isLoggingIn);
    const navigate = useNavigate();
    const authDispatch = useContext(AuthDispatchContext);
    const handleLogout = () => {
        signOut(authDispatch);
        navigate("/ ");
    };




    return (

        <header className="header">
            <div className="header__main container">

                <div className="logo">
                    <NavLink to='/'>Watches Selling</NavLink>
                </div>

                <ul className="header__menu">
                    <li className="header__item">
                        <NavLink to='/' className={({isActive}) => isActive ? 'header__item-active' : ''}>Home</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/product' className={({isActive}) => isActive ? 'header__item-active' : ''}>Product</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/fearured' className={({isActive}) => isActive ? 'header__item-active' : ''}>Fearured</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/blog' className={({isActive}) => isActive ? 'header__item-active' : ''}>Contact</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to='/news' className={({isActive}) => isActive ? 'header__item-active' : ''}>News</NavLink>
                    </li>
                </ul>

                {/* --------------------------ICON------------------------ */}
                <div className="header__actions">
                    <Link to='/heart' className="header__heart">
                        <BsFillSuitHeartFill />
                    </Link>
                {/* --------------------------CARD---------------------------------------------- */}
                    <Link to='/cart' className="header__cart">
                        <FaShoppingCart />
                    </Link>
                {/* --------------------USER-------------------- */}

                <Link to='/signin' className="header__user">
                        <FaUserAlt />
                </Link>
                </div>

                <Collapse navbar isOpen={isOpen}>
                 <div className="cart-icon">
                  <Dropdown
                    tag="a"
                    inNavbar={true}
                    isOpen={isCartOpen}
                    toggle={() => toggleCartPopup(cartDispatch)}
                  >
                    <DropdownToggle tag="a" data-toggle="dropdown">

                      <div style={{ position: "relative" }}>
                        <ImCart
                          style={{
                            width: "25px",
                            height: "35px",
                          }}
                        >
                          ImCart
                        </ImCart>
                        <Badge
                          color="danger"
                          pill
                          style={{
                            position: "absolute",
                            bottom: "-5px",
                            right: "-2px",
                          }}
                        >
                          {cartQuantity}
                        </Badge>
                      </div>

                    </DropdownToggle>
                    <DropdownMenu
                      style={{ left: "-287px", width: "348px", top: "45px" }}
                    >
                      <CartPreview />
                    </DropdownMenu>
                  </Dropdown>
                </div>

           {/* ---------ĐÂY LÀ PHẦN USER ĐÃ ĐĂNG NHẬP NÈ----------------                  */}
          {user ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle color="transparent">
                <Link to='/signin' className="header__user">
                        <FaUserAlt />
                </Link>
                <img
                  src={user1}
                  alt="profile"
                  className="rounded-circle"
                  width="30"
                ></img>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Info</DropdownItem>
                <DropdownItem>My Account</DropdownItem>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>My Balance</DropdownItem>
                <DropdownItem>Inbox</DropdownItem>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )
          // Nếu khác thì quay lại đăng nhập và đăng ký
          : (
            <NavItem style={{ display: "flex" }}>
              <Link to="/signin" className="nav-link">
                Đăng nhập
              </Link>
              <Link to="/signin" className="nav-link">
                Đăng Ký
              </Link>
            </NavItem>
          )}
          </Collapse>
            </div>
        </header>
     );
}

export default Header;