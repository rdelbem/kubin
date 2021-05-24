import Thumbs from "./Thumbs";

class Gallery extends Thumbs {
  constructor() {
    super();
    this.displayerDiv !== undefined ? this.injectFirstImg() : null;
    this.currentImg; //this variable stores the path to the current displayed image, therefore it will be used in Lightbox object. It will be updated according to user demands
    this.img = document.querySelector(".showing");

    this.clickThumb();
    this.mouseEnter();
    this.mouseLeave();
  }

  injectFirstImg() {
    this.currentImg = this.fullSizePath + this.fileNames[0];
    this.displayerDiv.innerHTML = `<img class="showing" src="${this.fullSizePath}${this.fileNames[0]}" />`;
  }

  clickThumb() {
    this.liThumbs.addEventListener("click", (ev) =>
      this.clickedThumb(ev.target)
    );
  }

  clickedThumb(ev) {
    if (ev.tagName === "IMG") {
      this.currentImg = this.fullSizePath + ev.src.split("/").pop();
      this.img.src = this.currentImg;
    }
  }

  mouseEnter() {
    this.displayerDiv.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      this.img.style.transformOrigin = `${x}px ${y}px`;
      this.img.style.transform = "scale(2)";
    });
  }

  mouseLeave() {
    this.displayerDiv.addEventListener("mouseleave", () => {
      this.img.style.transformOrigin = "center center";
      this.img.style.transform = "scale(1)";
    });
  }
}
export default Gallery;
