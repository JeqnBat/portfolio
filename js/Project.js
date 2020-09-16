/**
 * <b>DESCR:</b><br>
 * The 'Project' class regroups all the aspects of a project
 * that I want to display on the website.
 *
 * @constructor
 *
 * @param {title} string the project's name
 * @param {id} number use the project's index as an ID
 * @param {descr} string project's introduction written both in EN & FR
 * @param {img} array 4 entries = 4 links to 4 screenshots of the project under different viewport formats
 * @param {validation} string project's validation date
 * @param {color} string the main DIV's background color
 * @param {tech} array links to icons reprensenting technologies (css3, jQuery, WordPress, etc.)
 * @param {responsive} boolean Is reponsive, TRUE || is not responsive, FALSE
 * @param {github} string link to the project's repository on github
 */
class Project {
  constructor(title, number, descr, img, date, color, icons, resp, github) {
    this.title = title
    this.id = number
    this.descr = descr
    this.img = img
    this.date = date
    this.color = color
    this.icons = icons
    this.resp = resp
    this.git = github
  }
// SLIDE-UP 100% __________________________________________ */
}
