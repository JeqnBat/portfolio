/**
 * <b>DESCR:</b><br>
 * Stores all the HTML templates of the different pages.
 * Call these variables w/ the 'view' class to display them.
 */
// MAIN PAGE TEMPLATES ____________________________________ */
const miniatureTemplate =
  `<div class="miniature" item="OCP#xxxid"><div class="over-screen xxxid">
    <p>xxxid</p>
    <h5>“xxxtitle”</h5>
    <h5><div id="valxxxid" item="lang"></div></h5>
    <h5><div id="datexxxid" item="lang"></div></h5>
    </div>
  </div>`
const footerNavTemplate = '<div id="footerNavxxxid" class="footer-nav-item">□</div>'
// PROJECT DETAILS TEMPLATES ______________________________ */
const projectTitleTemplate = '<title id="project-title"></title>'
const skillsTemplate =
  `<div id="skills">
    <img src="Graphics/techIcons/gear.svg" class="three-sixty" alt="gears" height="100px" width="100px">
    <img src="Graphics/techIcons/gear.svg" class="minus-three-sixty" alt="gears" height="160px" width="160px">
    <div id="skills-title" item="lang"></div>
    <ul id="skills-list" item="lang">
    </ul>
  </div>`
const snapshots = `<div id="snapshots"></div>`
const screenShotTemplate =
  `<section id="layout" class="block">
    <a href="xxxurl" target="blank">
      <img src="imgFile" alt="layout screenshot" width="xxx" height="yyy">
    </a>
    <div class="block-mirror" style="
      background-image: linear-gradient(color, transparent), url('imgFile');
      border-image: linear-gradient(0deg, #1f1d1d, color) 1;
      width: xxxpx;">
    </div>
  </section>`

const mobileWidthTemplate = '<p align="center">- 425px -</p>'
const tabletWidthTemplate = '<p align="center">- 750px -</p>'
const desktopWidthTemplate = '<p align="center">- 1400px -</p>'

const detailsMenuTemplate =
  `<div class="bottom-menu">technologies</div>
    <div id="responsive" class="bottom-menu"><p>full responsive</p></div>
    <div id="page-details-date" class="bottom-menu" item="lang"></div>
    <div id="projects-github" class="bottom-menu"><img src="Graphics/techIcons/git.svg" width="50px" height="50px">
  </div>`
const checkBox = {
  'true': '<div class="check-box true"></div>',
  'false': '<div class="check-box"></div>'
}
const techIconTemplate =
  `<figure>
    <img src="xxxURL" alt="xxx-icon" height="40px" width="40px">
    <figcaption>xxx</figcaption>
  </figure>`
const leftArrow = '<div id="left" class="arrow"></div>'
const rightArrow = '<div id="right" class="arrow"></div>'
// ABOUT ME TEMPLATES _____________________________________ */
const bioTemplate = `<article id="bio" item="lang"></article>`