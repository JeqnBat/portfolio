/**
 * <b>DESCR:</b><br>
 * The 'View' Class acts on the viewport :
 *  animates; display, hide DIVs; change colors; etc.
 *
 * @constructor
 */
export default class View {
  constructor() {
  }
// UPDATE CLASS () ________________________________________ */
/**
  * <b>DESCR:</b><br>
  * Edits, Adds & Removes any given CSS class in the DOM
  * Takes 3 entry points:
  *
  * @method
  * @param {string} nodeTarget the targeted DOM element
  * @param {string} action the action to perform
  * @param {string} cssProp the targeted CSS property
  * @param {string} value the value to update
  */
  updateClass(nodeTarget, action, cssProp, value) {
    let element
    if (typeof nodeTarget === 'string') {
      element = document.querySelector(nodeTarget)
    } else {
      element = nodeTarget 
    }
    switch (action) {
      case 'add':
        element.classList.add(cssProp)
        break
      case 'remove':
        element.classList.remove(cssProp)
        break
      case 'background-image':
        element.style.backgroundImage = value
        break
      case 'visibility':
        element.style.visibility = value
        break
    }
  }
  // PRINTER () _____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Use printer to create HTML nodes & content & display them
   * inside the DOM. The printerer has 3 entry points :
   *
   * @method
   * @param {string} type the content's type
   * @param {string} target the DOM node where to printer content
   * @param {string} content the actual content
   */
  printer(type, target, content) {
    let element
    if (typeof target === 'string') {
      element = document.querySelector(target)
    } else {
      element = target 
    }
    switch (type) {
      case 'text':
        element.innerHTML = content
        break
      case 'div':
        element.insertAdjacentHTML('beforeend', content)
        break
      case 'remove':
        element.remove()
        break
    }
  }
  // FADE IN () _____________________________________________ */
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
    setTimeout(function () {
      that.updateClass(id, 'remove', 'fade-in')
    }, 600)
  }
  // LANG BUTTONS () ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Manages lang buttons behaviour
   * 
   * @method
   */
  langButtons() {
    let langButtons = document.querySelectorAll('.fr-engl')
    langButtons.forEach((element) => {
      this.updateClass(element, 'add', 'enters')
    })
  }
  // PROJECTS () ____________________________________________ */
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
  projects(markedMiniature, origin, markedfooterNav) {
    this.printer('div', '#central-nav', markedMiniature)
    this.updateClass(`[item="OCP#${origin.id}"]`, 'background-image', 'n00b', layout == 'mobile' ? `url("${origin.img.resp}")` : `url("${origin.img.mini}")`)
    this.printer('div', '#footer-nav', markedfooterNav)
  }
  // PORTFOLIO'S DESCRIPTION () _____________________________ */
  portfolioDescription() {
    this.printer('text', '#descr', lang == 'fr' ? descr.FR : descr.EN)
  }
  // VALIDATION DATE () _____________________________________ */
  validationDate(origin) {
    for (let j = 0; j < origin.length; j++) {
      this.printer('text', `#val${origin[j].id}`, lang == 'fr' ? validation.FR : validation.EN)
      this.printer('text', `#date${origin[j].id}`, lang == 'fr' ? origin[j].date.FR : origin[j].date.EN)
    }
  }
  // ACTIVE FR () ___________________________________________ */
  activeFR() {
    this.updateClass(`#fr`, 'add', 'lang-button-active')
    this.updateClass('#en', 'remove', 'lang-button-active')
  }
  // ACTIVE EN () ___________________________________________ */
  activeEN() {
    this.updateClass(`#en`, 'add', 'lang-button-active')
    this.updateClass('#fr', 'remove', 'lang-button-active')
  }
  // OVER SCREEN DOWN () ____________________________________ */
  OverScreenDown(origin) {
    this.updateClass(`#footerNav${origin.id}`, 'add', 'active')
  }
  // OVER SCREEN UP () ______________________________________ */
  OverScreenUp(origin) {
    this.updateClass(`#footerNav${origin.id}`, 'remove', 'active')
  }
  // SHOW ARROWS () _________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Displays arrows on the screen sides in order to navigate
   * through next / previous project details.
   *
   * @method
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
  // PROJECT DETAILS () _____________________________________ */
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
    const firstPrint = () => {
      let lmdmf = {
        firstDiv: document.querySelector('#project-title'),
        secondDiv: document.querySelector('#project-details-menu')
      }
      return Object.values(lmdmf).every(Boolean)
    }
    if (firstPrint()) {
      this.printer('remove', '#project-title')
      this.printer('remove', '#project-details-menu')
    }
    this.printer('text', '#central-nav', ' ')
    this.printer('text', '#descr', lang == 'fr' ? origin.descr.FR : origin.descr.EN)

    this.printer('div', '#presentation', projectTitleTemplate)
    this.printer('text', '#project-title', origin.title)

    this.printer('text', '#central-nav', skillsTemplate)
    // printers project's goals
    for (let i = 0; i < origin.skills.FR.length; i++) {
      this.printer('div', '#skills-list', `<li>${lang == 'fr' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
    }
    this.printer('div', '#skills-title', lang == 'fr' ? skills.FR : skills.EN)
    // screenshots DIV container
    this.printer('div', '#central-nav', '<div id="snapshots"></div>')
    // mobile
    this.printer('div', '#snapshots', mobileDiv)
    this.printer('div', `#mobile`, mobileWidthTemplate)
    // desktop
    this.printer('div', '#snapshots', desktopDiv)
    this.printer('div', `#desktop`, desktopWidthTemplate)
    // tablet
    this.printer('div', '#snapshots', tabletDiv)
    this.printer('div', `#tablet`, tabletWidthTemplate)
    // bottom "details" nav
    this.printer('div', '#footer', detailsMenuTemplate)
    this.printer('div', '#responsive', `${origin.resp == true ? checkBox.true : checkBox.false}`)
    this.printer('text', '#page-details-date', `<p>${lang == 'fr' ? validation.FR : validation.EN}</p><p>${lang == 'fr' ? origin.date.FR : origin.date.EN}</p>`)
    this.printer('div', '#projects-github', `<a href="${origin.git}" target="blank">GITHUB</h6>`)

    this.findIcon(origin)
    this.showArrows()
  }
  // FIND ICON () ___________________________________________ */
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
  // BACK TO MAIN PAGE () ___________________________________ */
  backToMainPage() {
    pageStatus = 'main-page'
    this.printer('text', '#descr', ' ')
    this.printer('text', '#central-nav', ' ')
    this.printer('text', '#footer-nav', ' ')
    this.printer('remove', '#project-title')
    this.printer('remove', '#project-details-menu')
    if(document.querySelector('#left')) {
      this.printer('remove', '#left')
    }
    if (document.querySelector('#right')) {
      this.printer('remove', '#right')
    }
    this.portfolioDescription()
  }
  // TO ABOUT ME () _________________________________________ */
  toAboutMe() {
    console.log('??');
    pageStatus = 'about-me'
    let langSwitch = document.querySelectorAll('#header span')
    langSwitch.forEach(span => {
      this.printer('remove', span)
      this.printer('div', '#about-me-title header', span.outerHTML)
    })
    this.updateClass('#slider', 'add', 'slider-down-2')
    this.updateClass('#about-me-details', 'add', 'appears')
    this.printer('div', '#about-me-details', bioTemplate)
    this.printer('text', '#bio', `${lang == 'fr' ? bio.FR : bio.EN}`)
  }
  // BACK FROM ABOUT ME () __________________________________ */  
  backFromAboutMe() {
    let langSwitch = document.querySelectorAll('#about-me-title span')
    langSwitch.forEach(span => {
      this.printer('remove', span)
      this.printer('div', '#header header', span.outerHTML)
    })
    this.updateClass('#slider', 'remove', 'slider-down-2')
    this.updateClass('#about-me-details', 'remove', 'appears')
    setTimeout(() => {
      this.printer('remove', '#bio')
    }, 800)
    pageStatus = 'main-page'
  }
  // BACK TO TITLE () _______________________________________ */
  backToTitle() {
    this.updateClass('#slider', 'remove', 'slider-down')
    pageStatus = 'home-logo'
  }
}
