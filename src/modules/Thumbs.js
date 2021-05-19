import { setOptions } from "./Options";

setOptions.fullSizePath = "images/fullsize/";
setOptions.baseURL = "http://localhost:8080/"; //this must be changed according to your URL

class Thumbs {
  constructor() {
    this.pathToFiles = setOptions.fullSizePath;
    this.baseURL = setOptions.baseURL;
    this.displayerDiv = document.querySelector(".kubin-principal");
    this.liThumbs = document.querySelector(".kubin-img-gallery");
    this.thumbsPosition;
    this.fullSizePath;
    this.listThumbsSrc();
  }

  listThumbsSrc() {
    if (this.liThumbs !== undefined) {
      this.liThumbsSrcArr = [];

      for (let i = 0; i < this.liThumbs.childElementCount; i++) {
        this.liThumbsSrcArr.push(this.liThumbs.children[i].children[0].src);
      }

      this.liThumbsSrcArr.length > 0 ? this.cleanPathsToFileNames() : null;
    }
  }

  cleanPathsToFileNames() {
    this.fileNames = [];

    for (let i = 0; i < this.liThumbsSrcArr.length; i++) {
      let splitedSrc = this.liThumbsSrcArr[i].split("/").pop();
      this.fileNames.push(splitedSrc);
    }

    return this.fileNames.length > 0 ? this.fileNames : null;
  }
}
export default Thumbs;
