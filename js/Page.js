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
  }
// SET PAGE'S LANGUAGE ____________________________________ */
  /**
   * <b>DESCR:</b><br>
   * Takes either :
   *  a language string code from user's browser
   *    OR
   *  a language string code from event listener (click on nav menu FR | EN)
   * Updates the <HTML> language's attribute w/ the new value
   *
   * @method
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
   * First get browser's language, then return it, then printer
   * page's content.
   *
   * @method
   */
  async init() {
    let that = this
    await this.setLanguage()
    await this.controller.delegate(this.projects)
    for (let i = 0; i < data.length; i++) {
      this.projects[i] = new Project(data[i].title, i+2, data[i].descr, data[i].skills, data[i].img, data[i].tech, data[i].date, data[i].color, data[i].resp, data[i].github, data[i].url)
      await this.model.press(this.projects[i])
    }
    loading = 'completed'
    this.model.updateLang(this.projects)
    // MAKES MAIN PAGE CLICKABLE
    setTimeout(() => {
      that.model.view.printer('remove', '#blocker')
    }, 1300)
  }

}
