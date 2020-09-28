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
// SWITCH LANGUAGE ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Selects all the DOM elements containing a "lang" item
   * Stores them in 'selector' variable
   * Repaints them all w/ the language defined by 'controller.langClick()'
   *
   * @method
   * @param {object} origin the project w/ all its properties
   */
  updateLang(origin) {
    let selector
    let index = parseInt(this.identify('langDetails', pageStatus), 10) - 2

    if (pageStatus == 'main-page') {
      selector = $(document).find(`[item=lang]`)
      for (let i = 0; i < selector.length; i++) {
       switch (selector[i].id) {
        case 'descr':
          this.view.projectDescription(origin)
        break
        case `val${i}`:
          this.view.validationDate(origin)
        break
       }
     }
   } else if (pageStatus == `project-details${this.identify('langDetails', pageStatus)}`) {
     selector = $(document).find(`[item=lang]`)
     for (let i = 0; i < selector.length; i++) {
       switch (selector[i].id) {
         case 'descr':
           this.view.print('text', '#descr', lang == 'fr' ? origin[index].descr.FR : origin[index].descr.EN)
         break
         case 'skills-list':
           this.view.print('text', '#skills-list', ' ')
           for (let i = 0; i < origin[index].skills.FR.length; i++) {
             this.view.print('div', '#skills-list', `<li>${lang == 'fr' ? origin[index].skills.FR[i] : origin[index].skills.EN[i]}</li>`)
           }
         break
         case 'page-details-date':
           this.view.print('text', '#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin[index].date.FR : origin[index].date.EN}</p>`)
         break
         case 'skills-title':
           this.view.print('text', '#skills-title', lang == 'fr' ? skills.FR : skills.EN)
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
// PRINTER ________________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Scans 'pageStatus' to determine which part of the DOM
   * should be displayed.
   *
   * Uses the marker to ID the blank templates
   * Prints it w/ view.print().
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
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
           this.view.transition(origin)
           // TIME OUT TO SYNCHRONIZE FADE IN
           setTimeout(function() {
             that.view.projectDetails(origin, mobileDiv, desktopDiv, tabletDiv)
           }, 300)
           pageStatus = `project-details${origin.id}`
         break
       }
       // HOME PAGE MINIATURE PRINT DELAY IN ms
       setTimeout(function () {
         resolve('page printed')
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
// CLEAN 'PROJECT'S DETAILS' PAGE _________________________ */
  /**
   * <b>DESCR:</b><br>
   * Cleans main DIV from their content in order to prepare the DOM
   * for a new major print.
   * Updates 'Page status' to 'main-page'
   *
   * @method
   */
   cleanDetails() {
     this.view.print('text', '#description', ' ')
     this.view.print('text', '#central-nav', ' ')
     this.view.print('text', '#footer-nav', ' ')
     this.view.print('remove', '#project-title')
     this.view.print('remove', '#project-details-menu')
     this.view.print('remove', '#left')
     this.view.print('remove', '#right')
     this.view.updateClass('#colored-bg', 'edit', 'background-color', '')
     this.view.updateClass('#colored-bg', 'remove', 'slide-left')
     this.view.projectDescription()
     pageStatus = 'main-page'
   }
}
