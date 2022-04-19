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
// UPDATE LANG () _________________________________________ */
  activeLangButton() {
    switch (pageLang) {
      case 'fr':
        this.view.activeFR()
        break
      default:
        this.view.activeEN()
        break
    }
  }
// REFRESH LANG () ________________________________________ */
  refreshLang(origin) {
    const itemLang = this.view.$All('[item="lang"]')
    itemLang.forEach((el) => {
      this.view.animate(el, '400', '', 'fade-out')
    })

    setTimeout(() => {
      this.activeLangButton()
      if (pageStatus === 'main-page') {
        origin.forEach((el) => {
          this.view.portfolioDescription()
          this.view.validationDate(el)
        })
      } else if (pageStatus.includes('details')) {
        const nb = pageStatus.slice(-1)
        this.view.projectDescr(origin.find(obj => obj.nb === parseInt(nb)))
      } else {
        this.view.bioContact()
      }
      itemLang.forEach((el) => {
        el.style.opacity = '0'
        this.view.animate(el, '1200', '', 'fade-in')
      })
    }, 100)
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
  press(origin) {
    switch (pageStatus) {
      case 'main-page':
        const markedMiniature = this.mark(miniatureTemplate, ['xxxid', `${origin.id}`], ['xxxtitle', `${origin.title}`], ['xxxnb', `${origin.nb}`])
        const markedfooterNav = this.mark(footerNavTemplate, ['xxxnb', `${origin.nb}`])
        this.view.project(markedMiniature, origin, markedfooterNav)
        break
      case 'project-details':
        pageStatus = `project-details${origin.nb}`
        const mobileDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'mobile'], ['imgFile', `${origin.img.mobile}`], ['color', `${siteColor}`], ['xxx', '70'], ['yyy', '131'])
        const desktopDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'desktop'], ['imgFile', `${origin.img.desktop}`], ['color', `${siteColor}`], ['xxx', '332'], ['yyy', '175'])
        const tabletDiv = this.mark(screenShotTemplate, ['xxxurl', `${origin.url}`], ['layout', 'tablet'], ['imgFile', `${origin.img.tablet}`], ['color', `${siteColor}`], ['xxx', '152'], ['yyy', '202'])
        this.view.projectDetails(origin, mobileDiv, desktopDiv, tabletDiv)
        break
      }
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
    this.view.$(`#footerNav${pageStatus.slice(-1)}`).classList.add('current')
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
      case 'back-from-about-me':
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
