/**
 * <b>DESCR:</b><br>
 * The 'Project' class regroups all the aspects of a project
 * that I want to display on the website.
 *
 * @constructor
 *
 * @param {string} title the project's name
 * @param {id} id the project's identificator
 * @param {string} descr  project's introduction written both in EN & FR
 * @param {string} skills describes the skills involved in the project
 * @param {array} img 4 entries = 4 links to 4 screenshots of the project under different viewport formats
 * @param {array} tech links to icons representing technologies (css3, jQuery, WordPress, etc.)
 * @param {string} date project's validation date
 * @param {boolean} resp Is reponsive, TRUE || is not responsive, FALSE
 * @param {string} github link to the project's repository on github
 * @param {string} url the url of the project
 */
export default class Project {
  constructor(title, id, number, descr, skills, img, tech, date, resp, github, url) {
    this.title = title
    this.id = id
    this.nb = number
    this.descr = descr
    this.skills = skills
    this.img = img
    this.tech = tech
    this.date = date
    this.resp = resp
    this.git = github
    this.url = url
  }
}
