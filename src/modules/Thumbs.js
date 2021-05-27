import { setOptions } from "./Options";

/**
 * @Thumbs This class initiate the whole app.
 * it will fetch all thumbs inside the correct div,
 * in order to create the correct links to the correct images.
 *
 * NOTICE! The thumbs images must have a base name identical to the bigger image's.
 * NOTICE! It is possible, however, to prepend a postfix to the bigger image.
 *
 * It also brings the options to its own variables.
 */

export default class Thumbs {
  constructor() {
    //OPTIONS VARIABLES
    this.fullSizePath = setOptions.fullSizePath;
    this.baseURL = setOptions.baseURL;
    this.overlayBlur = setOptions.overlayBlur;
    this.overlay = setOptions.overlay;
    this.overlayAlpha = setOptions.overlayAlpha;
    this.lightBox = setOptions.lightBox;
    this.zoom = setOptions.zoom;
    this.bigImgsPostFix = setOptions.bigImgsPostFix;

    //GET THE CORRECT DIVS INSIDE LAYOUT, AND THE LI ELEMENT CONTAINING THE THUMBS
    this.displayerDiv = document.querySelector(".kubin-principal");
    this.liThumbs = document.querySelector(".kubin-img-gallery");

    //Path to big imgs
    this.pathsToBigImgs = [];

    //this variable stores the path to the current displayed image,
    //therefore it will be used in Lightbox object.
    //It will be updated according to user demands
    this.currentImg;
    //this variable stores the data-index attribute of the clicked thumb
    this.indexOfCurrentImg;

    //STARTER METHOD
    this.listThumbsSrc();
  }

  /**
   * @listThumbsSrc
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
        this.createDataIndex(this.liThumbs.children[i].children[0], i);
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
   * @createDataIndex
   * This method inserts a data-* attribute that matches
   * the array index of the big image corresponding
   * to the thumb.
   */
  createDataIndex(element, index) {
    element.setAttribute("data-index", index);
  }

  /**
   * @cleanPathsToFileNames
   * This method removes the unecessary parts from
   * the previous gathered thumbs images src and creates
   * the corrected path to the big images and group them
   * in an array.
   */
  cleanPathsToFileNames() {
    this.fileNames = [];

    for (let i = 0; i < this.liThumbsSrcArr.length; i++) {
      let splitedSrc = this.liThumbsSrcArr[i].split("/").pop();

      if (window.location.hostname === "localhost") {
        if (Boolean(this.bigImgsPostFix)) {
          //CONVERT THIS TO A FUNCTION
          let nameAndExtension = splitedSrc.split(".");
          let justName = nameAndExtension[0] + this.bigImgsPostFix;
          let extension = nameAndExtension[1];
          let newNameWithPostfixAndPath = `${this.fullSizePath}${justName}.${extension}`;

          this.fileNames.push(newNameWithPostfixAndPath);
        } else {
          let pathAndName = `${this.fullSizePath}${splitedSrc}`;

          this.fileNames.push(pathAndName);
        }
      } else {
        if (Boolean(this.bigImgsPostFix)) {
          let nameAndExtension = splitedSrc.split(".");
          let justName = nameAndExtension[0] + this.bigImgsPostFix;
          let extension = nameAndExtension[1];
          let newNameWithPostfixAndPath = `${this.baseURL}${this.fullSizePath}${justName}.${extension}`;

          this.fileNames.push(newNameWithPostfixAndPath);
        } else {
          let pathAndName = `${this.baseURL}${this.fullSizePath}${splitedSrc}`;

          this.fileNames.push(pathAndName);
        }
      }
    }

    return (this.pathsToBigImgs = [...this.fileNames]);
  }
}
