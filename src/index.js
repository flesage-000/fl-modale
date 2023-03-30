import React from "react";
import styles from "./styles.module.css";

export const Flmodale = ({data}) => { console.log("data", data);

  /**
   *
   * @param {string} align
   * @returns {string|null}
   */
  function textAlignment(align) {
    let alignment
    if( align === "start" ||
        align === "end" ||
        align === "left" ||
        align === "right" ||
        align === "center" ||
        align === "justify" ||
        align === "justify-all" ||
        align === "match-parent") alignment = align;
    else alignment = null;
    return alignment
  }

  const customStyles = {
    modale: {
      backgroundColor: data.style.modaleBackgroundColor || "#FFF",
      border: data.style.modaleBorder || "solid 1px black",
      textAlign: textAlignment(data.style.textAlign),
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