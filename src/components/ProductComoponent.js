import React from "react";
import { useSelector } from "react-redux";
import  { Link }  from 'react-router-dom'

export default function ProductComoponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((products) => {
    const { id,  title,image, price, category } = products;
  
  return (
    <div className="four wide column">
      <Link to={`productdetails/${id}`} >
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}
);
return <>{renderList}</>
}
