import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

const productColors = ['white', 'eggshell-white', 'salmon']



Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(productColors).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName]

    if (weight === undefined) {
      return new Error('include weight')
    }
    else if (isNaN(weight)) {
      return new Error('weight must be a number')
    }
    return weight >= 80 && weight <= 300 ? null : new Error('must be within 80 to 300')
  }
}


export default Product;
