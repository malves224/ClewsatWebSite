import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CardDifferential extends PureComponent {
  render() {
    const { differential: { title, description, icon } } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{icon}</p>
      </div>
    );
  }
}

CardDifferential.propTypes = {
  differential: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default CardDifferential;
