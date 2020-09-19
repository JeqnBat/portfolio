/**
 * <b>DESCR:</b><br>
 * Stores all the DOM nodes & contents. Call these objects
 * & their properties w/ the 'View' class.
 */
let lang = $('html').attr('lang')
let pageStatus = 'home-logo' // RESET 'main-page'
// BILINGUAL SECTIONS _____________________________________ */
let descr = {
  'FR': `Ces 7 projets ont été réalisés dans le cadre de ma formation Développeur Front-End auprès d’OpenClassRooms.
         Survolez une vignette pour afficher le titre & le numéro du projet correspondant, cliquez dessus pour
         afficher les détails.`,
  'EN': `These 7 projects have been made throughout my training year to become a Front-End Developper w/
         OpenClassRooms. Hover one of these miniatures to display title & number of the corresponding project,
         click on it to see all the details.`
}
let validation = {
    'FR': `VALIDÉ LE`,
    'EN': `VALIDATED`
}
// SET OF TECH ICONS ______________________________________ */
let techIcons = {
  'bootstrap'   : `Graphics/techIcons/bootstrap.png`,
  'css3'        : `Graphics/techIcons/css3.png`,
  'elementor'   : `Graphics/techIcons/elementor.png`,
  'jasmine'     : `Graphics/techIcons/jasmine.png`,
  'javascript'  : `Graphics/techIcons/javascript.png`,
  'jquery'      : `Graphics/techIcons/jquery.png`,
  'lighthouse'  : `Graphics/techIcons/lighthouse.png`,
  'mockups'     : `Graphics/techIcons/mockups.png`,
  'poo'         : `Graphics/techIcons/poo.png`,
  'postman'     : `Graphics/techIcons/postman.png`,
  'UML'         : `Graphics/techIcons/UML.png`,
  'wordpress'   : `Graphics/techIcons/wordpress.png`
}
// ALL PROJECTS DATAS _____________________________________ */
let data = [
// OCP2
  {
    'title'   : `Chalets & Caviar`,
    'descr'   : { 'FR' : `Basée à Courchevel, l'agence immobilière “Chalets et caviar” possède une quinzaine de chalets
                          de luxe à la vente et en location. Dépourvue de site web pour assurer sa promotion en ligne,
                          elle vous a contacté pour remédier à ce problème !
                         `,
                  'EN' : `The real estate agency “Chalets et caviar” from Courchevel has a dozen luxury cottages available
                          for sale & rent. However, they don't have a website yet and can't advertize online. They have
                          called you to solve this problem !
                         `
                },
    'skills'  : { 'FR' : [`Adapter un thème Wordpress pour respecter les exigences du client`,
                          `Rédiger une documentation à l'intention d'utilisateurs non spécialistes`,
                          `Sélectionner un thème Wordpress adapté aux besoins du client`
                         ],
                  'EN' : [`Reshape a WordPress theme to match the client's requirements`,
                          `Write a documentation for non expert users`,
                          `Select a WordPress theme fitted to the client's needs`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE2.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini2.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini2.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini2.jpg`
                },
    'date'    : { 'FR' : `23 janvier 2019`,
                  'EN' : `January 23rd 2019`
                },
    'color'   : 'bg-primary',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP2`
  },
// OCP3
  {
    'title'   : `Ciné Monceau`,
    'descr'   : { 'FR' : `Jennifer Edwards est l'organisatrice du festival des Films de Plein Air qui aura lieu au
                          parc Monceau du 5 au 8 août. Son association vient juste d'être créée, son budget est limité
                          et elle doit communiquer en ligne sur son festival afin d'annoncer la programmation et de recueillir
                          les réservations.
                         `,
                  'EN' : `Jennifer Edwards is the organizer of the "Plein Air" film festival that will take place from
                          the 5th to the 8th of august inside the "Monceau Park" in Paris. Her organization is brand new,
                          her budget is limited and she needs to communicate online about the festival, announce the
                          program & collect the reservations.
                         `
                },
    'skills'  : { 'FR' : [`Choisir une solution technique adaptée parmi les solutions existantes si cela est pertinent`,
                          `Lister les fonctionnalités demandées par un client`,
                          `Analyser un cahier des charges`,
                          `Rédiger les spécifications détaillées du projet`
                         ],
                  'EN' : [`Choose a fitted technical solution`,
                          `List functionalities asked by a client`,
                          `Analyze a specifications document`,
                          `Write the detailed specifications of the project`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE3.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini3.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini3.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini3.jpg`
                },
    'date'    : { 'FR' : `24 mars 2019`,
                  'EN' : `March 24th 2019`
                },
    'color'   : 'bg-danger',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP3`
  },
// OCP4
  {
    'title'   : `Express Food`,
    'descr'   : { 'FR' : `Vous venez d'être recruté par la toute jeune startup 'ExpressFood'. Elle ambitionne de livrer
                          des plats à domicile en moins de 20 minutes grâce à un réseau de livreurs à vélo.
                          ExpressFood a besoin que vous conceviez sa base de données.
                         `,
                  'EN' : `You just got hired by a young start-up called 'ExpressFood'. Their plan is to home deliver meals
                          within 20 minutes thanks to their network of bikers delivery men. 'ExpressFood' executives need
                          you to design their database.
                         `
                },
    'skills'  : { 'FR' : [`Réaliser des schémas UML cohérents avec un énoncé`,
                          `Concevoir l’architecture technique d’une application à partir de diagrammes UML`,
                          `Schématiser la base de données de l’application`,
                          `Implémenter le schéma de données dans la base`
                         ],
                  'EN' : [`Produce fitted UML diagrams from a given statement`,
                          `Concieve the tech architecture of an app w/ UML`,
                          `Modelize the application's db using a diagram`,
                          `Implement the data diagram into the database`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE4.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini4.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini4.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini4.jpg`
                },
    'date'    : { 'FR' : `4 août 2019`,
                  'EN' : `August 4th 2019`
                },
    'color'   : 'bg-dark',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP4`
  },
// OCP5
  {
    'title'   : `Machine à citations`,
    'descr'   : { 'FR' : `Votre objectif sera à la fois simple et amusant : vous allez construire un générateur de
                          citations grâce au langage JavaScript ! Ces citations seront construites aléatoirement en
                          assemblant des morceaux de phrase.
                         `,
                  'EN' : `Your goal will be both fun & simple : you're gonna build a quote engine in pure JavaScript !
                          Quotes will be randomly generated by puting different sentence's pieces together.
                         `
                },
    'skills'  : { 'FR' : [`Concevoir un algorithme pour répondre à un cahier des charges`,
                          `Déployer la syntaxe de JavaScript dans un programme`
                         ],
                  'EN' : [`Concieve an algorithm able to match given specifications`,
                          `Deploy javascript's syntax in a program`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE5.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini5.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini5.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini5.jpg`
                },
    'date'    : { 'FR' : `1er août 2019`,
                  'EN' : `August 1st 2019`
                },
    'color'   : 'bg-success',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP5`
  },
// OCP6
  {
    'title'   : `Streets of Rage`,
    'descr'   : { 'FR' : `Vous devez créer un jeu vidéo en JavaScript dans lequel deux joueurs s'affrontent chacun
                          leur tour. Utilisez la Programmation Orientée Objet pour vous aider !
                         `,
                  'EN' : `Create a video game with javascript in which two players will fight each other round by round.
                          Use Object Oriented Programing to help you out !
                         `
                },
    'skills'  : { 'FR' : [`Concevoir une architecture d'application JavaScript réutilisable`,
                          `Développer une application JavaScript orientée objet`,
                          `Mettre en œuvre jQuery dans une application web`
                         ],
                  'EN' : [`Concieve a renewable javascript architecture`,
                          `Develop an object oriented object application`,
                          `Use the jQuery library in a web application`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE6.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini6.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini6.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini6.jpg`

                },
    'date'    : { 'FR' : `6 mars 2020`,
                  'EN' : `March 6th 2020`
                },
    'color'   : 'bg-info',
    'resp'    : false,
    'github'  : `https://github.com/JeqnBat/OCP6`
  },
// OCP7
  {
    'title'   : `Miam Miam`,
    'descr'   : { 'FR' : `Vous avez choisi de vous lancer dans le business des avis de restaurants. Votre objectif :
                          créer un service qui permet d'avoir des avis sur des restaurants autour de soi. Vous allez
                          devoir apprendre à utiliser des API externes, telles que celles de Google Maps et de Google Places !
                         `,
                  'EN' : `You have chosen to poke into the business of restaurants reviews. Your goal is to create a
                          simple & useful service that allows people to rate restaurants near them. You will have to
                          learn how to use external APIs such as Google Maps & Google Places in order to finish this project !
                         `
                },
    'skills'  : { 'FR' : [`Développer une application JavaScript complète en respectant un cahier des charges`,
                          `Utiliser une API externe en JavaScript`
                         ],
                  'EN' : [`Develop an entire Javascript application & respect its specifications`,
                          `Use external APIs w/ Javascript`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE7.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini7.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini7.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini7.jpg`
                },
    'date'    : { 'FR' : `6 mai 2020`,
                  'EN' : `May 6th 2020`
                },
    'color'   : 'bg-secondary',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP7`
  },
// OCP8
  {
    'title'   : `To-do list App`,
    'descr'   : { 'FR' : `Vous venez d'intégrer une petite équipe qui souhaite révolutionner la vie des gens grâce à
                          ce qu'ils appellent la meilleure application "to-do list" du monde. L'idée elle-même est très
                          bien mais le code derrière n'est pas top ! Ils vous ont sollicité pour ajouter des tests
                          et régler quelques bugs.
                         `,
                  'EN' : `You've just joined a small team who thinks that all the problems in the world are caused by
                          people not being organized enough. Therefore, they've created what they call the best "to-do list"
                          application in the world. The idea itself is great, but the code behind really isn't ! They have
                          asked you to add tests and fix some bugs.
                         `
                },
    'skills'  : { 'FR' : [`Déployer des tests dans une application web`,
                          `Optimiser les performances d'un projet à l'aide des DevTools`,
                          `Reprendre en main un projet JavaScript existant`
                         ],
                  'EN' : [`Set unit & functional tests in a web application`,
                          `Optimize a project's performances with the DevTools`,
                          `Take on an existing Javascript project`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE8.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini8.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini8.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini8.jpg`
                },
    'date'    : { 'FR' : `1er août 2020`,
                  'EN' : `August 1st 2020`
                },
    'color'   : 'bg-primary',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP8`
  }
]
// MAIN TEMPLATES _________________________________________ */
let miniature = `<div class="miniature" item="OCP#xxxid">
                  <div class="over-screen xxxid">
                    <p>xxxid</p>
                    <h5 style="font-family: 'Roboto', sans-serif;">“xxxtitle”</h5>
                    <p style="height: 5vh;"></p>
                    <h4><div id="valxxxid" item="lang"></div></h4>
                    <h3><div id="datexxxid" item="lang"></div></h3>
                  </div>
                 </div>`

let bottomNav = '<div id="bottomNavxxxid" class="footer-nav-item">🔳</div>'

let projectTitle = '<div id="project-title"></div>'
// si je veux me faire chier j'efface toutes les IDs et je passe par model.mark&print
let detailsTemplate = `<div id="skills">
                        <ul id="skills-list">
                        </ul>
                       </div>`

let screenShotTemplate = `<div id="layout" class="block">
                          <img src="imgFile" alt="mobile layout screenshot" width="xxx" height="yyy">
                         </div>`

let mobileWidth   = '<p align="center">- 425px -</p>'
let tabletWidth   = '<p align="center">- 750px -</p>'
let desktopWidth  = '<p align="center">- 750px -</p>'
//🔲
