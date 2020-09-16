/**
 * <b>DESCR:</b><br>
 * Deals w/ all the website's animations
 *
 * @constructor
 */
class Animations {
  constructor() {
  }
// SLIDE-UP 100% _______________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Adds css class 'slide-up' to DOM element & moves it
   * 100% up, outside of the viewport
   *
   * @method
   * @param {string} div the DOM element on which to perform the slide
   */
   slideUp(div) {
     $(div).addClass('slide-up')
   }
}
