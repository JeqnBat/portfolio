/**
 * <b>DESCR:</b><br>
 * All event listeners || handlers are defined inside
 * this class. Use it to select, click, scroll,…
 *
 * @constructor
 * @param {object} model the model it commands w/ all the user events
 */
class Controller {
  constructor(model) {
    this.model = model
  }
// BIG TITLE CLICK ________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Slides up the home screen outside the viewport
  *
  * @method
  */
  titleClick() {
    let that = this
    $('.title').on('click', function() {
      that.model.slideUp('#home-screen')
    })
  }
// FR | ENGL CLICK ________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Switches language on nav language click.
  * Uses model.switchtTo(lang, project)
  *
  * @method
  * @param {object} project w/ all its properties
  */
  langClick(project) {
    let that = this

    $('.fr-engl').on('click', function() {
      let lang = $(this).attr('id')
      that.model.switchTo(project, lang)
    })
  }
// MINIATURE'S MOUSEOVER __________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Calls
  *
  * @method
  * @param {object} project the project w/ all its properties
  */
  miniMouseOver(project) {
    let that = this
    $(`[item="OCP#${project.id}"]`).on('mouseenter', function() {
      that.model.focusMiniature(project.color, project.id)
    })
    $(`[item="OCP#${project.id}"]`).on('mouseleave', function() {
      that.model.looseFocus(project.color, project.id)
    })
  }
}
