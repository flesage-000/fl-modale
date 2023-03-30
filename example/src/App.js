import React from "react";

import { Flmodale } from "fl-modale";
import "fl-modale/dist/index.css";

const App = () => {
  const data = {
    style: {
      overlayBackground: null
    }
  }

  return (
    <Flmodale data={data}/>
  );
}

export default App;
