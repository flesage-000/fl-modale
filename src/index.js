import React from "react";
import styles from "./styles.module.css";

export const Flmodale = ({data}) => { console.log("data", data.style.modalBackground);

  const customStyles = {
    modaleBackground: {
      backgroundColor: data.style.overlayBackground || "rgba(0,0,0,.5)"
    }
  }

  return (
    <div className={styles.flmodale} style={customStyles.modaleBackground}>
      <div className="">

      </div>
    </div>
  );
}