import Thumbs from "./Thumbs";

class Dom extends Thumbs {
  constructor() {
    super();
    this.displayerDiv = document.querySelector(".kubin-principal");
    this.displayerDiv !== undefined ? this.injectFirstImg() : null;
    this.events();
  }

  injectFirstImg() {
    this.displayerDiv.innerHTML = `<img src="../images/fullsize/${this.fileNames[0]}" />`;
  }

  events() {
    this.liThumbs.addEventListener("click", (ev) =>
      this.clickedThumb(ev.target)
    );
  }

  clickedThumb(ev) {
    if (ev.tagName === "IMG") {
      console.log(ev.src.split("/").pop());
      this.displayerDiv.innerHTML = `<img src="../images/fullsize/${ev.src
        .split("/")
        .pop()}" />`;
    }
  }
}
export default Dom;
