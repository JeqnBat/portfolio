/**
 * <b>DESCR:</b><br>
 * 'Page' class is the program's main container.
 * It owns all the other classes & sets parameters
 * for the entire webpage (ex: language)
 *
 * @constructor
 */
class Page {
  constructor() {
    this.model = new Model(this.view)
    this.controller = new Controller(this.model)
    this.projects = []
    this.lang = ''
  }
// SET PAGE'S LANGUAGE ____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes either :
   *  a language string code from user's browser
   *    OR
   *  a language string code from event listener (click on nav menu FR | EN)
   * Updates the <HTML> language's attribute w/ the new value
   * Stores the new value in 'this.lang'
   *
   * @method
   * @param {input} string the value returned by a click on the 'FR | EN' buttons
   */
  async setLanguage() {
    return new Promise((resolve, reject) => {
      let x = navigator.language
      lang = x.substring(0, 2)
      $('html').attr('lang', x)
      resolve('language set')
    })
  }
// LOADING PAGE SQUENCE ___________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Use ASYNC to define a loading sequence as the program
   * is executed for the 1st time.
   * First get browser's language, then return it, then print
   * page's content w/ 'this.lang' parameter
   *
   * @method
   */
  async init() {
    let that = this
    await this.setLanguage()
    // uncomment to play intro
    await this.controller.delegate(this.projects)
    for (let i = 0; i < data.length; i++) {
      this.projects[i] = new Project(data[i].title, i+2, data[i].descr, data[i].skills, data[i].img, data[i].tech, data[i].date, data[i].color, data[i].resp, data[i].github, data[i].url)
      await this.model.markThenPrint(this.projects[i])
    }
    this.model.updateLang(this.projects)
    setTimeout(function() {
      that.model.view.print('remove', '#blocker')
    }, 1200)

  }
}
