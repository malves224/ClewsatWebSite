import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "../css/button.css";

class Button extends PureComponent {
  render() {
    const { src, text } = this.props;
    return (
      <a href={src} target="_blank" rel="noreferrer">
        <button id="button" type="button"><p id="text-button">{ text }</p></button>
      </a>
    );
  }
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
