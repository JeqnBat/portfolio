/**
 * <b>DESCR:</b><br>
 * The 'Model' class regroups all the actions
 * a user can have on the program.
 * It takes a controller as an exiting point & a view as
 * an entring point.
 *
 * @constructor
 * @param {view} object renders the visuals of the actions taken by Model
 */
class Model {
  constructor(view) {
    this.view = new View()
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
    this.view.updateClass(id, 'add', 'fade-in')
   setTimeout(function() {
    that.view.updateClass(id, 'remove', 'fade-in')
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
    this.view.updateClass(div, 'add', 'slide-up')
  }
// SWITCH LANGUAGE ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Selects all the DOM elements containing a "lang" item
   * Stores them in 'selector' variable
   * Repaints them all w/ the language defined by 'controller.langClick()'
   *
   * @method
   * @param {string} lang the ID of the language to switch to
   */
  switchTo(project, lang) {
   let selector = $(document).find(`[item=lang]`)
   // DOM SECTIONS
   for (let i = 0; i < selector.length; i++) {
     switch (selector[i].id) {
      case 'descr':
        this.view.print('text', '#descr', lang == 'FR' ? descr.FR : descr.EN)
      case 'validation':
      for (let j = 0; j < project.length; j++) {
        console.log(project[j].id)
        this.view.print('text', `#val${project[j].id}`, lang == 'FR' ? validation.FR : validation.EN)
        this.view.print('text', `#date${project[j].id}`, lang == 'FR' ? project[j].date.FR : project[j].date.EN)
      }
     }
   }
   // NAV BUTTONS
   switch (lang) {
     case 'FR':
       this.view.updateClass(`#FR`, 'add', 'lang-button-active')
       this.view.updateClass('#EN', 'remove', 'lang-button-active')
       break
     default:
       this.view.updateClass(`#EN`, 'add', 'lang-button-active')
       this.view.updateClass('#FR', 'remove', 'lang-button-active')
       break
   }
   this.fadeIn(selector)
  }
// TEMPLATE MARKER ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes a template from view & marks it down w/ IDs so it
   * can be processed.
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
   */
   mark(origin) {
     let marked = miniature.replace(/xxxid/g, `${origin.id}`).replace(/xxxtitle/g, `${origin.title}`)
     this.view.print('div', '#central-nav', marked)
     $(`[item="OCP#${origin.id}"]`).css('background-image', `url("${origin.img.mini}")`)
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
    this.view.updateClass('#colored-bg', 'add', `${color}`)
    this.view.updateClass('#colored-bg', 'add', 'slide-left')
    this.view.updateClass(`[item="OCP#${id}"]`, 'edit', 'opacity', '1')
    this.view.updateClass(`.${id}`, 'add', 'slide-down')
  }
  looseFocus(color, id) {
    this.view.updateClass('#colored-bg', 'remove', `${color}`)
    this.view.updateClass('#colored-bg', 'remove', 'slide-left')
    this.view.updateClass('#colored-bg', 'edit', 'opacity', '.8')
    this.view.updateClass(`.${id}`, 'remove', 'slide-down')
  }
}
