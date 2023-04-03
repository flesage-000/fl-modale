import React, { useState } from "react";

import { Flmodale } from "fl-modale";
import "fl-modale/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    style: {
      modalBackgroundColor: null,
      modalBorder: null,
      modalPosition: {
        type: "fixedWidthHeight",
      },
      overlayBackground: null,
      textAlign: "left"
    },
    text: "Hey Salut !!"
  }

  return (
    <>
      <Flmodale data={data} isOpen={isOpen}/>
      <button onClick={() => {setIsOpen(true)}}>Ouvrir</button>
    </>
  );
}

export default App;
