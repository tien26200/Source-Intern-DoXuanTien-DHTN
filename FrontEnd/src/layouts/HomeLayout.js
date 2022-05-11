import React from "react";
import Slider from "../views/home/Slider";
import Policy from "../views/home/Policy";
// import Footer from "../views/home/Footer";
import { Outlet } from "react-router-dom";
// import homeLayout from "../assets/css/homeLayout";
import Menu from "../views/home/Menu";
import EndWeb from "../views/home/EndWeb";










export default function HomeLayout() {



  return (
    <div className="container-HomeLayout">
      <div className="home_Layout">

          <Menu/>
          <Slider/>
          <Policy/>
          <Outlet />
          <EndWeb/>
      </div>

    </div>
  );
}
