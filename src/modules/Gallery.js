import Thumbs from "./Thumbs";

/**
 * @Gallery controls the click and display behavior.
 */

export default class Gallery extends Thumbs {
  constructor() {
    super();

    //If displayer div is on the DOM, let's inject first image
    Boolean(this.displayerDiv) ? this.injectFirstImg() : null;
    //After injecting first image, let's select the img tag in order to control its source
    this.img = document.querySelector(".showing");

    //Starter methods
    this.clickThumb();
    this.mouseEnter();
    this.mouseLeave();
  }

  /**
   * @injectFirstImg
   * It will grab the first thumb corresponding big image and inject it in the displayer div,
   * it will also update the currentImg on display.
   */
  injectFirstImg() {
    this.currentImg = this.pathsToBigImgs[0];
    this.indexOfCurrentImg = 0;
    this.displayerDiv.innerHTML = `<img class="showing" src="${
      this.pathsToBigImgs[0]
    }" ${this.lightBox ? `style="cursor: pointer;"` : null} />`;
  }

  /**
   * @clickThumb
   * It listens to the thumbs clicks and calls clickedThumb
   */
  clickThumb() {
    this.liThumbs.addEventListener("click", (e) => this.clickedThumb(e.target));
  }

  /**
   * @clickedThumbs
   * It controls the image switching in the displayer div
   */
  clickedThumb(element) {
    if (element.tagName === "IMG") {
      let indexOfClickedImg = parseInt(element.getAttribute("data-index"));
      this.currentImg = this.pathsToBigImgs[indexOfClickedImg];
      this.indexOfCurrentImg = indexOfClickedImg;
      this.img.src = this.currentImg;
    }
  }

  /**
   * @mouseEnter
   * It controls zoom behavior
   */
  mouseEnter() {
    if (!this.zoom) return;
    this.displayerDiv.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      this.img.style.transformOrigin = `
      ${x > 0 ? x : 0}px
      ${y > 0 ? y : 0}px
      `;
      this.img.style.transform = "scale(2)";
    });
  }

  /**
   * @mouseLeave
   * It controls zoom behavior
   */
  mouseLeave() {
    if (!this.zoom) return;
    this.displayerDiv.addEventListener("mouseleave", () => {
      this.img.style.transformOrigin = "center center";
      this.img.style.transform = "scale(1)";
    });
  }
}
