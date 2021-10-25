import React, { PureComponent } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
// import { buttonHireNow } from "../../textData";

export default class ButtonWpp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderWpp: false,
    };
    this.renderWpp = this.renderWpp.bind(this);
  }

  componentDidMount() {
    this.renderWpp();
  }

  renderWpp() {
    const SECONDS = 3000;
    setTimeout(() => this.setState({
      renderWpp: true,
    }), SECONDS);
  }

  render() {
    const { renderWpp } = this.state;
    return (
      <>
        {renderWpp && (
        <FloatingWhatsApp
          phone="+5511936186826"
          message="Olá, tenho interesse no sistema de rastreamento."
          size="45px"
          backgroundColor="#128C7E"
          popupMessage="Olá, como podemos ajudar?"
          zIndex={100}
          autoOpenTimeout={5000}
        />
        )}
      </>
    );
  }
}
