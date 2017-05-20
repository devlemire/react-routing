import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    <div className="store__productContainer">
      <p> This is a Product Component </p>

      <p> { title } </p>
      <Link to={ `details/${ id }` }>
        <img src={ img } alt="Product" className="swagImg" width="200px" />
      </Link>
      <p> ${ price } </p>

      <button onClick={ () => { addToCart( id ) } }> Add to Cart </button>
    </div>
  )
}