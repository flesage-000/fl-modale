import React from "react";

import { Flmodale } from "fl-modale";
import "fl-modale/dist/index.css";

const App = () => {
  const data = {
    style: {
      modaleBackgroundColor: null,
      modaleBorder: null,
      overlayBackground: null,
      textAlign: "right"
    },
    text: "Hey Salut !!"
  }

  return (
    <Flmodale data={data}/>
  );
}

export default App;
