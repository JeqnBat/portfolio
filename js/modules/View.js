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
// PORTFOLIO'S DESCRIPTION () _____________________________ */
portfolioDescription() {
  this.write('#descr', pageLang === 'fr' ? textFeed.descr.FR : textFeed.descr.EN)
  this.write('#right-descr', pageLang === 'fr' ? textFeed['right-descr'].FR : textFeed['right-descr'].EN)
}
// VALIDATION DATE () _____________________________________ */
validationDate(origin) {
  this.write(`#validation-${origin.id}`, pageLang === 'fr' ? textFeed.validation.FR : textFeed.validation.EN)
  this.write(`#date-${origin.id}`, pageLang === 'fr' ? origin.date.FR : origin.date.EN)
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
  this.$(`#footerNav${origin.nb}`).classList.add('active')
}
// NAV SQUARE INACTIVE () _________________________________ */
miniatureInactive(origin) {
  this.$(`#footerNav${origin.nb}`).classList.remove('active')
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

    this.portfolioDescription()
    this.validationDate(origin)
  }
// PROJECT DESCRIPTION () _________________________________ */
  projectDescr(origin) {
    if (this.$('#skills-list')) {
      this.write('#skills-list', '')
    }
    this.write(`#descr`, pageLang === 'fr' ? origin.descr.FR : origin.descr.EN)
    this.write('#skills-title', pageLang === 'fr' ? textFeed["skills-title"].FR : textFeed["skills-title"].EN)
    origin.skills.FR.forEach((el, i) => {
      this.$('#skills-list').insertAdjacentHTML('beforeend', `<li>${pageLang === 'fr' ? origin.skills.FR[i] : origin.skills.EN[i]}</li>`)
    })
    this.write('#page-details-date', `<p>${pageLang === 'fr' ? origin.date.FR : origin.date.EN}</p>`)
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
    this.write('#right-descr', projectTitleTemplate)
    this.write('#project-title', origin.title)

    this.write('#central-nav', skillsTemplate)
    this.$('#central-nav').insertAdjacentHTML('beforeend', snapshots)
    
    this.$('#snapshots').insertAdjacentHTML('beforeend', mobileDiv)
    this.$('#mobile').insertAdjacentHTML('afterbegin', mobileWidthTemplate)
    
    this.$('#snapshots').insertAdjacentHTML('beforeend', desktopDiv)
    this.$('#desktop').insertAdjacentHTML('afterbegin', desktopWidthTemplate)
    
    this.$('#snapshots').insertAdjacentHTML('beforeend', tabletDiv)
    this.$('#tablet').insertAdjacentHTML('afterbegin', tabletWidthTemplate)
    
    this.$('#project-details-menu').insertAdjacentHTML('afterbegin', detailsMenuTemplate)
    this.$('#responsive').insertAdjacentHTML('beforeend', `${origin.resp === true ? checkBox.true : checkBox.false}`)
    this.$('#projects-github').insertAdjacentHTML('beforeend', `<a href="${origin.git}" target="blank">GITHUB</h6>`)
    
    this.projectDescr(origin)
    this.findIcon(origin)
    this.showArrows()
  }
// BIO CONTACT () _________________________________________ */
bioContact() {
  this.write('#bio', `${pageLang === 'fr' ? textFeed.bio.FR : textFeed.bio.EN}`)
  this.write('#contact-me', `${pageLang === 'fr' ? textFeed['contact-me'].FR : textFeed['contact-me'].EN}`)
}
// TRANSITIONS ____________________________________________ */
// Home Screen > Main Page
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
// Main Page > Project Details
  toProjectDetails() {
    this.write('#right-descr', '')
    this.$('#central-nav').style.animation = ''
    this.$('#central-nav').style.removeProperty('opacity')
    this.animate(this.$('#presentation'), '800', '0.1s', 'fade-in')
    this.animate(this.$('#project-details-menu'), '800', '0.2s', 'fade-in')
  }
// Project Details > Project Details
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
// Project Details > Main Page
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
// Main Page || Project Details > About Me
  toAboutMe() {
    if (this.$('#bio-container')) {
      this.$('#bio-container').remove()
    }
    const langSwitch = this.$All('#header span')
    langSwitch.forEach(span => {
      span.remove()
      this.$('#about-me-title header').insertAdjacentHTML('beforeend', span.outerHTML)
    })
    this.$('#slider').classList.add('slider-down-2')
    this.$('#about-me-details').insertAdjacentHTML('beforeend', bioTemplate)
    this.$('#bio-container').insertAdjacentHTML('beforeend', contactButton)
    this.$('.portrait').classList.add('show')
    this.bioContact()
  }
// About Me > Main Page || Project Details 
  backFromAboutMe() {
    const langSwitch = this.$All('#about-me-title span')
    langSwitch.forEach(span => {
      span.remove()
      this.$('#header header').insertAdjacentHTML('beforeend', span.outerHTML)
    })
    this.$('.portrait').classList.remove('show')
    this.$('#slider').classList.remove('slider-down-2')
    setTimeout(() => {
      this.animate(this.$('#presentation'), '800', '0.1s', 'fade-in')
      this.$('#bio').remove()
    }, 200)
  }
// Main Page > Home Screen
  backToTitle() {
    this.$('#slider').classList.remove('slider-down')
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
   * @param {string} animation name of the animation
   */
   animate(element, ms, delay, animation) {
    element.style.animation = ''
    setTimeout(() => {
      element.setAttribute('style', `animation: ${ms}s ease-in-out ${delay} ${animation}`)
    }, 10)
  }
}