import React from "react";
import styles from "./styles.module.css";

export const Flmodale = ({data}) => { console.log("data", data);

  /**
   * Remove the 'px' unit.
   * @param {string} v The initial value with its unit.
   * @param {string} t
   * @returns {number}
   */
  function pixelUnitRemover(v, t) { // console.log("pixelUnitRemover::", v, t);
    const value = v.split("px")[0]*1;
    if (typeof value !== "number") console.warn(`The value of '${t}' is wrong!`);
    return value;
  }

  /**
   * Ensure text aligment property is normalize according https://www.w3schools.com/cssref/pr_text_text-align.php.
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

  /**
   * Set modal position according https://css-tricks.com/centering-css-complete-guide/ tutorials.
   * @param {object} data
   */
  function modalPosition(data) { console.log("modalPosition:: data", data);
    // Ensure data exist or set default values.
    data.height = data.height || "260px";
    data.width = data.width || "260px";
    data.paddingTop = data.paddingTop || "20px";
    data.paddingRight = data.paddingRight || "20px";
    data.paddingBottom = data.paddingBottom || "20px";
    data.paddingLeft = data.paddingLeft || "20px";

    if(data.type === "fixedWidthHeight") {
      // Creates an object with unitless values to be used in calculations.
      const unitless = {
        height: pixelUnitRemover(data.height, "style.modalPosition.height"),
        width: pixelUnitRemover(data.width, "style.modalPosition.width"),
        paddingTop: pixelUnitRemover(data.paddingTop, "style.modalPosition.paddingTop"),
        paddingRight: pixelUnitRemover(data.paddingRight, "style.modalPosition.paddingRight"),
        paddingBottom: pixelUnitRemover(data.paddingBottom, "style.modalPosition.paddingBottom"),
        paddingLeft: pixelUnitRemover(data.paddingLeft, "style.modalPosition.paddingLeft"),
      }
      customStyles.modal.height = data.height;
      customStyles.modal.left = "50%";
      customStyles.modal.padding = `${data.paddingTop} ${data.paddingRight} ${data.paddingBottom} ${data.paddingLeft}`;
      customStyles.modal.position = "absolute";
      customStyles.modal.top = "50%";
      customStyles.modal.width = data.width;
      // Calculate margin to be negative
      customStyles.modal.margin = `${(unitless.height + unitless.paddingTop + unitless.paddingBottom)/2*-1}px 0 0 ${(unitless.width + unitless.paddingRight + unitless.paddingLeft)/2*-1}px`;
    } else console.warn("Modal position type '"+ data.type + "' is invalid !\r\nAllowed value are 'fixedWidthHeight'")
  }

  const customStyles = {
    modal: {
      backgroundColor: data.style.modalBackgroundColor || "#FFF",
      border: data.style.modalBorder || "solid 1px black",
      textAlign: textAlignment(data.style.textAlign),
    },
    overlay: {
      backgroundColor: data.style.overlayBackground || "rgba(0,0,0,.5)",
    },
  };
  modalPosition(data.style.modalPosition);

  return (
    <div  className={styles.flmodal}
          style={customStyles.overlay}>
      <div  className={styles.modal}
            style={customStyles.modal}>
        {data.text}
      </div>
    </div>
  );
}