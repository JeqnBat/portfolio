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
  * @param {object} project the project's instance
  */
  titleClick(project) {
    this.model.transition(project, 'to-main-page')
  }
// #PORTFOLIO TOP LEFT LOGO CLICK _________________________ */
 /**
  * <b>DESCR:</b><br>
  * Resets DOM to 'main-page' configuration.
  * "HOME" button.
  *
  * @method
  * @param {object} project the project's instance
  */
  portfolioClick(project) {
    this.model.transition(project, 'back-to-main-page')
  }
// FR | ENGL CLICK ________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Switches language on nav language click.
  * Uses model.switchtTo(lang, project)
  *
  * @method
  * @param {object} project the project's instance
  */
  langClick(project) {
    this.model.updateLang(project)
  }
// SOCIAL ICONS NAV HOVER _________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Updates classes on SOCIAL ICONS DIVs to create animations
   * as user is hovering them.
   *
   * @method
   * @param {string} icon the ID of the hovered social nav icon
   */
  socialIconsFocus(icon) {
    this.model.view.printer('text', '.subtitle', icon)
  }
  socialIconsUnfocus() {
    this.model.view.printer('text', '.subtitle', '')
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
  miniatureMouseOver(project) {
    this.model.focusMiniature(project)
  }
  miniatureMouseOut(project) {
    this.model.looseFocus(project)
  }
  footerNavMouseOver(project) {
    this.model.view.updateClass(`.${project.id}`, 'add', 'slide-down')
    this.model.focusMiniature(project)
  }
  footerNavMouseOut(project) {
    this.model.view.updateClass(`.${project.id}`, 'remove', 'slide-down')
    this.model.looseFocus(project)
  }
// MINIATURE & BOTTOM NAV & ARROWS CLICK___________________ */
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
    this.model.showProjectDetails(project)
  }
  bottomNavClick(project) {
    this.model.showProjectDetails(project)
  }
  rightArrowClick(project) {
    this.model.showProjectDetails(project)
  }
  leftArrowClick(project) {
    this.model.showProjectDetails(project)
  }
// MORE ABOUT ME CLICK ____________________________________ */
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
    this.model.transition(project, 'back-up')
  }
// MOUSE WHEEL OVER DOCUMENT ______________________________ */
 /**
  * <b>DESCR:</b><br>
  * Scrolls up & down the page using the mouse wheel
  *
  * @method
  * @param {object} project the project w/ all its properties
  */
  mouseWheelUp(project) {
    if (pageStatus == 'home-logo') {
      return
    } else if (pageStatus == 'main-page') {
      this.model.transition(project, 'back-to-title')
    } else if (pageStatus == 'about-me') {
      this.model.transition(project, 'back-up')
    } else {
      return
    }
  }
  mouseWheelDown(project) {
    if (pageStatus == 'home-logo') {
      this.model.transition(project, 'to-main-page')
    } else if (pageStatus == 'main-page' && loading == 'completed') {
      this.model.transition(project, 'to-about-me')
    } else {
      return
    }
  }
// GLOBAL EVENT DELEGATOR _________________________________ */
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
    document.addEventListener('click', () => {
    // TITLE CLICK
      if (event.target.matches('.title h1')) {
        that.titleClick(projects)
        setTimeout(function() {
          resolve('logo clicked')
        }, 1000)
    // LANG CLICK
      } else if (event.target.matches('.fr-engl h3')) {
          lang = $(event.target.parentElement).attr('id')
          that.langClick(projects)
          resolve('language clicked')
    // LOGO CLICK
      } else if (event.target.matches('.logo')) {
          if (pageStatus == 'main-page') {
            return
          } else {
            that.portfolioClick(projects)
            for (let i = 0; i < projects.length; i++) {
              that.model.press(projects[i])
            }
            that.model.updateLang(projects)
            resolve('#PORTFOLIO clicked')
          }
    // MINIATURE CLICK
      } else if (event.target.closest('.miniature')) {
          let miniature = event.target.closest('.miniature')
          let item = miniature.getAttribute('item')
          that.miniatureClick(projects[that.model.identify('miniature', item)])
          resolve('miniature clicked')
    // FOOTER NAVIGATION CLICK
      } else if (event.target.matches('.footer-nav-item')) {
          let item = event.target.getAttribute('id')
          that.bottomNavClick(projects[that.model.identify('bottomNav', item)])
          resolve('bottomNav clicked')
    // RIGHT ARROW CLICK
      } else if (event.target.matches('#right')) {
          let targetNumber = parseInt(that.model.identify('langDetails', pageStatus), 10) - 1
          that.rightArrowClick(projects[targetNumber])
          resolve('right arrow clicked')
    // LEFT ARROW CLICK
      } else if (event.target.matches('#left')) {
          let targetNumber = parseInt(that.model.identify('langDetails', pageStatus), 10) - 3
          that.leftArrowClick(projects[targetNumber])
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
// MOUSE OVER EVENTS
      document.body.addEventListener('mouseenter', () => {
      // MOUSE OVER LINKEDIN
        if (event.target.matches('#linkedin img')) {
          that.socialIconsFocus('linkedin')
          resolve('linkedin hovered')
      // MOUSE OVER GITHUB
        } else if (event.target.matches('#github img')) {
            that.socialIconsFocus('github')
            resolve('github hovered')
      // MOUSE OVER MINIATURE
        } else if (event.target.matches('.miniature')) {
            let item = event.target.getAttribute('item')
            that.miniatureMouseOver(projects[that.model.identify('miniature', item)])
            resolve('miniature hovered')
      // MOUSE OVER FOOTER NAVIGATION
        } else if (event.target.matches('.footer-nav-item')) {
            let item = event.target.getAttribute('id')
            that.footerNavMouseOver(projects[that.model.identify('bottomNav', item)])
            resolve('bottom nav hovered')
        } else {
          return
        }
      }, true)
// MOUSE OUT EVENTS
      document.body.addEventListener('mouseleave', () => {
      // MOUSE OUT LINKEDIN
        if (event.target.matches('#linkedin img')) {
          that.socialIconsUnfocus()
          resolve('linkedin mouseout')
      // MOUSE OUT GITHUB
        } else if (event.target.matches('#github img')) {
            that.socialIconsUnfocus()
            resolve('github mouseout')
      // MOUSE OUT MINIATURE
        } else if (event.target.matches('.miniature')) {
            let item = event.target.getAttribute('item')
            that.miniatureMouseOut(projects[that.model.identify('miniature', item)])
            resolve('miniature mouseout')
      // MOUSE OUT FOOTER NAVIGATION
        } else if (event.target.matches('.footer-nav-item')) {
            let item = event.target.getAttribute('id')
            that.footerNavMouseOut(projects[that.model.identify('bottomNav', item)])
            resolve('bottom nav mouseout')
        } else {
          return
        }
      }, true)
// MOUSE WHEEL EVENTS
      document.addEventListener('wheel', () => {
      // MOUSE WHEEL UP
        if (event.deltaY < 0) {
          that.mouseWheelUp(projects)
          resolve('mouse wheel up')
      // MOUSE WHEEL DOWN
        } else if (event.deltaY > 0) {
          that.mouseWheelDown(projects)
          resolve('mouse wheel down')
        } else {
          return
        }
      })

    })
  }
}
