import Gallery from "./Gallery";

class Lightbox extends Gallery {
  constructor() {
    super();

    this.body = document.getElementsByTagName("BODY")[0];
    this.kubinPrincipal = document.querySelector(".kubin-principal");
    this.countKeyboardStrokes = 0;
    this.event();
    this.arrayForLightboxNav();
  }

  event() {
    this.kubinPrincipal.addEventListener("click", () => this.lightbox());
  }

  arrayForLightboxNav() {
    this.fullSizeImagesPaths = [];

    for (let i = 0; i < this.fileNames.length; i++) {
      this.fullSizeImagesPaths.push(
        this.baseURL + this.fullSizePath + this.fileNames[i]
      );
    }

    return this.fullSizeImagesPaths;
  }

  lightbox() {
    //as lightbox is feature rich, it will be a bigger method if compared to the usual size of other Kubin gallery methods.

    let currentImg = this.currentImg;
    let bodyVariable = this.body;

    //layout
    let lightboxInnerTemplate = `
    <div class="overlay">
      <div class="close-btn">
        <p>&times;</p>
      </div>

      <div class="arrow-left"><p class="p-arrow-left">&larr;</p></div>
      <div class="arrow-right"><p class="p-arrow-right">&rarr;</p></div>

    <div class="showing-img">
        <img src="${currentImg}" class="overlayImg">
    </div>
        </div>
    `;

    bodyVariable.classList.add("overflow-hidden");
    bodyVariable.insertAdjacentHTML("afterbegin", lightboxInnerTemplate);
    //overlay selector, must come after
    let overlay = document.querySelector(".overlay");
    let arrowRight = document.querySelector(".arrow-right");
    let arrowLeft = document.querySelector(".arrow-left");

    let clickCloseLightbox = overlay.addEventListener("click", (e) => {
      removeLightboxFromDom(e.target);
    });

    let removeLightboxFromDom = (e) => {
      if (
        e.className != "arrow-left" &&
        e.className != "arrow-right" &&
        e.className != "p-arrow-right" &&
        e.className != "p-arrow-left"
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
    let evaluatePosition = () => {
      if (
        this.fullSizeImagesPaths.indexOf(
          document.querySelector(".overlayImg").src
        ) != 0 &&
        evaluated === false
      ) {
        evaluated = true;
        return (this.countKeyboardStrokes = this.fullSizeImagesPaths.indexOf(
          document.querySelector(".overlayImg").src
        ));
      } else {
        return this.countKeyboardStrokes;
      }
    };

    let keyNav = (e) => {
      if (
        e.code === "ArrowRight" ||
        e.target.className == "arrow-right" ||
        e.target.className == "p-arrow-right"
      ) {
        evaluatePosition();

        this.countKeyboardStrokes < this.fullSizeImagesPaths.length - 1
          ? this.countKeyboardStrokes++
          : null;

        document.querySelector(".overlayImg").src =
          this.fullSizeImagesPaths[this.countKeyboardStrokes];
      } else if (
        e.code === "ArrowLeft" ||
        e.target.className == "arrow-left" ||
        e.target.className == "p-arrow-left"
      ) {
        evaluatePosition();

        this.countKeyboardStrokes > 0 ? this.countKeyboardStrokes-- : null;

        document.querySelector(".overlayImg").src =
          this.fullSizeImagesPaths[this.countKeyboardStrokes];
      }

      if (e.code === "Escape") {
        removeLightboxFromDom();
      }
    };

    document.addEventListener("keydown", keyNav);
    arrowRight.addEventListener("click", keyNav);
    arrowLeft.addEventListener("click", keyNav);
  }
}
export default Lightbox;
