import View from './View.js'
/**
 * <b>DESCR:</b><br>
 * The 'Model' class regroups all the actions
 * a user can have on the program.
 * It takes a 'view' as an entry point & a 'controller' as an output.
 *
 * @constructor
 * @param {view} object renders the visuals of the actions taken by Model
 */
export default class Model {
  constructor(view) {
    this.view = new View()
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
    let y = template
    for (let i = 0; i < target.length; i++) {
      let x = new RegExp(target[i][0], 'g')
      let z = y.replace(x, target[i][1])
      y = z
    }
    return y
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
    if (pageStatus == 'main-page' || pageStatus == 'about-me') {
      selector = document.querySelectorAll(`[item=lang]`)
      for (let i = 0; i < selector.length; i++) {
        switch (selector[i].id) {
          case 'descr':
            this.view.portfolioDescription()
            break
          case `val${i}`:
            this.view.validationDate(origin)
            break
          case 'bio':
            this.view.printer('text', '#bio', `${lang == 'fr' ? bio.FR : bio.EN}`)
            break
        }
      }
    } else if (pageStatus == `project-details${this.identify('langDetails', pageStatus)}`) {
      let index = parseInt(this.identify('langDetails', pageStatus), 10) - 2
      selector = document.querySelectorAll(`[item=lang]`)
      for (let i = 0; i < selector.length; i++) {
        switch (selector[i].id) {
          case 'descr':
            this.view.printer('text', '#descr', lang == 'fr' ? origin[index].descr.FR : origin[index].descr.EN)
            break
          case 'skills-list':
            this.view.printer('text', '#skills-list', ' ')
            for (let i = 0; i < origin[index].skills.FR.length; i++) {
              this.view.printer('div', '#skills-list', `<li>${lang == 'fr' ? origin[index].skills.FR[i] : origin[index].skills.EN[i]}</li>`)
            }
            break
          case 'page-details-date':
            this.view.printer('text', '#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin[index].date.FR : origin[index].date.EN}</p>`)
            break
          case 'skills-title':
            this.view.printer('text', '#skills-title', lang == 'fr' ? skills.FR : skills.EN)
            break
        }
      }
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
    selector.forEach((element) => {
      this.view.fadeIn('#' + element.getAttribute('id'))
    })
  }
  // PRINTER () _____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Scans 'pageStatus' to determine which part of the DOM
   * should be displayed.
   *
   * Uses the marker to ID the blank templates
   * Prints it w/ view.printer().
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
   */
  async press(origin) {
    return new Promise((resolve, reject) => {
      switch (pageStatus) {
        case 'main-page':
          let markedMiniature = this.mark(miniatureTemplate, ['xxxid', `${origin.id}`], ['xxxtitle', `${origin.title}`])
          let markedfooterNav = this.mark(footerNavTemplate, ['xxxid', `${origin.id}`])
          this.view.projects(markedMiniature, origin, markedfooterNav)
          resolve('page printed')
          break
        case 'project-details':
          let mobileDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'mobile'], ['imgFile', `${origin.img.mobile}`], ['color', `${origin.color}`], ['xxx', '108'], ['yyy', '202'])
          let desktopDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'desktop'], ['imgFile', `${origin.img.desktop}`], ['color', `${origin.color}`], ['xxx', '512'], ['yyy', '271'])
          let tabletDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'tablet'], ['imgFile', `${origin.img.tablet}`], ['color', `${origin.color}`], ['xxx', '234'], ['yyy', '311'])
          pageStatus = `project-details${origin.id}`
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
    switch (pageStatus) {
      case 'main-page':
        this.view.OverScreenDown(origin)
        break
      case `page-details${this.identify('langDetails', pageStatus)}`:
        break
    }
  }
  // LOOSE FOCUS () _________________________________________ */
  looseFocus(origin) {
    switch (pageStatus) {
      case 'main-page':
        this.view.OverScreenUp(origin)
        break
      case `page-details${this.identify('langDetails', pageStatus)}`:
        break
    }
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
    let currentNav = document.querySelector('#footer-nav .current')
    if (currentNav) {
      let id = `#${currentNav.getAttribute('id')}`
      this.view.updateClass(id, 'remove', 'current')
    }
    let projectIndex = parseInt(this.identify('langDetails', pageStatus), 10)
    this.view.updateClass(`#footerNav${projectIndex}`, 'add', 'current')
  }
  // SHOW PROJECT'S DETAILS () ______________________________ */
  /**
   * <b>DESCR:</b><br>
   * prints one project details on the full page.
   *
   * @method
   * @param {object} origin the project's class w/ all its properties
   */
  async showProjectDetails(origin) {
    pageStatus = 'project-details'
    await this.press(origin)
    this.activeBottomNav()
  }
  // TRANSITION () __________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Smoothly handles the DOM in transition between 2 PAGES
   * printer.
   *
   * @method
   * @param {object} origin the project's class, necessary to update BG
   * @param {string} type the type of transition
   */
  transition(origin, type) {
    switch (type) {
      case 'to-main-page':
        this.view.updateClass('#slider', 'add', 'slider-down')
        pageStatus = 'main-page'
        break
      case 'to-project-details':
        console.log('main to details');
        this.view.printer('remove', '#past-and-present')
        this.showProjectDetails(origin)
        break
      case 'project-to-project':
        console.log('details to details');
        this.showProjectDetails(origin)
        break
      case 'back-to-main-page':
        this.view.backToMainPage(origin)
        break
      case 'to-about-me':
        this.view.toAboutMe()
        break
      case 'back-up':
        this.view.backFromAboutMe()
        break
      case 'back-to-title':
        this.view.backToTitle()
        break
    }
  }
}
