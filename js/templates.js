/**
 * <b>DESCR:</b><br>
 * Stores all the HTML templates of the different pages.
 * Call these variables w/ the 'view' class to display them.
 */
// MAIN PAGE TEMPLATES ____________________________________ */
let miniatureTemplate = `<div class="miniature" item="OCP#xxxid">
                          <div class="over-screen xxxid">
                            <p>xxxid</p>
                            <h5 style="font-family: 'Roboto', sans-serif;">“xxxtitle”</h5>
                            <p style="height: 5vh;"></p>
                            <h4><div id="valxxxid" item="lang"></div></h4>
                            <h3><div id="datexxxid" item="lang"></div></h3>
                          </div>
                         </div>`

let footerNavTemplate = '<div id="footerNavxxxid" class="footer-nav-item">🔳</div>'
// PROJECT DETAILS TEMPLATES ______________________________ */
let projectTitleTemplate = '<title id="project-title"></title>'

let skillsTemplate = `<div id="skills">
                        <div id="skills-title" item="lang"></div>
                        <img src="Graphics/techIcons/gear.svg" class="three-sixty" alt="gears" height="100px" width="100px">
                        <img src="Graphics/techIcons/gear.svg" class="minus-three-sixty" alt="gears" height="160px" width="160px">
                        <ul id="skills-list" item="lang">
                        </ul>
                       </div>`

let screenShotTemplate = `<section id="layout" class="block">
                            <a href="xxxurl" target="blank">
                              <img src="imgFile" alt="layout screenshot" width="xxx" height="yyy">
                            </a>
                            <div class="block-mirror" style="
                              background-image: linear-gradient(color, transparent), url('imgFile');
                              border-image: linear-gradient(0deg, #1f1d1d, color) 1;
                              width: xxxpx;">
                            </div>
                          </section>`

let mobileWidthTemplate   = '<p align="center">- 425px -</p>'
let tabletWidthTemplate   = '<p align="center">- 750px -</p>'
let desktopWidthTemplate  = '<p align="center">- 1400px -</p>'

let detailsMenuTemplate = `<nav id="project-details-menu">
                            <div id="tech" class="bottom-menu"><p>technologies</p></div>
                            <div id="responsive" class="bottom-menu"><p>full responsive</p></div>
                            <div id="page-details-date" class="bottom-menu" item="lang"></div>
                            <div id="projects-github" class="bottom-menu"><img src="Graphics/techIcons/git.svg" width="50px" height="50px"></div>
                           </nav>`

let checkBox = { 'true' : '<div class="check-box true"></div>',
                 'false' : '<div class="check-box"></div>'
               }

let techIconTemplate = `<figure>
                           <img src="xxxURL" alt="xxx-icon" height="50px" width="50px">
                           <figcaption>xxx</figcaption>
                        </figure>`

let leftArrow = '<div id="left" class="arrow"></div>'
let rightArrow = '<div id="right" class="arrow"></div>'
// ABOUT ME TEMPLATES _____________________________________ */
let bioTemplate = `<article id="bio" item="lang"></article>`
let contactMeTemplate = '<div id="contact-me" item="lang"><a href="mailto:jbpellier@noos.fr"></a></div>'
