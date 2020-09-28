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
    pageStatus = 'main-page'
    this.model.view.updateClass('#home-screen', 'add', 'slide-up')
  }
// #PORTFOLIO TOP LEFT LOGO CLICK _________________________ */
 /**
  * <b>DESCR:</b><br>
  * Resets DOM to 'main-page' configuration.
  * "HOME" button.
  *
  * @method
  */
  portfolioClick() {
    pageStatus = 'main-page'
    this.model.cleanDetails()
  }
// FR | ENGL CLICK ________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Switches language on nav language click.
  * Uses model.switchtTo(lang, project)
  *
  * @method
  * @param {object} origin one particular project w/ all its properties
  */
  langClick(origin) {
    this.model.updateLang(origin)
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
    this.model.view.print('text', '.subtitle', icon)
  }
  socialIconsUnfocus() {
    this.model.view.print('text', '.subtitle', '')
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
    pageStatus = 'project-details'
    this.model.press(project)
  }
  bottomNavClick(project) {
    pageStatus = 'project-details'
    this.model.press(project)
    this.model.activeBottomNav()
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
        that.titleClick()
        setTimeout(function() {
          resolve('logo clicked')
        }, 1000)
      // LANG CLICK
      } else if (event.target.matches('.fr-engl h3')) {
          lang = $(event.target.parentElement).attr('id')
          let singleProject = projects[that.model.identify('langDetails', pageStatus)]
          that.langClick(projects)
          resolve('language clicked')
      // LOGO CLICK
      } else if (event.target.matches('.logo')) {
          if (pageStatus == 'main-page') {
            return
          } else {
            that.portfolioClick()
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
          if (targetNumber >= projects.length) {
            that.model.view.print('remove', '#right')
            return
          } else {
            // NOMMER UNE NOUVELLE METHODE POUR PAS CONFONDRE LES DEUX
            that.bottomNavClick(projects[targetNumber])
          }
          resolve('bottomNav clicked')
      // LEFT ARROW CLICK
      } else if (event.target.matches('#left')) {
          let targetNumber = parseInt(that.model.identify('langDetails', pageStatus), 10) - 3
          if (targetNumber <= -1) {
            that.model.view.print('remove', '#left')
            return
          } else {
            // NOMMER UNE NOUVELLE METHODE POUR PAS CONFONDRE LES DEUX
            that.bottomNavClick(projects[targetNumber])
          }
          resolve('bottomNav clicked')
      } else {
        return
      }
    }, false)
// MOUSE OVER EVENTS
      document.addEventListener('mouseenter', () => {
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
      document.addEventListener('mouseleave', () => {
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
    })
  }
}
