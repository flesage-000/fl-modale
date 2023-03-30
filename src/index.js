import React from "react";
import styles from "./styles.module.css";

export const Flmodale = ({data}) => { console.log("data", data);

  const customStyles = {
    modale: {
      backgroundColor: data.style.modaleBackgroundColor || "#FFF",
      border: data.style.modaleBorder || "solid 1px black",
    },
    overlay: {
      backgroundColor: data.style.overlayBackground || "rgba(0,0,0,.5)",
    },
  }

  return (
    <div  className={styles.flmodale}
          style={customStyles.overlay}>
      <div  className={styles.modale}
            style={customStyles.modale}>
        {data.text}
      </div>
    </div>
  );
}