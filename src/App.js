/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import NavBar from "./sectionsComponents/NavBar";
import HeaderHero from "./sectionsComponents/HeaderHero";
import Differences from "./sectionsComponents/Differences";
import AppTech from "./sectionsComponents/AppTech";
import GoogleEvidence from "./sectionsComponents/GoogleEvidence";
import CalledFrota from "./sectionsComponents/CalledFrota";
import PlansPrice from "./sectionsComponents/PlansPrice";
import CalledEnd from "./sectionsComponents/CalledEnd";
import Footer from "./sectionsComponents/Footer";
import ButtonWpp from "./sectionsComponents/components/ButtonWpp";

function App() {
  const setAltWpBtn = () => {
    const imgWpp = document.querySelector("._1zufg img");
    const imgSendMsg = document.querySelector("._NeBrT img");
    imgWpp.setAttribute("alt", "imagen do button whatsapp");
    imgSendMsg.setAttribute("alt", "imagen para enviar mensagem");
  };

  const setLabelInputWpp = () => {
    const textareaEl = document.querySelector("._22mst textarea");
    const elementpai = document.querySelector("._22mst");
    const labelEl = document.createElement("label");
    labelEl.id = "label-msg";
    textareaEl.setAttribute("id", "msgForSend");
    elementpai.appendChild(labelEl);
    document.getElementById("label-msg").setAttribute("for", "msgForSend");
  };

  useEffect(() => {
    ReactGA.initialize("G-NJ8KWTZ84J");
    ReactGA.send("/");
    setLabelInputWpp();
    setAltWpBtn();
  }, []);

  return (
    <>
      <ButtonWpp />
      <NavBar />
      <HeaderHero />
      <main>
        <Differences />
        <AppTech />
      </main>
      <GoogleEvidence />
      <CalledFrota />
      <PlansPrice />
      <CalledEnd />
      <Footer />
    </>
  );
}

export default App;
