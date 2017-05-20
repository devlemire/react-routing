import React from 'react';

import './Product.css';

export default function Product( { title, img } ) {
  return (
    <div className="cart__product">
      <img src={ img } width="100px" />
      <span className="cart__productTitle"> { title } </span>
    </div>
  )
}