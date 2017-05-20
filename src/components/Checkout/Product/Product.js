import React from "react";

export default function Product( { title, img, price } ) {
  return (
    <div >
      <img src={ img } alt="Product" width="200px" />
      <div>
        <p> { title } </p>
        <p> ${ price } </p>
      </div>
    </div>
  )

}