import React from "react";
import { addToCart } from "../../ducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Details( { swag, history, addToCart } ) {

  function addAndRedirect() {
    addToCart( swag.id );
    history.push('/store');
  } 

  return (
    <div>
      <p> { swag.title } </p>
      <img src={ swag.img } alt="Product" className="swagImg" width="200px" />
      <p> ${ swag.price } </p>
      <p> { swag.description } </p>
      <p> { swag.promo } </p>

      <button onClick={ addAndRedirect }> Add to Cart </button>
      <Link to="/store">
        <button> Back to Store </button>
      </Link>
    </div>
  )
}

function mapStateToProps( state, ownProps ) {
  const swag = state.swag.filter( swag => swag.id === ownProps.match.params.id )[0];
  return { swag };
}

export default connect( mapStateToProps, { addToCart } )( Details );