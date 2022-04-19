/**
 * <b>DESCR:</b><br>
 * All event listeners || handlers are defined inside
 * this class. Use it to select, click, scroll,…
 *
 * @constructor
 * @param {object} model the model it commands w/ all the user events
 */
export default class Controller {
  constructor(model) {
    this.model = model
  }
// TITLE CLICK () _________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Slides up the home screen outside the viewport
   *
   * @method
   * @param {object} project the project's instance
   */
  titleClick(project) {
    this.model.transition(project, 'to-main-page')
  }
// PORTFOLIO CLICK () _____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Resets DOM to 'main-page' configuration.
   * "HOME" button.
   *
   * @method
   * @param {object} projects all the projects
   */
  homeClick(projects) {
    this.model.transition(projects, 'back-to-main-page')
    projects.forEach((el, i) => {
      this.model.press(projects[i])
    })
    this.model.activeLangButton()
  }
// LANG CLICK () __________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Switches language on nav language click.
   * Uses model.switchtTo(lang, project)
   *
   * @method
   * @param {object} project the project's instance
   */
  langClick(project) {
    this.model.refreshLang(project)
  }
// MINIATURE & BOTTOM NAV ITEM'S MOUSEOVER () _____________ */
  /**
   * <b>DESCR:</b><br>
   * Calls model & view to update the viewport as content is
   * hovered by mouse.
   *
   * @method
   * @param {object} project the project w/ all its properties
   */
  miniatureMouseOver(project) {
    this.model.focusMiniature(project)
  }
  miniatureMouseOut(project) {
    this.model.looseFocus(project)
  }
  footerNavMouseHover(project) {
    this.model.view.$(`[item="OCP${project.nb}"]`).firstChild.classList.add('slide-down')
    this.model.focusMiniature(project)
  }
  footerNavMouseOut(project) {
    this.model.view.$(`[item="OCP${project.nb}"]`).firstChild.classList.remove('slide-down')
    this.model.looseFocus(project)
  }
// MINIATURE & BOTTOM NAV & ARROWS CLICK () _______________ */
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
    this.model.transition(project, 'to-project-details')
    this.model.looseFocus(project)
  }
  bottomNavClick(project) {
    if (pageStatus === 'main-page') {
      this.model.transition(project, 'to-project-details')
      this.model.looseFocus(project)
    } else {
      this.model.transition(project, 'project-to-project')
    }
  }
  next(project) {
    right = true
    this.model.transition(project, 'project-to-project')
  }
  previous(project) {
    right = false
    this.model.transition(project, 'project-to-project')
  }
// MORE ABOUT ME CLICK () _________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Toggles the 'More about me' page
   *
   * @method
   * @param {object} project the project w/ all its properties
   */
  aboutMeClick(project) {
    this.model.transition(project, 'to-about-me')
  }
  backUpClick(project) {
    this.model.transition(project, 'back-from-about-me')
  }
// DELEGATE () ____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Stores all the program's events inside the same method.
   * Delegates them to the entire document, so they are always
   * accessible, no matter what changes occur inside of the DOM.
   *
   * @method
   * @param {object} projects sends in all the projects so they can be identified
   */
  async delegate(projects) {
    let that = this
    return new Promise((resolve, reject) => {
      // CLICK EVENTS
      document.addEventListener('click', (event) => {
        // TITLE CLICK
        if (event.target.matches('.title h1') || event.target.matches('.title div')) {
          that.titleClick(projects)
          resolve('logo clicked')
        // LANG CLICK
        } else if (event.target.matches('.fr-engl h3')) {
          pageLang = event.target.parentElement.getAttribute('id')
          that.langClick(projects)
          resolve('language clicked')
        // LOGO CLICK
        } else if (event.target.matches('#portfolio-button')) {
          if (pageStatus === 'main-page') {
            that.model.transition(projects, 'back-to-title')
            resolve('#PORTFOLIO clicked from main page')
          } else {
            that.homeClick(projects)
            resolve('#PORTFOLIO clicked from details')
          }
          // MINIATURE CLICK
        } else if (event.target.closest('.miniature') && pageStatus === 'main-page') {
          const miniature = event.target.closest('.miniature')
          const id = miniature.getAttribute('item')
          that.miniatureClick(projects.find(obj => obj.id === id ))
          resolve('miniature clicked')
          // FOOTER NAVIGATION CLICK
        } else if (event.target.matches('.footer-nav-item')) {
          const nb = event.target.getAttribute('id').slice(-1)
          that.bottomNavClick(projects.find(obj => obj.nb === parseInt(nb) ))
          resolve('bottomNav clicked')
          // RIGHT ARROW CLICK
        } else if (event.target.matches('#right')) {
          const nb = parseInt(pageStatus.slice(-1)) - 1
          that.next(projects[nb])
          resolve('right arrow clicked')
          // LEFT ARROW CLICK
        } else if (event.target.matches('#left')) {
          const nb = parseInt(pageStatus.slice(-1)) - 3
          that.previous(projects[nb])
          resolve('left arrow clicked')
          // MORE ABOUT ME CLICK
        } else if (event.target.matches('#about-me')) {
          that.aboutMeClick(projects)
          resolve('more about me clicked')
          // BACK UP CLICK
        } else if (event.target.matches('#back-up')) {
          that.backUpClick(projects)
          resolve('more about me clicked')
        } else {
          return
        }
      }, false)
      // MOUSE HOVER EVENTS
      document.body.addEventListener('mouseenter', (event) => {
        // MOUSE HOVER MINIATURE
        if (event.target.matches('.miniature')) {
          const id = event.target.getAttribute('item')
          that.miniatureMouseOver(projects.find(obj => obj.id === id ))
          resolve('miniature hovered')
        // MOUSE HOVER FOOTER NAV
        } else if (event.target.matches('.footer-nav-item') && pageStatus === 'main-page') {
          const nb = event.target.getAttribute('id').slice(-1)
          that.footerNavMouseHover(projects.find(obj => obj.nb === parseInt(nb)))
          resolve('bottom nav hovered')
        } else {
          return
        }
      }, true)
      // MOUSE OUT EVENTS
      document.body.addEventListener('mouseleave', (event) => {
        // MOUSE OUT MINIATURE
        if (event.target.matches('.miniature')) {
          const id = event.target.getAttribute('item')
          that.miniatureMouseOut(projects.find(obj => obj.id === id ))
          resolve('miniature mouseout')
        // MOUSE OUT FOOTER NAVIGATION
        } else if (event.target.matches('.footer-nav-item') && pageStatus === 'main-page') {
          const nb = event.target.getAttribute('id').slice(-1)
          that.footerNavMouseOut(projects.find(obj => obj.nb === parseInt(nb)))
          resolve('bottom nav mouseout')
        } else {
          return
        }
      }, true)
    })
  }
}
