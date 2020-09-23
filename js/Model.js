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
// SWITCH LANGUAGE ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Selects all the DOM elements containing a "lang" item
   * Stores them in 'selector' variable
   * Repaints them all w/ the language defined by 'controller.langClick()'
   *
   * @method
   * @param {object} project the project w/ all its properties
   */
  switchTo(origin) {
    let selector
    let index = parseInt(this.identify('langDetails', pageStatus), 10) - 2
    // For each of these DIVs, IF MAIN PAGE:
    if (pageStatus == 'main-page') {
      // Stores all the DIVs marked w/ a 'lang' item
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
     // Stores all the DIVs marked w/ a 'lang' item
     selector = $(document).find(`[item=lang]`)

     for (let i = 0; i < selector.length; i++) {
       switch (selector[i].id) {
         case 'descr':
           this.view.projectDescription(origin[index])
         break
         case 'skills-list':
           this.view.print('text', '#skills-list', ' ')
           for (let i = 0; i < origin[index].skills.FR.length; i++) {
             this.view.print('div', '#skills-list', `<li>${lang == 'FR' ? origin[index].skills.FR[i] : origin[index].skills.EN[i]}</li>`)
           }
         break
         case 'page-details-date':
           this.view.print('text', '#page-details-date', `<h6>${lang == 'FR' ? validation.FR : validation.EN}</h6><h6>${lang == 'FR' ? origin[index].date.FR : origin[index].date.EN}</h6>`)
         break
       }
     }
   }
   // NAV BUTTONS
   switch (lang) {
     case 'FR':
       this.view.activeFR()
       break
     default:
       this.view.activeEN()
       break
   }
   this.view.fadeIn(selector)
  }
// IDENTIFY WHICH PROJECT IS TARGETED _____________________ */
  /**
   * <b>DESCR:</b><br>
   * Use this method before firing events w/ 'Controller'.
   * It will retrieve & return the targeted project's instance.
   *
   * @method
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
   * Scans 'pageStatus' to determine which part of the DOM
   * should be displayed.
   *
   * Marks it down w/ IDs
   * Prints it w/ view.print().
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
   */
  markThenPrint(origin) {
     switch(pageStatus) {
       case 'main-page':
         let markedMiniature = miniatureTemplate
                                .replace(/xxxid/g, `${origin.id}`)
                                .replace(/xxxtitle/g, `${origin.title}`)
         let markedfooterNav = footerNavTemplate
                                .replace(/xxxid/g, `${origin.id}`)
         this.view.mainPage(markedMiniature, origin, markedfooterNav)
       break
       case 'project-details':
         let mobileDiv  = screenShotTemplate
                          .replace(/layout/g, 'mobile')
                          .replace(/imgFile/g, `${origin.img.mobile}`)
                          .replace(/color/g, `${origin.color}`)
                          .replace(/xxx/g, '108')
                          .replace(/yyy/g, '202')
         let desktopDiv = screenShotTemplate
                          .replace(/layout/g, 'desktop')
                          .replace(/imgFile/g, `${origin.img.desktop}`)
                          .replace(/color/g, `${origin.color}`)
                          .replace(/xxx/g, '512')
                          .replace(/yyy/g, '271')
         let tabletDiv  = screenShotTemplate
                          .replace(/layout/g, 'tablet')
                          .replace(/imgFile/g, `${origin.img.tablet}`)
                          .replace(/color/g, `${origin.color}`)
                          .replace(/xxx/g, '234')
                          .replace(/yyy/g, '311')
         this.view.transition(origin)
         this.view.projectDetails(origin, mobileDiv, desktopDiv, tabletDiv)
         pageStatus = `project-details${origin.id}`
       break
     }
   }
// REFRESH PAGE AFTER MINIATURE MOUSEOVER _________________ */
  /**
   * <b>DESCR:</b><br>
   * Sets new bg-color to '#colored-bg' & triggers slide-left
   * Display miniature's details.
   * Second method does the exact opposite.
   *
   * @method
   * @param {object} project the project w/ all its properties
   */
  focusMiniature(project) {
    switch(pageStatus) {
      case 'main-page':
        this.view.OverScreenDown(project)
      break
      case `page-details${this.identify('langDetails', pageStatus)}`:
        return
      break
    }
  }
  looseFocus(project) {
    switch(pageStatus) {
      case 'main-page':
        this.view.OverScreenUp(project)
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
   * Sets new bg-color to '#colored-bg' & triggers slide-left
   * Display miniature's details.
   * Second method does the exact opposite.
   *
   * @method
   * @param {color} string the project's associated color
   * @param {id} string the project's ID
   */
   cleanDetails() {
     this.view.print('text', '#description', ' ')
     this.view.print('text', '#central-nav', ' ')
     this.view.print('text', '#footer-nav', ' ')
     this.view.print('remove', '#project-title')
     this.view.print('remove', '#project-details-menu')
     this.view.updateClass('#colored-bg', 'edit', 'background-color', '')
     this.view.updateClass('#colored-bg', 'remove', 'slide-left')
     this.view.projectDescription()
     pageStatus = 'main-page'
   }
}
