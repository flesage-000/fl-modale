import React from "react";
import css from "./flmodal.css";

export const Flmodale = ({data, isOpen, setMdlOpen}) => {

  /**
   * Manage the state open and close.
   * @param {object} e The click event object
   */
  function manageModalState(e) {
    setMdlOpen(!isOpen);
  }

  const mdlPos = data.style.modalPosition;
  // Assign custom/default values.
  mdlPos.paddingTop = mdlPos.paddingTop || "40px";
  mdlPos.paddingRight = mdlPos.paddingRight || "40px";
  mdlPos.paddingBottom = mdlPos.paddingBottom || "40px";
  mdlPos.paddingLeft = mdlPos.paddingLeft || "40px";
  // Creates an object with unitless values to be used in calculations.
  const unitless = {
    paddingTop: pixelUnitRemover(mdlPos.paddingTop, "style.mdlPos.paddingTop"),
    paddingRight: pixelUnitRemover(mdlPos.paddingRight, "style.mdlPos.paddingRight"),
    paddingBottom: pixelUnitRemover(mdlPos.paddingBottom, "style.mdlPos.paddingBottom"),
    paddingLeft: pixelUnitRemover(mdlPos.paddingLeft, "style.mdlPos.paddingLeft"),
  };

  /**
   * Remove the 'px' unit.
   * @param {string} v The initial value with its unit.
   * @param {string} t
   * @returns {number}
   */
  function pixelUnitRemover(v, t) {
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
  function modalPosition(data) {
    // Ensure data exist or set default values.
    data.height = data.height || "260px";
    data.width = data.width || "260px";
    // Commons settings
    customStyles.modal.left = "50%";
    customStyles.modal.padding = `${data.paddingTop} ${data.paddingRight} ${data.paddingBottom} ${data.paddingLeft}`;
    customStyles.modal.position = "absolute";
    customStyles.modal.top = "50%";

    if(data.type === "fixedWidthHeight") {
      unitless.height = pixelUnitRemover(data.height, "style.mdlPos.height");
      unitless.width = pixelUnitRemover(data.width, "style.mdlPos.width");

      customStyles.modal.height = data.height;
      customStyles.modal.width = data.width;
      // Calculate margin to be negative
      customStyles.modal.margin = `${(unitless.height + unitless.paddingTop + unitless.paddingBottom)/2*-1}px 0 0 ${(unitless.width + unitless.paddingRight + unitless.paddingLeft)/2*-1}px`;
    } else if (data.type === "unknownWidthHeight") {
      customStyles.modal.transform = "translate(-50%, -50%)";
    } else console.warn("Modal position type '"+ data.type + "' is invalid !\r\nAllowed value are 'fixedWidthHeight'")
  }

  const customStyles = {
    close: {
      top:  unitless.paddingTop/2*-1 + "px",
      right: unitless.paddingRight/2*-1 + "px",
    },
    modal: {
      backgroundColor: data.style.modalBackgroundColor || "#FFF",
      border: data.style.modalBorder || "solid 1px black",
      textAlign: textAlignment(data.style.textAlign),
    },
    overlay: {
      backgroundColor: data.style.overlayBackground || "rgba(0,0,0,.5)",
    },
  };

  modalPosition(mdlPos);

  return (
    <div>
      <div  className={isOpen ? css.flmodal : css.flmodalClose}
            style={customStyles.overlay}>
        <div  className={css.modal}
              style={customStyles.modal}>
          <div  className={css.content}>
            <button className={css.close}
                    style={customStyles.close}
                    type="button"
                    onClick={manageModalState}>&#10060;</button>
            {data.text}
          </div>
        </div>
      </div>
    </div>
  );
}