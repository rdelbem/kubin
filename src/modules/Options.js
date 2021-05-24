/**
 *  *  *  *  * SETTINGS
 *  *  *  *  *
 *  *  *  *  * setOptions, as the name suggests,
 *  *  *  *  * is an object that will be
 *  *  *  *  * called wherever it is necessary to
 *  *  *  *  * turn on or off this programm's features
 *
 * @overlay -> It can be set to : true or false. This will turn overlay on, if true, or turn off, if false, on the lightbox.
 * @overlayBlur -> It can be set to : true or false. If the value is set to true, then the overlay background will have a smooth blur. However if it is set to false it will be plain transparent.
 * @baseURL -> IT MUST BE SET! Set the value to match your base url.
 * @fullSizePath -> IT MUST BE SET! Set the path to your full size images.
 * @lightbox -> If it is set to true, you will have a nice light box to display your images. This lightbox supports keyboard arrow navigation and escape to exit.
 * @zoom -> If this is set to true, showing image on .kubin-principal will have a cool zoom on hover behavior.

 */

export const setOptions = {
  overlay: "black",
  overlayBlur: true,
  baseURL: "http://localhost:8080/",
  fullSizePath: "images/fullsize/",
  lightBox: true,
  zoom: true,
  bigImgsPostFix: null,
};
