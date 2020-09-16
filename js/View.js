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
   $(div).addClass('slide-up')
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
   $(id).addClass('fade-in')
   setTimeout(function() {
    id.removeClass('fade-in')
  }, 700)
  }
// REPLACE A DIV'S INNERHTML ______________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes a DOM element's ID and a new content and replaces the
   * element's current innerHTML by the new content.
   *
   * @method
   * @param {string} id the ID of the DOM element whose innerHTML will be replaced
   * @param {string} content the new innerHTML content
   */
  repaint(id, content) {
    $(id).html(content)
  }
// DISPLAY PROJECT'S MINIATURES ___________________________ */
  /**
   * <b>DESCR:</b><br>
   * Gets the 'project[x].img.mini' property & displays it inside
   * the appropriate DIV.
   *
   * @method
   * @param {object} project the project w/ all its properties
   */
  printMiniature(project) {
    $('#central-nav').append(`<div class="miniature" item="OCP#${project.id}"></div>`)
    $(`[item="OCP#${project.id}"]`).css('background-image', `url("${project.img.mini}")`)
  }
// REFRESH PAGE AFTER MINIATURE MOUSEOVER _________________ */
  /**
  * <b>DESCR:</b><br>
  * Sets new bg-color to '#colored-bg' & triggers slide-left
  * Display miniature's details. Second method does the
  * exact opposite.
  *
  * @method
  * @param {color} string the project's associated color
  * @param {id} string the project's ID
  */
  focusMiniature(color, id) {
    $('#colored-bg').addClass(`${color}`)
    $('#colored-bg').addClass('slide-left')
    $(`[item="OCP#${id}"]`).css('opacity', '1')
  }
  looseFocus(color, id) {
    $('#colored-bg').removeClass(`${color}`)
    $('#colored-bg').removeClass('slide-left')
    $(`[item="OCP#${id}"]`).css('opacity', '.8')
  }
}
