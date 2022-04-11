/**
 * <b>DESCR:</b><br>
 * The 'Project' class regroups all the aspects of a project
 * that I want to display on the website.
 *
 * @constructor
 *
 * @param {string} title the project's name
 * @param {number} id use the project's index as an ID
 * @param {string} descr  project's introduction written both in EN & FR
 * @param {string} skills describes the skills involved in the project
 * @param {array} img 4 entries = 4 links to 4 screenshots of the project under different viewport formats
 * @param {array} tech links to icons representing technologies (css3, jQuery, WordPress, etc.)
 * @param {string} date project's validation date
 * @param {string} color the main DIV's background color
 * @param {boolean} resp Is reponsive, TRUE || is not responsive, FALSE
 * @param {string} github link to the project's repository on github
 * @param {string} url the url of the project
 */
export default class Project {
  constructor(title, number, descr, skills, img, tech, date, color, resp, github, url) {
    this.title = title
    this.id = number
    this.descr = descr
    this.skills = skills
    this.img = img
    this.tech = tech
    this.date = date
    this.color = color
    this.resp = resp
    this.git = github
    this.url = url
  }
}
