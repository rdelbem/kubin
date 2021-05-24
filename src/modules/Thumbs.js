import { setOptions } from "./Options";

/**
 * @Thumbs This class initiate the whole app.
 * it will fetch all thumbs inside the correct div,
 * in order to create the correct links to the correct images.
 *
 * It also brings the options to its own variables.
 */

class Thumbs {
  constructor() {
    //OPTIONS VARIABLES
    this.fullSizePath = setOptions.fullSizePath;
    this.baseURL = setOptions.baseURL;
    this.overlayBlur = setOptions.overlayBlur;
    this.lightBox = setOptions.lightBox;
    this.zoom = setOptions.zoom;
    this.bigImgsPostFix = setOptions.bigImgsPostFix;

    //GET THE CORRECT DIVS INSIDE LAYOUT
    this.displayerDiv = document.querySelector(".kubin-principal");
    this.liThumbs = document.querySelector(".kubin-img-gallery");

    //START METHOD
    this.listThumbsSrc();
  }

  /**
   * @listThumbs
   * This method select the names of the thumbs and group
   * all of them in an array
   *
   * An undored list must be created following the basic markdown
   * See documentation
   */

  listThumbsSrc() {
    if (Boolean(this.liThumbs)) {
      this.liThumbsSrcArr = [];

      for (let i = 0; i < this.liThumbs.childElementCount; i++) {
        this.liThumbsSrcArr.push(this.liThumbs.children[i].children[0].src);
      }

      if (this.liThumbsSrcArr.length > 0) this.cleanPathsToFileNames();
    }

    if (!Boolean(this.liThumbs)) {
      console.warn(
        "No li's were found with the kubin-img-gallery class name, please verify your markdown"
      );
    }
  }

  /**
   * @cleanPathsToFileNames
   * This method removes the unecessary parts from
   * the previous gathered thumbs
   */

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
