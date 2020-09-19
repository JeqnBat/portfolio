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
  switchTo(project) {
    let selector = $(document).find(`[item=lang]`)
    for (let i = 0; i < selector.length; i++) {
     switch (selector[i].id) {
      case 'descr':
        this.view.print('text', '#descr', lang == 'FR' ? descr.FR : descr.EN)
        break
      case `val${i}`:
      for (let j = 0; j < project.length; j++) {
        this.view.print('text', `#val${project[j].id}`, lang == 'FR' ? validation.FR : validation.EN)
        this.view.print('text', `#date${project[j].id}`, lang == 'FR' ? project[j].date.FR : project[j].date.EN)
      }
      break
     }
   }

   // NAV BUTTONS
   switch (lang) {
     case 'FR':
       this.view.updateClass(`#FR`, 'add', 'lang-button-active')
       this.view.updateClass('#EN', 'remove', 'lang-button-active')
       break
     default:
       this.view.updateClass(`#EN`, 'add', 'lang-button-active')
       this.view.updateClass('#FR', 'remove', 'lang-button-active')
       break
   }
   this.view.fadeIn(selector)
  }
// TEMPLATE MARKER ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes a template from templates.js
   * Marks it down w/ IDs
   * Prints it w/ view.print().
   *
   * @method
   * @param {object} origin the object whose properties will be printed as markers
   */
  markThenPrint(origin) {
     let that = this
     switch(pageStatus) {
       case 'main-page':
         let markedMiniature = miniature.replace(/xxxid/g, `${origin.id}`).replace(/xxxtitle/g, `${origin.title}`)
         let markedBottomNav = bottomNav.replace(/xxxid/g, `${origin.id}`)
         that.view.print('div', '#central-nav', markedMiniature)
         that.view.updateClass('#central-nav', 'add', 'enters')
         that.view.updateClass(`[item="OCP#${origin.id}"]`, 'edit', 'background-image', `url("${origin.img.mini}")`)
         that.view.print('div', '#footer-nav', markedBottomNav)
       break
       case 'project-details':
         that.getDetails(origin)
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
   * @param {color} string the project's associated color
   * @param {id} string the project's ID
   */
  focusMiniature(color, id) {
    this.view.updateClass('#colored-bg', 'add', `${color}`)
    this.view.updateClass('#colored-bg', 'add', 'slide-left')
    this.view.updateClass(`[item="OCP#${id}"]`, 'edit', 'opacity', '1')
    this.view.updateClass(`.${id}`, 'add', 'slide-down')
  }
  looseFocus(color, id) {
    this.view.updateClass('#colored-bg', 'remove', `${color}`)
    this.view.updateClass('#colored-bg', 'remove', 'slide-left')
    this.view.updateClass(`[item="OCP#${id}"]`, 'edit', 'opacity', '.9')
    this.view.updateClass(`.${id}`, 'remove', 'slide-down')
  }
// GET PROJECT'S DETAILS __________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Triggered by 'miniatureClick()' or 'bottomNavClick()'
   * Updates the DOM w/ new elements to display details
   * from the selected project.
   *
   * @method
   * @param {project} object the project's object w/ all its properties
   */
   getDetails(project) {
     this.view.print('text', '#central-nav', ' ')
     this.view.print('text', `#bottomNav${project.id}`, '🔲')
     this.view.print('text', '#descr', lang == 'FR' ? project.descr.FR : project.descr.EN)

     this.view.print('div', '#presentation', projectTitle)
     this.view.print('text', '#project-title', project.title)

     this.view.print('text', '#central-nav', detailsTemplate)
     // Prints project's goals
     for (let i = 0; i < project.skills.FR.length; i++) {
       this.view.print('div', '#skills-list', `<li>${lang == 'FR' ? project.skills.FR[i] : project.skills.EN[i]}</li>`)
     }
     // Prints IMG
     let mobileDiv  = screenShotTemplate.replace(/layout/g, 'mobile').replace(/imgFile/g, `${project.img.mobile}`).replace(/xxx/g, '108').replace(/yyy/g, '202')
     let desktopDiv = screenShotTemplate.replace(/layout/g, 'desktop').replace(/imgFile/g, `${project.img.desktop}`).replace(/xxx/g, '512').replace(/yyy/g, '271')
     let tabletDiv  = screenShotTemplate.replace(/layout/g, 'tablet').replace(/imgFile/g, `${project.img.tablet}`).replace(/xxx/g, '234').replace(/yyy/g, '311')
     // mobile
     this.view.print('div', '#central-nav', mobileDiv)
     this.view.print('div', `#mobile`, mobileWidth)
     // desktop
     this.view.print('div', '#central-nav', desktopDiv)
     this.view.print('div', `#desktop`, desktopWidth)
     // tablet
     this.view.print('div', '#central-nav', tabletDiv)
     this.view.print('div', `#tablet`, tabletWidth)

     pageStatus = 'project-details'
   }
}
