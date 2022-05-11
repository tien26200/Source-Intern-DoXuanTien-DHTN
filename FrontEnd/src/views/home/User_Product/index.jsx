import React from 'react';
import { Outlet } from 'react-router-dom';

function Product() {
  return (
    <div>Product

    <Outlet/>
    </div>
    
  )
}

export default Product