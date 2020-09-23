/**
 * <b>DESCR:</b><br>
 * The 'View' Class acts on the viewport :
 *  animates; display, hide DIVs; change colors; etc.
 *
 * @constructor
 */
class View {
  constructor() {
  }
// CSS CLASS MANAGER ______________________________________ */
  /**
  * <b>DESCR:</b><br>
  * Edits, Adds & Removes any given CSS class in the DOM
  * Takes 3 entry points:
  *
  * @method
  * @param {string} nodeTarget the targeted DOM element
  * @param {string} action the action to perform
  * @param {string} classTarget the targeted CSS class
  * @param {string} value the value to update
  */
  updateClass(nodeTarget, action, classTarget, value) {
    switch(action) {
      case 'add':
        $(nodeTarget).addClass(classTarget)
        break
      case 'remove':
        $(nodeTarget).removeClass(classTarget)
        break
      case 'edit':
        $(nodeTarget).css(classTarget, value)
        break
    }
  }
// PRINT ANY CONTENT INSIDE THE DOM _______________________ */
  /**
   * <b>DESCR:</b><br>
   * Use printer to create HTML nodes & content & display them
   * inside the DOM. The printer has 4 entry points :
   *
   * @method
   * @param {string} type the content's type
   * @param {string} target the DOM node where to print content
   * @param {string} content the actual content
   */
   print(type, target, content) {
     switch(type) {
       case 'text':
        $(target).html(content)
       break
       case 'div':
        $(target).append(content)
       break
       case 'divBefore':
        $(target).prepend(content)
       break
       case 'remove':
        $(target).remove()
       break
     }
   }
// FADE IN ________________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Adds a CSS class to a DOM element to make it fade in
   *
   * @method
   * @param {string} id the DOM element to add the class to
   */
  fadeIn(id) {
    let that = this
      this.updateClass(id, 'add', 'fade-in')
    setTimeout(function() {
      that.updateClass(id, 'remove', 'fade-in')
    }, 600)
  }
// DISPLAY MAIN PAGE LAYOUT _______________________________ */
  /**
   * <b>DESCR:</b><br>
   * Gets empty DOM from 'logoclick' & fills it in w/ all the
   * necessary nodes & classes to build the main-page.
   *
   * @method
   * @param {string} markedMiniature HTML template marked by model & rdy to print
   * @param {object} origin the project w/ properties to print on the page
   * @param {string} markedfooterNav HTML template marked by model & rdy to print
   */
   mainPage(markedMiniature, origin, markedfooterNav) {
     this.updateClass('.fr-engl', 'add', 'enters')
     this.print('div', '#central-nav', markedMiniature)
     this.updateClass('#central-nav', 'add', 'enters')
     this.updateClass(`[item="OCP#${origin.id}"]`, 'edit', 'background-image', `url("${origin.img.mini}")`)
     this.print('div', '#footer-nav', markedfooterNav)
   }
   projectDescription(origin) {
     this.print('text', '#descr', lang == 'FR' ? descr.FR : descr.EN) // description originale globale
   }
   /* ATTENTION, ON ENVOIE TOUS LES PROJETS DANS CETTE METHODE PAS UN SEUL */
   validationDate(origin) {
     for (let j = 0; j < origin.length; j++) {
       this.print('text', `#val${origin[j].id}`, lang == 'FR' ? validation.FR : validation.EN)
       this.print('text', `#date${origin[j].id}`, lang == 'FR' ? origin[j].date.FR : origin[j].date.EN)
     }
   }
   activeFR() {
     this.updateClass(`#FR`, 'add', 'lang-button-active')
     this.updateClass('#EN', 'remove', 'lang-button-active')
   }
   activeEN() {
     this.updateClass(`#EN`, 'add', 'lang-button-active')
     this.updateClass('#FR', 'remove', 'lang-button-active')
   }
   OverScreenDown(project) {
     this.updateClass('#colored-bg', 'edit', 'background-color', `${project.color}`)
     this.updateClass('#colored-bg', 'add', 'slide-left')
     this.updateClass(`[item="OCP#${project.id}"]`, 'edit', 'opacity', '1')
     this.updateClass(`.${project.id}`, 'add', 'slide-down')
     this.updateClass(`#footerNav${project.id}`, 'add', 'active')
   }
   OverScreenUp(project) {
     this.updateClass('#colored-bg', 'edit', 'background-color', '')
     this.updateClass('#colored-bg', 'remove', 'slide-left')
     this.updateClass(`[item="OCP#${project.id}"]`, 'edit', 'opacity', '.9')
     this.updateClass(`.${project.id}`, 'remove', 'slide-down')
     this.updateClass(`#footerNav${project.id}`, 'remove', 'active')
   }
// DISPLAY PROJECT'S DETAILS PAGE _________________________ */
 /**
  * <b>DESCR:</b><br>
  * Cleans the DOM from central nav then prints new nodes w/
  * content coming from the projects objects.
  *
  * @method

  * @param {object} origin the project w/ properties to print on the page
  * @param {string} mobileDiv HTML template marked by model & rdy to print
  * @param {string} desktopDiv HTML template marked by model & rdy to print
  * @param {string} tabletDiv HTML template marked by model & rdy to print
  */
   projectDetails(origin, mobileDiv, desktopDiv, tabletDiv) {
     this.updateClass(`#footerNav${origin.id}`, 'remove', 'active')
     this.print('text', '#central-nav', ' ')
     this.print('text', '#descr', lang == 'FR' ? origin.descr.FR : origin.descr.EN)

     this.print('div', '#presentation', projectTitleTemplate)
     this.print('text', '#project-title', origin.title)

     this.print('text', '#central-nav', skillsTemplate)
     // Prints project's goals
     for (let i = 0; i < origin.skills.FR.length; i++) {
       this.print('div', '#skills-list', `<li>${lang == 'FR' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
     }
     // mobile
     this.print('div', '#central-nav', mobileDiv)
     this.print('divBefore', `#mobile`, mobileWidthTemplate)
     // desktop
     this.print('div', '#central-nav', desktopDiv)
     this.print('divBefore', `#desktop`, desktopWidthTemplate)
     // tablet
     this.print('div', '#central-nav', tabletDiv)
     this.print('divBefore', `#tablet`, tabletWidthTemplate)
     // bottom "details" nav
     this.print('divBefore', '#footer', detailsMenuTemplate)
     this.print('div', '#responsive', '<div class="check-box"></div>')
     this.print('text', '#page-details-date', `<h6>${lang == 'FR' ? validation.FR : validation.EN$}</h6><h6>${lang == 'FR' ? origin.date.FR : origin.date.EN}</h6>`)
     this.findIcon(origin)
   }
// FIND & PRINT PROJECT'S SPECIFIC TECH ICONS _____________ */
   /**
    * <b>DESCR:</b><br>
    * Compares the 'techIcons' object keys w/ the project's 'tech'
    * array values.
    * Prints one icon if a match is found.
    *
    * @method
    * @param {origin} object the project's object w/ all its properties
    */
   findIcon(origin) {
     let techIconsNames = Object.keys(techIcons)

     for (let i = 0; i < origin.tech.length; i++) {
       techIconsNames.forEach(element => {
         if (origin.tech[i] == element) {
           let markedTemplate = techIconTemplate
                                .replace(/xxxURL/g, `${techIcons[element]}`)
                                .replace(/xxx/g, `${origin.tech[i]}`)
           this.print('div', '#tech', markedTemplate)
         }
       })
     }
   }
// TRANSITION BETWEEN PROJECT DETAILS _____________________ */
  /**
   * <b>DESCR:</b><br>
   * Smoothly handles the DOM in transition between 2 PROJECTS
   * print.
   *
   * @method
   * @param {object} origin the project's class, necessary to update BG
   */
  transition(origin) {
    this.print('remove', '#project-details-menu')
    this.print('remove', '#description')
    this.print('remove', '#project-title')
    this.updateClass('#colored-bg', 'edit', 'background-color', `${origin.color}`)
    // this.print('text', '#presentation', '')
    // this.print('remove', '#skills-list')
  }

}
