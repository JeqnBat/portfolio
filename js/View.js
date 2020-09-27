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
   * inside the DOM. The printer has 3 entry points :
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
   * @param {string} layout the type of layout to determine which miniature's background to display
   */
   mainPage(markedMiniature, origin, markedfooterNav) {
     let that = this
     this.updateClass('.fr-engl', 'add', 'enters')
     this.print('div', '#central-nav', markedMiniature)
     this.updateClass(`[item="OCP#${origin.id}"]`, 'edit', 'background-image', layout == 'mobile' ? `url("${origin.img.resp}")` : `url("${origin.img.mini}")` )
     this.print('div', '#footer-nav', markedfooterNav)
     setTimeout(function() {
       that.updateClass(`[item="OCP#${origin.id}"]`, 'add', 'appears')
       that.updateClass('#footer-nav', 'add', 'appears')
       that.updateClass('#central-nav', 'add', 'appears')
     }, 30)
   }
   projectDescription() {
     this.print('text', '#descr', lang == 'fr' ? descr.FR : descr.EN)
   }
   validationDate(origin) {
     for (let j = 0; j < origin.length; j++) {
       this.print('text', `#val${origin[j].id}`, lang == 'fr' ? validation.FR : validation.EN)
       this.print('text', `#date${origin[j].id}`, lang == 'fr' ? origin[j].date.FR : origin[j].date.EN)
     }
   }
   activeFR() {
     this.updateClass(`#fr`, 'add', 'lang-button-active')
     this.updateClass('#en', 'remove', 'lang-button-active')
   }
   activeEN() {
     this.updateClass(`#en`, 'add', 'lang-button-active')
     this.updateClass('#fr', 'remove', 'lang-button-active')
   }
   OverScreenDown(origin) {
     this.updateClass('#colored-bg', 'edit', 'background-color', `${origin.color}`)
     this.updateClass('#colored-bg', 'add', 'slide-left')
     this.updateClass(`#footerNav${origin.id}`, 'add', 'active')
   }
   OverScreenUp(origin) {
     this.updateClass('#colored-bg', 'edit', 'background-color', '')
     this.updateClass('#colored-bg', 'remove', 'slide-left')
     this.updateClass(`#footerNav${origin.id}`, 'remove', 'active')
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
     this.print('text', '#descr', lang == 'fr' ? origin.descr.FR : origin.descr.EN)

     this.print('div', '#presentation', projectTitleTemplate)
     this.print('text', '#project-title', origin.title)

     this.print('text', '#central-nav', skillsTemplate)
     // Prints project's goals
     for (let i = 0; i < origin.skills.FR.length; i++) {
       this.print('div', '#skills-list', `<li>${lang == 'fr' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
     }
     this.print('divBefore', '#skills-title', lang == 'fr' ? skills.FR : skills.EN)
     // screenshots DIV container
     this.print('div', '#central-nav', '<div id="snapshots"></div>')
     // mobile
     this.print('div', '#snapshots', mobileDiv)
     this.print('divBefore', `#mobile`, mobileWidthTemplate)
     // desktop
     this.print('div', '#snapshots', desktopDiv)
     this.print('divBefore', `#desktop`, desktopWidthTemplate)
     // tablet
     this.print('div', '#snapshots', tabletDiv)
     this.print('divBefore', `#tablet`, tabletWidthTemplate)
     // bottom "details" nav
     this.print('divBefore', '#footer', detailsMenuTemplate)
     this.print('div', '#responsive', `${origin.resp == true ? checkBox.true : checkBox.false}`)
     this.print('text', '#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin.date.FR : origin.date.EN}</p>`)
     this.findIcon(origin)
     this.print('divBefore', '#projects-github', `<a href="${origin.git}" target="blank">GITHUB</h6>`)

     this.print('div', '#home', leftArrow)
     this.print('div', '#home', rightArrow)
     // Removes it so it can be executed again later
     let that = this
     setTimeout(function() {
       that.updateClass('#central-nav', 'remove', 'fade-out-in')
       that.updateClass('#presentation', 'remove', 'fade-out-in')
       that.updateClass('#footer', 'remove', 'fade-out-in')
     }, 600)
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
    let that = this
    this.updateClass('#central-nav', 'add', 'fade-out-in')
    this.updateClass('#presentation', 'add', 'fade-out-in')
    this.updateClass('#project-title', 'add', 'fade-out-in')
    this.updateClass('#project-details-menu', 'add', 'fade-out-in')
    this.updateClass('#colored-bg', 'edit', 'background-color', `${origin.color}`)
    setTimeout(function() {
      that.print('remove', '#project-details-menu')
      that.print('remove', '#description')
      that.print('remove', '#project-title')
      that.print('remove', '#left')
      that.print('remove', '#right')
    }, 200)
  }

}
