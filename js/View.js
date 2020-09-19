/**
 * <b>DESCR:</b><br>
 * The 'View' Class acts on the viewport :
 *  animates; display, hide DIVs; change colors; etc.
 *
 * @constructor
 */
class View {
  constructor() {
  }
// CSS CLASS MANAGER ______________________________________ */
  /**
  * <b>DESCR:</b><br>
  * Edits, Adds & Removes any given CSS class in the DOM
  * Takes 3 entry points:
  *
  * @method
  * @param {string} nodeTarget the targeted DOM element
  * @param {string} action the action to perform
  * @param {string} classTarget the targeted CSS class
  * @param {string} value the value to update
  */
  updateClass(nodeTarget, action, classTarget, value) {
    switch(action) {
      case 'add':
        $(nodeTarget).addClass(classTarget)
        break
      case 'remove':
        $(nodeTarget).removeClass(classTarget)
        break
      case 'edit':
        $(nodeTarget).css(classTarget, value)
        break
    }
  }
// PRINT ANY CONTENT INSIDE THE DOM _______________________ */
  /**
   * <b>DESCR:</b><br>
   * Use printer to create HTML nodes & content & display them
   * inside the DOM. The printer has 4 entry points :
   *
   * @method
   * @param {string} type the content's type
   * @param {string} target the DOM node where to print content
   * @param {string} content the actual content
   */
   print(type, target, content) {
     switch(type) {
       case 'text':
        $(target).html(content)
       break
       case 'div':
        $(target).append(content)
       break
     }
   }
// FADE IN ________________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Adds a CSS class to a DOM element to make it fade in
   *
   * @method
   * @param {string} id the DOM element to add the class to
   */
  fadeIn(id) {
    let that = this
      this.updateClass(id, 'add', 'fade-in')
    setTimeout(function() {
      that.updateClass(id, 'remove', 'fade-in')
    }, 600)
  }
// SLIDE-UP 100% __________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Adds css class 'slide-up' to DOM element & moves it
   * 100% up, outside of the viewport
   *
   * @method
   * @param {string} div the DOM element on which to perform the slide
   */
  slideUp(div) {
    this.updateClass(div, 'add', 'slide-up')
  }
}
