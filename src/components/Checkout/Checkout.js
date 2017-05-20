import React from "react";

import { checkout } from '../../ducks/reducer';

import { connect } from "react-redux";

import Product from './Product/Product';

function Checkout( { swagInCart, total, checkout } ) {

  const swagComponents = swagInCart.map( swag => (
    <Product 
      key={ swag.id }
      title={ swag.title }
      img={ swag.img }
      price={ swag.price }
    />
  ));

  return (
    <div className="outline">
      <span> This is the Checkout Component </span>

      { swagComponents }

      ${ total }

      <br />
      <br />
      <button onClick={ checkout }> Checkout </button>
    </div>
  )
}

function mapStateToProps( state ) {
  var swagInCart = state.cart.map( id => state.swag.filter( swag => swag.id === id )[0] );
  var total = swagInCart.reduce( ( total, swag ) => total + parseFloat(swag.price), 0 ).toFixed(2);
  return { swagInCart, total };
}

export default connect( mapStateToProps, { checkout } )( Checkout );