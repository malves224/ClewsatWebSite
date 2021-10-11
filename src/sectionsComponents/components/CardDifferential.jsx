import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt, faUnlockAlt, faUserSecret, faCarCrash,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "../css/cardDifferentials.css";

class CardDifferential extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: props.differential.icon,
    };
    this.switchIconCurrent = this.switchIconCurrent.bind(this);
  }

  componentDidMount() {
    this.switchIconCurrent();
  }

  switchIconCurrent() {
    const { icon } = this.state;
    switch (icon) {
      case "faMapMarkedAlt":
        this.setState({
          icon: faMapMarkedAlt,
        });
        break;
      case "faUnlockAlt":
        this.setState({
          icon: faUnlockAlt,
        });
        break;
      case "faUserSecret":
        this.setState({
          icon: faUserSecret,
        });
        break;
      case "faCarCrash":
        this.setState({
          icon: faCarCrash,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { differential: { description, title } } = this.props;
    const { icon } = this.state;
    return (
      <div>
        <i><FontAwesomeIcon icon={icon} /></i>
        <h3>{title}</h3>
        <p>{description}</p>
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
