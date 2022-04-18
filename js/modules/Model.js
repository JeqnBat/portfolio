/**
 * <b>DESCR:</b><br>
 * The 'Model' class regroups all the logic of the program.
 * It takes a 'view' as an entry point & a 'controller' as an output.
 *
 * @constructor
 */
export default class Model {
  constructor(view) {
    this.view = view
  }
// IDENTIFY () ____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Use this method before firing events w/ 'Controller'.
   * It will retrieve & return the targeted project's instance.
   *
   * @method
   * @param {string} when determines the switch's case
   * @param {number} item the number to deduce the project's id from
   */
  identify(when, item) {
    switch (when) {
      case 'miniature':
        let miniatureNumber = item.substring(4) - 2
        return miniatureNumber
      case 'bottomNav':
        let bottomNavNumber = item.substring(9) - 2
        return bottomNavNumber
      case 'langDetails':
        let projectNumber = item.substring(15)
        return projectNumber
    }
  }
// TEMPLATE MARKER () _____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Marks a given template w/ a specific chain of charaters
   * so the template can be identified later by the program.
   *
   * @method
   * @param {string} template the template inside which is located the target
   * @param {array} target array containing the pairs [oldCharacters, newCharacters]
   */
  mark(template, ...target) {
    let blankTemplate = template
    for (let i = 0; i < target.length; i++) {
      let marker = new RegExp(target[i][0], 'g')
      let markedTemplate = blankTemplate.replace(marker, target[i][1])
      blankTemplate = markedTemplate
    }
    return blankTemplate
  }
// LANGUAGE SWITCH () _____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Selects all the DOM elements containing a "lang" item
   * Stores them in 'selector' variable
   * Repaints them all w/ the language defined by 'controller.langClick()'
   *
   * @method
   * @param {array} origin the 'projects instances' array
   */
  updateLang(origin) {
    let selector
    if (pageStatus == 'main-page' || typeof pageStatus === 'object') {
      selector = this.view.$All(`[item=lang]`)
      selector.forEach((el, i) => {
        switch (selector[i].id) {
          case 'descr':
            this.view.portfolioDescription()
            break
          case `val${i}`:
            this.view.validationDate(origin)
            break
          case 'bio':
            this.view.write('#bio', `${lang == 'fr' ? bio.FR : bio.EN}`)
            break
        }
      })
    } else if (pageStatus == `project-details${this.identify('langDetails', pageStatus)}`) {
      let index = parseInt(this.identify('langDetails', pageStatus), 10) - 2
      selector = this.view.$All(`[item=lang]`)
      selector.forEach((el, i) => {
        switch (selector[i].id) {
          case 'descr':
            this.view.write('#descr', lang == 'fr' ? origin[index].descr.FR : origin[index].descr.EN)
            break
          case 'skills-list':
            this.view.write('#skills-list', '')
            for (let i = 0; i < origin[index].skills.FR.length; i++) {
              this.view.$('#skills-list').insertAdjacentHTML('beforeend', `<li>${lang == 'fr' ? origin[index].skills.FR[i] : origin[index].skills.EN[i]}</li>`)
            }
            break
          case 'page-details-date':
            this.view.write('#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin[index].date.FR : origin[index].date.EN}</p>`)
            break
          case 'skills-title':
            this.view.write('#skills-title', lang == 'fr' ? skills.FR : skills.EN)
            break
        }
      })
    }
    // NAV BUTTONS
    switch (lang) {
      case 'fr':
        this.view.activeFR()
        break
      default:
        this.view.activeEN()
        break
    }
    // FADE-IN
    selector.forEach((el) => {
      this.view.animate(el, '600', '', 'fade-in')
    })
  }
  // PRESS () _______________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Scans 'pageStatus' to determine which part of the DOM
   * should be displayed.
   *
   * Uses the marker to ID the blank templates
   * Prints it w/ view.
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
   */
  async press(origin) {
    return new Promise((resolve, reject) => {
      switch (pageStatus) {
        case 'main-page':
          const markedMiniature = this.mark(miniatureTemplate, ['xxxid', `${origin.id}`], ['xxxtitle', `${origin.title}`])
          const markedfooterNav = this.mark(footerNavTemplate, ['xxxid', `${origin.id}`])
          this.view.project(markedMiniature, origin, markedfooterNav)
          resolve('page printed')
          break
        case 'project-details':
          pageStatus = `project-details${origin.id}`
          const mobileDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'mobile'], ['imgFile', `${origin.img.mobile}`], ['color', `${siteColor}`], ['xxx', '70'], ['yyy', '131'])
          const desktopDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'desktop'], ['imgFile', `${origin.img.desktop}`], ['color', `${siteColor}`], ['xxx', '332'], ['yyy', '175'])
          const tabletDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'tablet'], ['imgFile', `${origin.img.tablet}`], ['color', `${siteColor}`], ['xxx', '152'], ['yyy', '202'])
          this.view.projectDetails(origin, mobileDiv, desktopDiv, tabletDiv)
          resolve('page printed')
          break
      }
    })
  }
// FOCUS MINIATURE () _____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Display miniature's details.
   * Second method does the exact opposite.
   *
   * @method
   * @param {object} origin the project w/ all its properties
   */
  focusMiniature(origin) {
    if (pageStatus === 'main-page') {
      this.view.miniatureActive(origin)
    }
    return
  }
// LOOSE FOCUS () _________________________________________ */
  looseFocus(origin) {
    this.view.miniatureInactive(origin)
  }
// ACTIVE BOTTOM NAV () ___________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Checks if one bottom nav is ACTIVE & removes its current class
   * Identifies project number w/ pageStatus & updates its bottom nav state
   * 
   * @method
   */
  activeBottomNav() {
    const currentNav = this.view.$('#footer-nav .current')
    if (currentNav) {
      let id = `#${currentNav.getAttribute('id')}`
      this.view.$(id).classList.remove('current')
    }
    const projectIndex = parseInt(this.identify('langDetails', pageStatus), 10)
    this.view.$(`#footerNav${projectIndex}`).classList.add('current')
  }
// SHOW PROJECT'S DETAILS () ______________________________ */
  /**
   * <b>DESCR:</b><br>
   * prints one project details on the full page.
   *
   * @method
   * @param {object} origin the project's class w/ all its properties
   */
  prepareProjectDetails(origin) {
    this.press(origin)
    this.activeBottomNav()
  }
// TRANSITION () __________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Smoothly handles the DOM in transition between 2 PAGES
   *
   * @method
   * @param {object} origin the project's class, necessary to update BG
   * @param {string} type the type of transition
   */
  transition(origin, type) {
    switch (type) {
      case 'to-main-page':
        pageStatus = 'main-page'
        this.view.toMainPage()
        break
      case 'to-project-details':
        pageStatus = 'project-details'
        this.view.toProjectDetails()
        this.prepareProjectDetails(origin)
        break
      case 'project-to-project':
        pageStatus = 'project-details'
        this.view.fromProjectToProject()
        // HIDE CONTENT SWAP
        setTimeout(() => {
          this.prepareProjectDetails(origin)
        }, 300)
        break
      case 'back-to-main-page':
        pageStatus = 'main-page'
        this.view.backToMainPage()
        break
      case 'to-about-me':
        pageStatus = [pageStatus, 'about-me']
        this.view.toAboutMe()
        break
      case 'back-up':
        if (this.view.$('#snapshots')) {
          pageStatus = pageStatus[0]
        } else {
          pageStatus = 'main-page'
        }
        this.view.backFromAboutMe()
        break
      case 'back-to-title':
        pageStatus = 'home-logo'
        this.view.backToTitle()
        break
    }
  }
}
