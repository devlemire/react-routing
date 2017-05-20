import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Product from './Product/Product';

import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.toggleCartDetails = this.toggleCartDetails.bind( this );
  }
  
  toggleCartDetails() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      swagInCart,
      total,
      howMuchSwag
    } = this.props;

    let swagComponents = swagInCart.map( swag => (
      <Product 
        key={ swag.id }
        title={ swag.title }
        img={ swag.img }
      />
    ));

    return (
      this.state.expanded 
      ?
        <div className="cart__containerExpanded">
          <div className="cart__header" onClick={ this.toggleCartDetails }>
            <span> Cart ( { howMuchSwag } ) - ${ total } </span>
          </div>
          <div className="cart__details">
            { swagComponents }
          </div>
          <Link to="/checkout">
            <button className="cart__checkoutBtn" onClick={ this.toggleCartDetails }> Go to Checkout </button>
          </Link>
        </div>
      :
        <div className="cart__container" onClick={ this.toggleCartDetails }>
          <span> Cart ( { howMuchSwag } ) - ${ total } </span>
        </div>
    )
  }
}

function mapStateToProps( state ) {
  var swagInCart = state.cart.map( id => state.swag.filter( swag => swag.id === id )[0] );
  var total = swagInCart.reduce( ( total, swag ) => total + parseFloat(swag.price), 0 ).toFixed(2);
  return { swagInCart, total, howMuchSwag: swagInCart.length };
}

export default connect( mapStateToProps )( Cart );

