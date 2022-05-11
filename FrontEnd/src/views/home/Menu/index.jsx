import React,
{useContext }
from "react";
import
{ Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,NavLink } from 'reactstrap';

import {FiHome } from 'react-icons/fi';
import { ImCart } from "react-icons/im";
import {FaUserAlt} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import {FaWindowClose} from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";

import user1 from "../../../assets/images/users/user4.jpg"
import {CartStateContext,
  CartDispatchContext,
  toggleCartPopup,} from "../../../contexts/cart";
import CartPreview from"../../../components/CartPreview";
import './style.scss';
import { AuthDispatchContext,
  AuthStateContext,
  signOut,} from "../../../contexts/auth";
// import user1 from '../../../assets/images/users/users.jpg';

export default function Menu() {

  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { isLoggedIn, user, isLoggingIn } = useContext(AuthStateContext);
  console.log(isLoggedIn, user, isLoggingIn);
  const navigate = useNavigate();
  const authDispatch = useContext(AuthDispatchContext);
  const handleLogout = () => {
    signOut(authDispatch);
    navigate("/");
  };

  return (


    <div>
         <Nav
            fill
            pills
            tabs className="nav-Cover">
            <NavItem className="nav_ItemHome">
            <Link
                to='/'
            >
               <b><FiHome style={{marginBottom:"5px"}} className="icon-Home"/> Watches Luxury</b>
            </Link>
            </NavItem>

            {/* <NavItem className="nav-Item">
                        <input type="search" id="site-search" name="q" style={{border:'1px solid #333'}}/>
            </NavItem > */}

            <NavItem className="nav-Item">
            <Link
                to='/'
            >
                Category
            </Link>
            </NavItem >

            <NavItem className="nav-Item">
            <Link
                to='/Product_User'
            >
                Product
            </Link>
            </NavItem>
            <NavItem className="nav-Item">
            <Link
                to='/'
            >
                About
            </Link>
            </NavItem>

            {/* *******ĐÂY LÀ PHẦN CART********* */}
            <NavItem className="nav_CartIcon">

                  <Dropdown
                    tag="a"
                    inNavbar={true}
                    isOpen={isCartOpen}
                    toggle={() => toggleCartPopup(cartDispatch)}
                  >
                    <DropdownToggle tag="a" data-toggle="dropdown">
                      {/* Đây là thông báo của số lượng đơn đã thêm vào */}
                      <div className="div-ImCard" >
                        <ImCart className="im-Card">   ImCart</ImCart>
                        <Badge className="badge-Cart"color="danger"pill>
                           {cartQuantity}
                        </Badge>
                      </div>
                     </DropdownToggle>
                    <DropdownMenu className="cart-Preview">
                      <CartPreview showCheckout />
                    </DropdownMenu>
                  </Dropdown>

            </NavItem>
            {/* <NavItem>
              <h2>Hi </h2>
            </NavItem> */}
            <NavItem className="nav_User">
            {user ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
              <DropdownToggle color="transparent" className="user">
                <img
                  src={user1}
                  alt="profile"
                  className="rounded-circle"
                  width="30"
                ></img>
              </DropdownToggle>
              <DropdownMenu>
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
            <NavItem style={{ display: "flex" }}className="user">
              <Link to="/signin" className="nav-link" style={{color:"#6495ED" , fontFamily:"Franklin Gothic Medium"}}>
                  <span className="icon_User"><FaUserAlt/></span>SignIn/Up
              </Link>
            </NavItem>
          )}
          </NavItem>

          {/* ***ĐÂY LÀ PHẦN NAV MOBILE***** */}
          <label for="mobile-input" className="nav-mobile">
            <FaBars className="item-Bars" style={{width:"25px",height:"30px"}}/>
          </label>
          <input type="checkbox" className="mobile-input1" id="mobile-input"/>

          {/* *****LÀM MỜ BACKGROUND KHI NHẤP VÔ BARS */}
          <label for="mobile-input" className="nav-overlay">
          </label>
          <div className="nav-mobile-vertical">
            <nav vertical>
                <label for="mobile-input" className="button-CloseItemMobile">
                  <FaWindowClose className="image-Close"/>
                </label>
              <NavItem className="nav-ItemMobile">

                <NavLink className="nav-LinkItem">
                <Link to="/">
                  Home
                </Link>
                </NavLink>
                <NavLink className="nav-LinkItem">
                <Link to="/">
                  About
                </Link>
                </NavLink>
                <NavLink className="nav-LinkItem">
                <Link to="/">
                  Category
                </Link>
                </NavLink>
              </NavItem>
            </nav>
          </div>
        </Nav>

    </div>
  )
}
