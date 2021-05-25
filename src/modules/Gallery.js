import Thumbs from "./Thumbs";

/**
 * @Gallery controls the click and display behavior.
 */

export default class Gallery extends Thumbs {
  constructor() {
    super();

    this.displayerDiv !== undefined ? this.injectFirstImg() : null;
    this.currentImg; //this variable stores the path to the current displayed image, therefore it will be used in Lightbox object. It will be updated according to user demands
    this.img = document.querySelector(".showing");

    this.clickThumb();
    this.mouseEnter();
    this.mouseLeave();
  }

  /**
   * @injectFirstImg
   * It will grab the first thumb correspondent big image and inject it in the displayer div
   */
  injectFirstImg() {
    this.currentImg = this.fullSizePath + this.fileNames[0];
    this.displayerDiv.innerHTML = `<img class="showing" src="${this.pathsToBigImgs[0]}" />`;
  }

  /**
   * @clickThumb
   * It listens to the thumbs clicks and calls clickedThumb
   */
  clickThumb() {
    this.liThumbs.addEventListener("click", (ev) =>
      this.clickedThumb(ev.target)
    );
  }

  /**
   * @clickedThumbs
   * It controls the image switching in the displayer div
   */
  clickedThumb(ev) {
    if (ev.tagName === "IMG") {
      let indexOfClickedImg = parseInt(ev.getAttribute("data-index"));
      this.currentImg = this.pathsToBigImgs[indexOfClickedImg];
      this.img.src = this.currentImg;
    }
  }

  /**
   *
   * @mouseEnter
   * It controls zoom behavior
   */
  mouseEnter() {
    if (!this.zoom) return;
    this.displayerDiv.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      this.img.style.transformOrigin = `${x}px ${y}px`;
      this.img.style.transform = "scale(2)";
    });
  }

  /**
   *
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
