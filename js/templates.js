/**
 * <b>DESCR:</b><br>
 * Stores all the HTML templates of the different pages.
 * Call these variables w/ the 'view' class to display them.
 */
// MAIN TEMPLATES _________________________________________ */
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

let projectTitleTemplate = '<title id="project-title"></title>'

let skillsTemplate = `<div id="skills">
                        <ul id="skills-list" item="lang">
                        </ul>
                       </div>`

let screenShotTemplate = `<section id="layout" class="block">
                            <img src="imgFile" alt="layout screenshot" width="xxx" height="yyy">
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
                            <div id="tech" class="bottom-menu"><h6>technologies</h6></div>
                            <div id="responsive" class="bottom-menu"><h6>full responsive</h6></div>
                            <div id="page-details-date" class="bottom-menu" item="lang"></div>
                           </nav>`

let techIconTemplate = `<figure>
                           <img src="xxxURL" alt="xxx-icon" height="50px" width="50px">
                           <figcaption>xxx</figcaption>
                        </figure>`
