import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";


// DAY LA PHAN SIDEBAR CUA ADMIN
const navigation = [
  {
    title: "Sales Summary",
    href: "starter",
    // icon: "bi bi-speedometer2",
  },
  {
    title: "Products",
    href: "product",
    // icon: "bi bi-cup-straw",
  },
  {
    title: "Category",
    href: "category",
    // icon: "bi bi-patch-check",
  },
  {
    title: "Order",
    href: "checkout-list",
   
  },
  // {
  //   title: "Buttons",
  //   href: "/buttons",
  //   // icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/cards",
  //   // icon: "bi bi-card-text",
  // },
];

const Sidebar = () => {
 
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
