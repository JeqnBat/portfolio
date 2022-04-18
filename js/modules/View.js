/**
 * <b>DESCR:</b><br>
 * The 'View' Class acts on the viewport :
 *  animates; display, hide DIVs; change colors; etc.
 *
 * @constructor
 */
export default class View {
  constructor() {
    this.$ = (id) => {
      return document.querySelector(id)
    }
    this.$All = (id) => {
      return document.querySelectorAll(id)
    }
    this.write = (id, text) => {
      this.$(id).innerHTML = text
    }
  }
// ANIMATE () _____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Adds a CSS class to a DOM element to make it fade in
   *
   * @method
   * @param {string} element DOM element to perform fade-in on
   * @param {string} ms animation speed in MS
   * @param {string} delay animation delay in MS
   */
  animate(element, ms, delay, animation) {
    element.style.animation = ''
    setTimeout(() => {
      element.setAttribute('style', `animation: ${ms}s ease-in-out ${delay} ${animation}`)
    }, 10)
  }
// LANG BUTTONS () ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Manages lang buttons behaviour
   * 
   * @method
   */
  langButtons() {
    const langButtons = this.$All('.fr-engl')
    langButtons.forEach((el) => {
      el.classList.add('enters')
    })
  }
// PROJECT () _____________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Gets empty DOM from 'logoclick' & fills it in w/ all the
   * necessary nodes & classes to build the main-page.
   *
   * @method
   * @param {string} markedMiniature HTML template marked by model & rdy to print
   * @param {object} origin the project w/ properties to print on the page
   * @param {string} markedFooterNav HTML template marked by model & rdy to print
   */
  project(markedMiniature, origin, markedFooterNav) {
    this.$('#central-nav').insertAdjacentHTML('beforeend', markedMiniature)
    this.$('#central-nav').lastChild.style.backgroundImage = layout === 'mobile' ? `url("${origin.img.resp}")` : `url("${origin.img.mini}")`
    this.$('#footer-nav').insertAdjacentHTML('beforeend', markedFooterNav)
  }
// PORTFOLIO'S DESCRIPTION () _____________________________ */
  portfolioDescription() {
    this.write('#descr', lang === 'fr' ? descr.FR : descr.EN)
    this.write('#right-descr', lang === 'fr' ? pastAndPresentDescr.FR : pastAndPresentDescr.EN)
  }
// VALIDATION DATE () _____________________________________ */
  validationDate(origin) {
    origin.forEach((el, i) => {
      this.write(`#val${origin[i].id}`, `#val${origin[i].id}`, lang === 'fr' ? validation.FR : validation.EN)
      this.write(`#date${origin[i].id}`, `#date${origin[i].id}`, lang === 'fr' ? origin[i].date.FR : origin[i].date.EN)
    })
  }
// ACTIVE FR () ___________________________________________ */
  activeFR() {
    this.$('#fr').classList.add('lang-button-active')
    this.$('#en').classList.remove('lang-button-active')
  }
// ACTIVE EN () ___________________________________________ */
  activeEN() {
    this.$('#en').classList.add('lang-button-active')
    this.$('#fr').classList.remove('lang-button-active')
  }
// NAV SQUARE ACTIVE () ___________________________________ */
  miniatureActive(origin) {
    this.$(`#footerNav${origin.id}`).classList.add('active')
  }
// NAV SQUARE INACTIVE () _________________________________ */
  miniatureInactive(origin) {
    this.$(`#footerNav${origin.id}`).classList.remove('active')
  }
// SHOW ARROWS () _________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Displays arrows on the viewport sides in order to navigate
   * through next / previous project details.
   *
   * @method
   */
  showArrows() {
    this.$('#central-nav').insertAdjacentHTML('afterbegin', leftArrow)
    this.$('#central-nav').insertAdjacentHTML('beforeend', rightArrow)
 
    if (pageStatus.includes('8')) {
      this.$('#right').remove()
      this.$('#snapshots').classList.add('right')
    } else if (pageStatus.includes('2')) {
      this.$('#left').remove()
      this.$('#skills').classList.add('left')
    }
  }
// PROJECT DETAILS () _____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Cleans the DOM from central nav then prints new nodes w/
   * content coming from the projects object.
   *
   * @method
   * @param {object} origin the project w/ properties to print on the page
   * @param {string} mobileDiv HTML template marked by model & rdy to print
   * @param {string} desktopDiv HTML template marked by model & rdy to print
   * @param {string} tabletDiv HTML template marked by model & rdy to print
   */
  projectDetails(origin, mobileDiv, desktopDiv, tabletDiv) {
    // 1. Project's description 
    this.write('#descr', lang === 'fr' ? origin.descr.FR : origin.descr.EN)
    this.$('#right-descr').insertAdjacentHTML('beforeend', projectTitleTemplate)
    this.write('#project-title', origin.title)
    // 2. Central nav DIV */
    this.write('#central-nav', skillsTemplate)
    // 3. Project's skills
    this.$('#skills-title').insertAdjacentHTML('beforeend', lang === 'fr' ? skills.FR : skills.EN)
    origin.skills.FR.forEach((el, i) => {
      let skills = this.$('#skills-list')
      skills.insertAdjacentHTML('beforeend', `<li>${lang === 'fr' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
    })
    // 4. Project's screen shots
    this.$('#central-nav').insertAdjacentHTML('beforeend', snapshots)
    // Mobile
    this.$('#snapshots').insertAdjacentHTML('beforeend', mobileDiv)
    this.$('#mobile').insertAdjacentHTML('afterbegin', mobileWidthTemplate)
    // Desktop
    this.$('#snapshots').insertAdjacentHTML('beforeend', desktopDiv)
    this.$('#desktop').insertAdjacentHTML('afterbegin', desktopWidthTemplate)
    // Tablet
    this.$('#snapshots').insertAdjacentHTML('beforeend', tabletDiv)
    this.$('#tablet').insertAdjacentHTML('afterbegin', tabletWidthTemplate)
    // 5. Footer w/ project details
    this.$('#project-details-menu').insertAdjacentHTML('afterbegin', detailsMenuTemplate)
    this.$('#responsive').insertAdjacentHTML('beforeend', `${origin.resp === true ? checkBox.true : checkBox.false}`)
    this.write('#page-details-date', `<p>${lang === 'fr' ? validation.FR : validation.EN}</p><p>${lang === 'fr' ? origin.date.FR : origin.date.EN}</p>`)
    this.$('#projects-github').insertAdjacentHTML('beforeend', `<a href="${origin.git}" target="blank">GITHUB</h6>`)

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
    const techIconsNames = Object.keys(techIcons)
    for (let i = 0; i < origin.tech.length; i++) {
      techIconsNames.forEach(el => {
        if (origin.tech[i] == el) {
          let markedTemplate = techIconTemplate
            .replace(/xxxURL/g, `${techIcons[el]}`)
            .replace(/xxx/g, `${origin.tech[i]}`)
          this.$('.bottom-menu').insertAdjacentHTML('beforeend', markedTemplate)
        }
      })
    }
  }
// TO MAIN PAGE () ________________________________________ */
  toMainPage() {
    if (firstClick) {
      this.$('#slider').classList.add('slider-down')
      setTimeout(() => {
        this.animate(this.$('#presentation'), '800', '.1s', 'fade-in')
        this.animate(this.$('#central-nav'), '800', '', 'fade-in')
      }, 300)
      firstClick = false
    } else {
      this.$('#slider').classList.add('slider-down')
    }
  }
// TO PROJECT DETAILS () __________________________________ */
  toProjectDetails() {
    this.write('#right-descr', '')
    this.$('#central-nav').style.animation = ''
    this.$('#central-nav').style.removeProperty('opacity')
    this.animate(this.$('#presentation'), '800', '0.1s', 'fade-in')
    this.animate(this.$('#project-details-menu'), '800', '0.2s', 'fade-in')
  }
// PROJECT TO PROJECT () __________________________________ */
  fromProjectToProject() {
    this.write('#right-descr', '')
    this.write('#project-details-menu', '')
    this.animate(this.$('#presentation'), '700', '0.3s', 'fade-in')
    if (right) {
      this.animate(this.$('#central-nav'), '600', '', 'slide-left')
    } else {
      this.animate(this.$('#central-nav'), '600', '', 'slide-right')
    }
    this.animate(this.$('#project-details-menu'), '600', '0.2s', 'fade-in')
  }
// BACK TO MAIN PAGE () ___________________________________ */
  backToMainPage() {
    this.write('#descr','')
    this.write('#central-nav','')
    this.write('#footer-nav','')
    this.write('#project-details-menu', '')
    this.$('#project-title').remove()
    if(this.$('#left')) {
      this.$('#left').remove()
    }
    if (this.$('#right')) {
      this.$('#right').remove()
    }
    this.$('#central-nav').style.opacity = '0'
    this.animate(this.$('#presentation'), '800', '0.1s', 'fade-in')
    this.animate(this.$('#central-nav'), '800', '', 'fade-in')
  }
// TO ABOUT ME () _________________________________________ */
  toAboutMe() {
    let langSwitch = this.$All('#header span')
    langSwitch.forEach(span => {
      span.remove()
      this.$('#about-me-title header').insertAdjacentHTML('beforeend', span.outerHTML)
    })
    this.$('#slider').classList.add('slider-down-2')
    this.$('#about-me-details').classList.add('appears')
    this.$('#about-me-details').insertAdjacentHTML('beforeend', bioTemplate)
    this.write('#bio', `${lang === 'fr' ? bio.FR : bio.EN}`)
  }
// BACK FROM ABOUT ME () __________________________________ */  
  backFromAboutMe() {
    setTimeout(() => {
      this.animate(this.$('#presentation'), '800', '0.1s', 'fade-in')
      this.$('#bio').remove()
    }, 200)
    let langSwitch = this.$All('#about-me-title span')
    langSwitch.forEach(span => {
      span.remove()
      this.$('#header header').insertAdjacentHTML('beforeend', span.outerHTML)
    })
    this.$('#slider').classList.remove('slider-down-2')
    this.$('#about-me-details').classList.remove('appears')
  }
// BACK TO TITLE () _______________________________________ */
  backToTitle() {
    this.$('#slider').classList.remove('slider-down')
  }
}
