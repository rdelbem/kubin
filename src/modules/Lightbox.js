import Gallery from "./Gallery";
import { ColorTranslator } from "colortranslator";

/**
 * @Lightbox class controls all the lightbox features and behaiviors
 */

export default class Lightbox extends Gallery {
  constructor() {
    super();

    //If lightbox is turned off, nothing here will work
    if (!this.lightBox) return;

    this.body = document.getElementsByTagName("BODY")[0];
    this.kubinPrincipal = document.querySelector(".kubin-principal");

    //It is used to lock images navigation
    this.countKeyboardStrokes = 0;

    //controls de adding and removing of listeners
    this.callLightbox = () => {
      this.kubinPrincipal.removeEventListener("click", this.callLightbox);
      return this.lightbox();
    };

    //starter method
    this.event();
  }

  /**
   * @event will listen to clicks on the displayer div
   */
  event() {
    this.kubinPrincipal.addEventListener("click", this.callLightbox);
  }

  /**
   * @layout returns the layout of the lightbox,
   * all layout features must be separated from this app logical methods
   */
  layout() {
    let currentImg = this.currentImg;

    let lightboxInnerTemplate = `
    <div class="overlay"
    style="top: ${window.pageYOffset}px;
    ${this.overlayBlur ? "backdrop-filter: blur(3px);" : ""} 
    ${
      Boolean(this.overlay)
        ? `background-color: ${ColorTranslator.toRGBA(
            this.overlay + this.overlayAlpha
          )}`
        : ""
    }
    ">
      <div class="close-btn">
        <p>&times;</p>
      </div>

      <div class="arrow-left" style="left: 0;"><p class="p-arrow-left">&larr;</p></div>
      <div class="arrow-right" style="right: 0;"><p class="p-arrow-right">&rarr;</p></div>

    <div class="showing-img">
        <img src="${currentImg}" class="overlayImg">
    </div>
        </div>
    `;

    return lightboxInnerTemplate;
  }

  /**
   * @lightbox contains all the logical that concerns its core functionalities
   */
  lightbox() {
    let bodyVariable = this.body;
    let indexOfCurrentImg = this.indexOfCurrentImg;

    bodyVariable.classList.add("overflow-hidden");

    bodyVariable.insertAdjacentHTML("afterbegin", this.layout());

    //overlay selector, must come after
    let overlay = document.querySelector(".overlay");
    let arrowRight = document.querySelector(".arrow-right");
    let arrowLeft = document.querySelector(".arrow-left");

    let clickCloseLightbox = overlay.addEventListener("click", (e) => {
      removeLightboxFromDom(e.target);
      this.kubinPrincipal.addEventListener("click", this.callLightbox);
    });

    let removeLightboxFromDom = (e) => {
      if (
        e.className !== "arrow-left" &&
        e.className !== "arrow-right" &&
        e.className !== "p-arrow-right" &&
        e.className !== "p-arrow-left"
      ) {
        overlay.remove();
        bodyVariable.classList.remove("overflow-hidden");
        document.removeEventListener("keydown", keyNav);
        arrowRight.removeEventListener("click", keyNav);
        arrowLeft.removeEventListener("click", keyNav);
        this.countKeyboardStrokes = 0;
      }
    };

    let evaluated = false;
    const evaluatePosition = () => {
      if (indexOfCurrentImg !== 0 && evaluated === false) {
        evaluated = true;
        return (this.countKeyboardStrokes = indexOfCurrentImg);
      } else {
        return this.countKeyboardStrokes;
      }
    };

    const keyNav = (e) => {
      if (
        e.code === "ArrowRight" ||
        e.target.className == "arrow-right" ||
        e.target.className == "p-arrow-right"
      ) {
        evaluatePosition();

        if (this.countKeyboardStrokes < this.pathsToBigImgs.length - 1)
          this.countKeyboardStrokes++;

        document.querySelector(".overlayImg").src =
          this.pathsToBigImgs[this.countKeyboardStrokes];
      } else if (
        e.code === "ArrowLeft" ||
        e.target.className == "arrow-left" ||
        e.target.className == "p-arrow-left"
      ) {
        evaluatePosition();

        if (this.countKeyboardStrokes > 0) this.countKeyboardStrokes--;

        document.querySelector(".overlayImg").src =
          this.pathsToBigImgs[this.countKeyboardStrokes];
      }

      if (e.code === "Escape") {
        removeLightboxFromDom(e.code);
      }
    };

    document.addEventListener("keydown", keyNav);
    arrowRight.addEventListener("click", keyNav);
    arrowLeft.addEventListener("click", keyNav);
  }
}
