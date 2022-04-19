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
      pageLang = x.substring(0, 2)
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
    await this.setLanguage()
    await this.controller.delegate(this.projects)
    pageStatus = 'main-page'

    projectsDB.forEach((el, i) => {
      this.projects[i] = new Project(el.title, el.id, i + 2, el.descr, el.skills, el.img, el.tech, el.date, el.resp, el.github, el.url)
      this.model.press(this.projects[i])
    })
    this.model.activeLangButton()
  }
}
