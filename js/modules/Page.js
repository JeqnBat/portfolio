import View from './View.js'
import Model from './Model.js'
import Controller from './Controller.js'
import Project from './Project.js'
/**
 * <b>DESCR:</b><br>
 * 'Page' class is the program's main container.
 * It owns all the other classes & sets parameters
 * for the entire webpage (ex: language)
 *
 * @constructor
 */
export default class Page {
  constructor() {
    this.view = new View
    this.model = new Model(this.view)
    this.controller = new Controller(this.model)
    this.projects = []
  }
  // SET LANGUAGE () ________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes either :
   *  a language string code from user's browser
   *    OR
   *  a language string code from event listener (click on nav menu FR | EN)
   *  Updates the <HTML> language's attribute w/ the new value
   *
   * @method
   */
  async setLanguage() {
    return new Promise((resolve, reject) => {
      let htmlTag = document.querySelector('html')
      let x = navigator.language
      lang = x.substring(0, 2)
      htmlTag.setAttribute('lang', x)
      resolve('language set')
    })
  }
  // INIT () ________________________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Uses ASYNC to define a loading sequence as the program
   * is executed for the 1st time.
   * First gets browser's language, then returns it, then prints
   * page's content.
   *
   * @method
   */
  async init() {
    let that = this
    await this.setLanguage()
    await this.controller.delegate(this.projects)
    this.view.langButtons()
    pageStatus = 'main-page'
    for (let i = 0; i < data.length; i++) {
      this.projects[i] = new Project(data[i].title, i + 2, data[i].descr, data[i].skills, data[i].img, data[i].tech, data[i].date, data[i].color, data[i].resp, data[i].github, data[i].url)
      await this.model.press(this.projects[i])
    }
    loading = 'completed'
    this.model.updateLang(this.projects)
    // MAKES MAIN PAGE CLICKABLE
    setTimeout(() => {
      that.model.view.printer('remove', '#blocker')
    }, 600)
  }
}
