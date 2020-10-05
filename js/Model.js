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
// IDENTIFY WHICH PROJECT IS TARGETED _____________________ */
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
     switch(when) {
       case 'miniature':
         let miniatureNumber = item.substring(4) - 2
         return miniatureNumber
         break
       case 'bottomNav':
         let bottomNavNumber = item.substring(9) - 2
         return bottomNavNumber
         break
       case 'langDetails':
         let projectNumber = item.substring(15)
         return projectNumber
         break
     }
   }
// TEMPLATE MARKER ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Marks a given template w/ a specific chain of charaters
   * so the template can be identified later by the program.
   *
   * @method
   * @param {string} template the template inside which is located the target
   * @param {array} target the pair [oldCharacters, newCharacters]
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
// LANGUAGE SWITCH ________________________________________ */
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
      selector = $(document).find(`[item=lang]`)
      for (let i = 0; i < selector.length; i++) {
        switch (selector[i].id) {
         case 'descr':
          this.view.projectDescription()
          break
         case `val${i}`:
          this.view.validationDate(origin)
          break
         case 'bio':
          this.view.printer('text', '#bio', `${lang == 'fr' ? bio.FR : bio.EN}`)
          break
         case 'contact-me':
          this.view.printer('text', '#contact-me a', `${lang == 'fr' ? contactMe.FR : contactMe.EN}`)
          break
        }
     }
   } else if (pageStatus == `project-details${this.identify('langDetails', pageStatus)}`) {
     let index = parseInt(this.identify('langDetails', pageStatus), 10) - 2
     selector = $(document).find(`[item=lang]`)
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
   this.view.fadeIn(selector)
  }
// printerER ________________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Scans 'pageStatus' to determine which part of the DOM
   * should be displayed.
   *
   * Uses the marker to ID the blank templates
   * printers it w/ view.printer().
   *
   * @method
   * @param {object} origin the object whose properties will be printered as markers
   */
  async press(origin) {
    let that = this
    return new Promise((resolve, reject) => {
       switch(pageStatus) {
         case 'main-page':
           let markedMiniature = this.mark(miniatureTemplate, ['xxxid', `${origin.id}`], ['xxxtitle', `${origin.title}`])
           let markedfooterNav = this.mark(footerNavTemplate, ['xxxid', `${origin.id}`])
           this.view.mainPage(markedMiniature, origin, markedfooterNav)
           break
         case 'project-details':
           let mobileDiv  = this.mark(screenShotTemplate, ['xxxurl',`${origin.url}`], ['layout', 'mobile'], ['imgFile', `${origin.img.mobile}`], ['color', `${origin.color}`], ['xxx', '108'], ['yyy', '202'])
           let desktopDiv = this.mark(screenShotTemplate, ['xxxurl',`${origin.url}`], ['layout', 'desktop'], ['imgFile', `${origin.img.desktop}`], ['color', `${origin.color}`], ['xxx', '512'], ['yyy', '271'])
           let tabletDiv  = this.mark(screenShotTemplate, ['xxxurl',`${origin.url}`], ['layout', 'tablet'], ['imgFile', `${origin.img.tablet}`], ['color', `${origin.color}`], ['xxx', '234'], ['yyy', '311'])
           // TIME OUT TO SYNCHRONIZE FADE IN
           setTimeout(function() {
             that.view.projectDetails(origin, mobileDiv, desktopDiv, tabletDiv)
           }, 300)
           pageStatus = `project-details${origin.id}`
           break
       }
       // HOME PAGE MINIATURE printer DELAY IN ms
       setTimeout(function () {
         resolve('page printered')
       }, 130)
     })
   }
// REFRESH PAGE AFTER MINIATURE MOUSEOVER _________________ */
  /**
   * <b>DESCR:</b><br>
   * Sets new bg-color to '#colored-bg' & triggers slide-left
   * Display miniature's details.
   * Second method does the exact opposite.
   *
   * @method
   * @param {object} origin the project w/ all its properties
   */
  focusMiniature(origin) {
    switch(pageStatus) {
      case 'main-page':
        this.view.OverScreenDown(origin)
        break
      case `page-details${this.identify('langDetails', pageStatus)}`:
        return
        break
    }
  }
  looseFocus(origin) {
    switch(pageStatus) {
      case 'main-page':
        this.view.OverScreenUp(origin)
        break
      case `page-details${this.identify('langDetails', pageStatus)}`:
        return
        break
    }
  }
// DEAL W/ BOTTOM NAV CLICK _______________________________ */
  /**
   * <b>DESCR:</b><br>
   * A little trick to keep the bottom nav active item visible
   *
   * @method
   */
   activeBottomNav() {
    this.view.updateClass('#footer-nav>.footer-nav-item.current', 'remove', 'current')
    let x = parseInt(this.identify('langDetails', pageStatus), 10)
    this.view.updateClass(`#footerNav${x}`, 'add', 'current')
   }
// SHOW PROJECT'S DETAILS _________________________________ */
 /**
  * <b>DESCR:</b><br>
  * printers one project details on the full page.
  *
  * @method
  * @param {object} origin the project's class w/ all its properties
  */
  showProjectDetails(origin) {
    this.transition(origin, 'to-project-details')
    this.press(origin)
    this.activeBottomNav()
  }
// TRANSITION BETWEEN PAGES _______________________________ */
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
    switch(type) {
      case 'to-main-page':
        this.view.updateClass('#slider', 'add', 'slider-down')
        pageStatus = 'main-page'
        break
      case 'to-project-details':
        this.view.toProjectDetails(origin)
        pageStatus = 'project-details'
        break
      case 'back-to-main-page':
        this.view.backToMainPage(origin)
        pageStatus = 'main-page'
        break
      case 'to-about-me':
        this.view.toAboutMe()
        pageStatus = 'about-me'
        break
      case 'back-up':
        this.view.backFromAboutMe()
        pageStatus = 'main-page'
        break
      case 'back-to-title':
        this.view.backToTitle()
        pageStatus = 'home-logo'
        break
    }
  }
}
