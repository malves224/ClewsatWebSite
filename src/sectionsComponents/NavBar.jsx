/* eslint-disable no-unneeded-ternary */
import React, { Component } from "react";
import "./css/navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import imgLogo from "../img/logo-white.png";

import OverlayMenu from "./components/OverlayMenu";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { menu } = this.state;
    const boolForInsert = menu ? false : true;
    this.setState({
      menu: boolForInsert,
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <section>
        <nav>
          <img src={imgLogo} alt="imagem do logo da empresa clewsat rastreamento." />
          <button name="menu" id="menu" onClick={this.handleClick} type="button">
            { !menu ? <FontAwesomeIcon icon={faBars} />
              : <FontAwesomeIcon icon={faTimes} />}
          </button>
        </nav>
        {menu && <OverlayMenu />}
      </section>
    );
  }
}

export default NavBar;
