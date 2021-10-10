import React, { Component } from "react";
import "./css/navBar.css";
import imgLogo from "../img/logo-white-tracker.svg";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      // menu: false,
    };
  }

  render() {
    return (
      <nav>
        <img src={imgLogo} alt="imagem do logo da empresa." />
        <button type="button">menu</button>
      </nav>
    );
  }
}

export default NavBar;
