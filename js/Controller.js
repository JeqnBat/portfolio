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
  async titleClick() {
    let that = this
    return new Promise((resolve, reject) => {
      $('.title').on('click', function() {
        pageStatus = 'main-page'
        that.model.view.slideUp('#home-screen')
        setTimeout(function() {
          resolve('logo-clicked')
        }, 1000)
        return pageStatus
      })
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
      lang = $(this).attr('id')
      that.model.switchTo(project)
    })
  }
// MINIATURE & BOTTOM NAV ITEM'S MOUSEOVER ________________ */
 /**
  * <b>DESCR:</b><br>
  * Calls model & view to update the viewport as content is
  * hovered by mouse.
  *
  * @method
  * @param {object} project the project w/ all its properties
  */
  miniMouseOver(project) {
    let that = this
    $(`[item="OCP#${project.id}"]`).on('mouseenter', function() {
      that.model.focusMiniature(project.color, project.id)
      that.model.view.updateClass(`#bottomNav${project.id}`, 'add', 'active')
    })
    $(`[item="OCP#${project.id}"]`).on('mouseleave', function() {
      that.model.looseFocus(project.color, project.id)
      that.model.view.updateClass(`#bottomNav${project.id}`, 'remove', 'active')
    })
  }
  bottomNavMouseOver(project) {
    let that = this
    $(`#bottomNav${project.id}`).on('mouseenter', function() {
      switch(pageStatus) {
        case 'main-page':
          that.model.focusMiniature(project.color, project.id)
          that.model.view.updateClass(`#bottomNav${project.id}`, 'add', 'active')
        break
        case 'project-details':
        break
      }
    })
    $(`#bottomNav${project.id}`).on('mouseleave', function() {
      switch(pageStatus) {
        case 'main-page':
          that.model.looseFocus(project.color, project.id)
          that.model.view.updateClass(`#bottomNav${project.id}`, 'remove', 'active')
        break
        case 'project-details':
        break
      }
    })
  }
// MINIATURE & BOTTOM NAV ITEM CLICK ______________________ */
 /** <b>DESCR:</b><br>
  * Transitions from 'main-page' to 'project-details'
  * Appends new layout for #central-nav
  * Changes bg color
  * Displays project's details & description
  * Sets page status to 'project-details'
  *
  * @method
  * @param {object} project the project w/ all its properties
  */
  miniatureClick(project) {
    let that = this
    $(`[item="OCP#${project.id}"]`).on('click', function() {
      pageStatus = 'project-details'
      that.model.markThenPrint(project)
    })
  }
// ALL EVENTS _____________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Gather all event listeners inside one method in order to
  * call them all only one time in page. Takes all the parameters
  * from all the methods of this class.
  *
  * @method
  * @param {object} project the project w/ all its properties
  */
  allEvents(project) {
    this.miniMouseOver(project)
    this.bottomNavMouseOver(project)
    this.miniatureClick(project)
  }
}
