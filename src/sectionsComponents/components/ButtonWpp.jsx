import React, { PureComponent } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

export default class ButtonWpp extends PureComponent {
  render() {
    return (
      <>
        <FloatingWhatsApp
          phone="+5511936186826"
          message="Olá, tenho interesse no sistema de rastreamento."
          popupMessage="Olá, como podemos ajudar?"
          size={65}
          zIndex={100}
          autoOpenTimeout={35000}
        />
      </>
    );
  }
}
