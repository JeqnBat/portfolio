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
// printer ANY CONTENT INSIDE THE DOM _______________________ */
  /**
   * <b>DESCR:</b><br>
   * Use printerer to create HTML nodes & content & display them
   * inside the DOM. The printerer has 3 entry points :
   *
   * @method
   * @param {string} type the content's type
   * @param {string} target the DOM node where to printer content
   * @param {string} content the actual content
   */
   printer(type, target, content) {
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
   * @param {string} markedMiniature HTML template marked by model & rdy to printer
   * @param {object} origin the project w/ properties to printer on the page
   * @param {string} markedfooterNav HTML template marked by model & rdy to printer
   */
   mainPage(markedMiniature, origin, markedfooterNav) {
     let that = this
     this.updateClass('.fr-engl', 'add', 'enters')
     this.printer('div', '#central-nav', markedMiniature)
     this.updateClass(`[item="OCP#${origin.id}"]`, 'edit', 'background-image', layout == 'mobile' ? `url("${origin.img.resp}")` : `url("${origin.img.mini}")` )
     this.printer('div', '#footer-nav', markedfooterNav)
     setTimeout(function() {
       that.updateClass(`[item="OCP#${origin.id}"]`, 'add', 'appears')
       that.updateClass('#footer-nav', 'add', 'appears')
       that.updateClass('#central-nav', 'add', 'appears')
       that.updateClass('.sidekick', 'add', 'appears')
     }, 30)
   }
   projectDescription() {
     this.printer('text', '#descr', lang == 'fr' ? descr.FR : descr.EN)
   }
   validationDate(origin) {
     for (let j = 0; j < origin.length; j++) {
       this.printer('text', `#val${origin[j].id}`, lang == 'fr' ? validation.FR : validation.EN)
       this.printer('text', `#date${origin[j].id}`, lang == 'fr' ? origin[j].date.FR : origin[j].date.EN)
     }
   }
   activeFR() {
     this.updateClass(`#fr`, 'add', 'lang-button-active')
     this.updateClass('#en', 'remove', 'lang-button-active')
     this.updateClass(`#fr2`, 'add', 'lang-button-active')
     this.updateClass('#en2', 'remove', 'lang-button-active')
   }
   activeEN() {
     this.updateClass(`#en`, 'add', 'lang-button-active')
     this.updateClass('#fr', 'remove', 'lang-button-active')
     this.updateClass(`#en2`, 'add', 'lang-button-active')
     this.updateClass('#fr2', 'remove', 'lang-button-active')
   }
   OverScreenDown(origin) {
     this.updateClass('#colored-bg', 'edit', 'background-color', `${origin.color}`)
     this.updateClass(`#footerNav${origin.id}`, 'add', 'active')
   }
   OverScreenUp(origin) {
     this.updateClass('#colored-bg', 'edit', 'background-color', '')
     this.updateClass(`#footerNav${origin.id}`, 'remove', 'active')
   }

// DISPLAY LEFT & RIGHT NAVIGATION ARROWS _________________ */
 /**
  * <b>DESCR:</b><br>
  * Displays arrows on the screen sides in order to navigate
  * through next / previous project details.
  *
  * @method
  * @param {object} projectsArray the projects array used to identify the last
  *                               item on 'page-details'
  */
  showArrows() {
   if (!document.getElementById('right') && !document.getElementById('left')) {
     this.printer('div', '#home', leftArrow)
     this.printer('div', '#home', rightArrow)
   } else if (document.getElementById('right') && !document.getElementById('left')) {
     this.printer('div', '#home', leftArrow)
   } else if (!document.getElementById('right') && document.getElementById('left')) {
     this.printer('div', '#home', rightArrow)
   }
   if (pageStatus.includes('8')) {
     this.printer('remove', '#right')
   } else if (pageStatus.includes('2')) {
     this.printer('remove', '#left')
   }
  }
// DISPLAY PROJECT'S DETAILS PAGE _________________________ */
 /**
  * <b>DESCR:</b><br>
  * Cleans the DOM from central nav then printers new nodes w/
  * content coming from the projects objects.
  *
  * @method
  * @param {object} origin the project w/ properties to printer on the page
  * @param {string} mobileDiv HTML template marked by model & rdy to printer
  * @param {string} desktopDiv HTML template marked by model & rdy to printer
  * @param {string} tabletDiv HTML template marked by model & rdy to printer
  */
  projectDetails(origin, mobileDiv, desktopDiv, tabletDiv) {
   this.updateClass(`#footerNav${origin.id}`, 'remove', 'active')
   this.printer('text', '#central-nav', ' ')
   this.printer('text', '#descr', lang == 'fr' ? origin.descr.FR : origin.descr.EN)

   this.printer('div', '#presentation', projectTitleTemplate)
   this.printer('text', '#project-title', origin.title)

   this.printer('text', '#central-nav', skillsTemplate)
   // printers project's goals
   for (let i = 0; i < origin.skills.FR.length; i++) {
     this.printer('div', '#skills-list', `<li>${lang == 'fr' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
   }
   this.printer('divBefore', '#skills-title', lang == 'fr' ? skills.FR : skills.EN)
   // screenshots DIV container
   this.printer('div', '#central-nav', '<div id="snapshots"></div>')
   // mobile
   this.printer('div', '#snapshots', mobileDiv)
   this.printer('divBefore', `#mobile`, mobileWidthTemplate)
   // desktop
   this.printer('div', '#snapshots', desktopDiv)
   this.printer('divBefore', `#desktop`, desktopWidthTemplate)
   // tablet
   this.printer('div', '#snapshots', tabletDiv)
   this.printer('divBefore', `#tablet`, tabletWidthTemplate)
   // bottom "details" nav
   this.printer('divBefore', '#footer', detailsMenuTemplate)
   this.printer('div', '#responsive', `${origin.resp == true ? checkBox.true : checkBox.false}`)
   this.printer('text', '#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin.date.FR : origin.date.EN}</p>`)
   this.printer('divBefore', '#projects-github', `<a href="${origin.git}" target="blank">GITHUB</h6>`)

   this.findIcon(origin)
   this.showArrows()
   // Removes 'fade-out-in' class so it can be executed again later
   let that = this
   setTimeout(() => {
     that.updateClass('#central-nav', 'remove', 'fade-out-in')
     that.updateClass('#presentation', 'remove', 'fade-out-in')
     that.updateClass('#footer', 'remove', 'fade-out-in')
   }, 400)
  }
// FIND & printer PROJECT'S SPECIFIC TECH ICONS _____________ */
  /**
   * <b>DESCR:</b><br>
   * Compares the 'techIcons' object keys w/ the project's 'tech'
   * array values.
   * printers one icon if a match is found.
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
         this.printer('div', '#tech', markedTemplate)
       }
     })
   }
  }
// TRANSITIONS ____________________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Updates DOM elements to transition from one page to another
  *
  * @method
  * @param {object} origin the project's class w/ all its properties
  */
  toProjectDetails(origin) {
    let that = this
    this.updateClass('#central-nav', 'add', 'fade-out-in')
    this.updateClass('#presentation', 'add', 'fade-out-in')
    this.updateClass('#project-title', 'add', 'fade-out-in')
    this.updateClass('#project-details-menu', 'add', 'fade-out-in')
    this.updateClass('#colored-bg', 'edit', 'background-color', `${origin.color}`)
    this.updateClass('#about-me', 'remove', 'appears')
    setTimeout(function() {
      that.printer('remove', '#project-details-menu')
      that.printer('remove', '#description')
      that.printer('remove', '#project-title')
      that.updateClass('#about-me', 'edit', 'visibility', 'hidden')
    }, 200)
  }
  backToMainPage() {
    this.printer('text', '#description', ' ')
    this.printer('text', '#central-nav', ' ')
    this.printer('text', '#footer-nav', ' ')
    this.printer('remove', '#project-title')
    this.printer('remove', '#project-details-menu')
    this.printer('remove', '#left')
    this.printer('remove', '#right')
    this.updateClass('#colored-bg', 'edit', 'background-color', '')
    this.updateClass('#about-me', 'edit', 'visibility', 'visible')
    this.projectDescription()
  }
  toAboutMe() {
    let langSwitch = $('#header span')
    this.printer('remove', langSwitch)
    this.printer('div', '#about-me-title', langSwitch)
    this.updateClass('#slider', 'add', 'slider-down-2')
    this.updateClass('#colored-bg', 'edit', 'background-color', '')
    this.updateClass('.active', 'remove', 'active')
    this.updateClass('#about-me-details', 'add', 'appears')
    this.printer('div', '#about-me-details', bioTemplate)
    this.printer('text', '#bio', `${lang == 'fr' ? bio.FR : bio.EN}`)
    this.printer('div', '#about-me-details', contactMeTemplate)
    this.printer('text', '#contact-me a', `${lang == 'fr' ? contactMe.FR : contactMe.EN}`)
  }
  backFromAboutMe() {
    let langSwitch2 = $('#about-me-title span')
    this.printer('remove', langSwitch2)
    this.updateClass('#slider', 'remove', 'slider-down-2')
    this.updateClass('#about-me-details', 'remove', 'appears')
    this.printer('div', '.w-75', langSwitch2)
    setTimeout(() => {
      this.printer('remove', '#bio')
      this.printer('remove', '#contact-me')
    }, 800)
  }
  backToTitle() {
    this.updateClass('#slider', 'remove', 'slider-down')
    this.updateClass('#colored-bg', 'edit', 'background-color', '')
    this.printer('remove', '#bio')
    this.printer('remove', '#contact-me')
  }
}
