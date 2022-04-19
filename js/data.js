/**
 * <b>DESCR:</b><br>
 * Stores all the datas, page status & language.
 * Call these objects & their properties w/ the 'Model' class.
 */
// PAGE LANGUAGE, STATUS & COLOR __________________________ */
const siteColor = '#c89580'
const layout = innerWidth > 600 ? 'desktop' : 'mobile'

let pageLang = document.querySelector('html').getAttribute('lang')
let pageStatus = 'home-logo'
let right = true // ARROW's direction
let firstClick = true // Record First logo click to manage transition later on
// BILINGUAL SECTIONS _____________________________________ */
const textFeed = {  
  'descr' : {
    'FR': `Ces 7 projets ont été réalisés dans le cadre de ma formation Développeur Front-End auprès d’OpenClassRooms.
          Survolez une vignette pour afficher le titre & le numéro du projet correspondant, cliquez dessus pour
          afficher les détails.`,
    'EN': `These 7 projects have been made throughout my training year to become a Front-End Developper w/
          OpenClassRooms. Hover one of these miniatures to display title & number of the corresponding project,
          click on it to see all the details.`
  },
  'right-descr' : {
    'FR' : 'Achevés(7) | En cours de développement(2)',
    'EN' : 'Done(7) | Currently working on(2)'
  },
  'bio' : {
    'FR':
      `Je suis né à Paris en 1983. J'ai eu mon premier ordinateur à l'âge de 7 ans (ATARI ST 512), et j'ai passé
      depuis des milliers d'heures à bricoler, apprendre, coder, décoder, réparer, jouer, découvrir et progresser
      dans ma connaissance de l'informatique sous toutes ses formes.<br><br>
      Mes valeurs cardinales sont la loyauté, le courage, l'écoute et la bienveillance. J'aime aussi bien travailler
      seul qu'en équipe et je finis toujours ce que j'entreprends.<br><br>
      Si vous êtes arrivé jusqu'ici et que vous voulez en savoir plus :`,
    'EN':
      `I was born in Paris in 1983. I got my first computer when I was 7 (an ATARI ST 512), from that point on, I've 
      spent thousands of hours tinkering, learning, coding, decoding, fixing, playing, discovering & progressing
      in my knowledge of computers on a large scale.<br><br>
      My paramount values are loyalty, courage, attention to others & benevolence. I like to work on my own as much
      as I do working with a team & I always finish what I start.<br><br>
      If you've made it this far & would like to learn more :`
  },
  'contact-me' : {
    'FR': `CONTACTEZ-MOI`,
    'EN': `CONTACT ME`
  },
  'skills-title' : {
    'FR': `Compétences`,
    'EN': `Skills`
  },
  'validation' : {
    'FR': `VALIDÉ LE`,
    'EN': `VALIDATED`
  }
}
// SET OF TECH ICONS ______________________________________ */
const techIcons = {
  'bootstrap'   : `Graphics/techIcons/bootstrap.svg`,
  'css3'        : `Graphics/techIcons/css3.svg`,
  'elementor'   : `Graphics/techIcons/elementor.svg`,
  'googledrawing': `Graphics/techIcons/googledrawing.svg`,
  'jasmine'     : `Graphics/techIcons/jasmine.svg`,
  'javascript'  : `Graphics/techIcons/javascript.svg`,
  'jquery'      : `Graphics/techIcons/jquery.svg`,
  'lighthouse'  : `Graphics/techIcons/lighthouse.svg`,
  'mockups'     : `Graphics/techIcons/mockups.png`,
  'mysql'       : `Graphics/techIcons/mysql.svg`,
  'photoshop'   : `Graphics/techIcons/photoshop.svg`,
  'poo'         : `Graphics/techIcons/poo.png`,
  'postman'     : `Graphics/techIcons/postman.svg`,
  'UML'         : `Graphics/techIcons/UML.png`,
  'wordpress'   : `Graphics/techIcons/wordpress.svg`
}
// ALL PROJECTS DATAS _____________________________________ */
const projectsDB = [
// OCP2
  {
    'title'   : `Chalets & Caviar`,
    'id'      : `OCP2`,
    'descr'   : { 'FR' : `Basée à Courchevel, l'agence immobilière “Chalets et caviar” possède une quinzaine de chalets
                          de luxe à la vente et en location. Dépourvue de site web pour assurer sa promotion en ligne,
                          elle vous a contacté pour remédier à ce problème !
                         `,
                  'EN' : `The real estate agency “Chalets et caviar” from Courchevel has a dozen luxury cottages available
                          for sale & rent. However, they don't have a website yet and can't advertize online. They have
                          called you to solve this problem !
                         `
                },
    'skills'  : { 'FR' : [`Adapter un thème Wordpress`,
                          `Rédiger une documentation pour débutants`,
                          `Choisir un thème Wordpress pertinent`
                         ],
                  'EN' : [`Customize a WordPress theme`,
                          `Write a documentation for non-expert users`,
                          `Choose a relevant WordPress Theme`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE2.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE2.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini2.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini2.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini2.jpg`
                },
    'tech'    : ['css3','photoshop', 'wordpress', 'elementor'],
    'date'    : { 'FR' : `23 janvier 2019`,
                  'EN' : `January 23rd 2019`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP2`,
    'url'     : 'https://ocp2.jeanbaptistepellier.fr'
  },
// OCP3
  {
    'title'   : `Ciné Monceau`,
    'id'      : `OCP3`,
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
    'skills'  : { 'FR' : [`Choisir une solution technique adaptée`,
                          `Lister les fonctionnalités demandées par un client`,
                          `Analyser un cahier des charges`,
                          `Rédiger les spécifications détaillées du projet`
                         ],
                  'EN' : [`Choose a fitted technical solution`,
                          `List functionalities required by a client`,
                          `Analyze a specifications document`,
                          `Write detailed specifications of the project`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE3.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE3.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini3.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini3.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini3.jpg`
                },
    'tech'    : ['photoshop', 'wordpress', 'elementor', 'mockups'],
    'date'    : { 'FR' : `24 mars 2019`,
                  'EN' : `March 24th 2019`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP3`,
    'url'     : 'https://ocp3.jeanbaptistepellier.fr'
  },
// OCP4
  {
    'title'   : `Express Food`,
    'id'      : `OCP4`,
    'descr'   : { 'FR' : `Vous venez d'être recruté par la toute jeune startup 'ExpressFood'. Elle ambitionne de livrer
                          des plats à domicile en moins de 20 minutes grâce à un réseau de livreurs à vélo.
                          ExpressFood a besoin que vous conceviez sa base de données.
                         `,
                  'EN' : `You just got hired by a young start-up called 'ExpressFood'. Their plan is to home deliver meals
                          within 20 minutes thanks to their network of bikers delivery men. 'ExpressFood' executives need
                          you to design their database.
                         `
                },
    'skills'  : { 'FR' : [`Réaliser des schémas UML cohérents`,
                          `Concevoir une architecture technique à partir de diagrammes`,
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
                  'resp'    : `Graphics/miniatures/RESPONSIVE4.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini4.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini4.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini4.jpg`
                },
    'tech'    : ['UML', 'mysql'],
    'date'    : { 'FR' : `4 août 2019`,
                  'EN' : `August 4th 2019`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP4`,
    'url'     : 'https://ocp4.jeanbaptistepellier.fr'
  },
// OCP5
  {
    'title'   : `Machine à citations`,
    'id'      : `OCP5`,
    'descr'   : { 'FR' : `Votre objectif sera à la fois simple et amusant : vous allez construire un générateur de
                          citations grâce au langage JavaScript ! Ces citations seront construites aléatoirement en
                          assemblant des morceaux de phrase.
                         `,
                  'EN' : `Your goal will be both fun & simple : you're gonna build a quote engine in pure JavaScript !
                          Quotes will be randomly generated by puting different sentence's pieces together.
                         `
                },
    'skills'  : { 'FR' : [`Concevoir un algorithme adéquat`,
                          `Écrire un programme en JavaScript`
                         ],
                  'EN' : [`Concieve a fitting algorithm`,
                          `Deploy JavaScript's syntax in a program`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE5.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE5.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini5.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini5.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini5.jpg`
                },
    'tech'    : ['javascript', 'bootstrap', 'photoshop', 'css3'],
    'date'    : { 'FR' : `1er août 2019`,
                  'EN' : `August 1st 2019`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP5`,
    'url'     : 'https://ocp5.jeanbaptistepellier.fr'
  },
// OCP6
  {
    'title'   : `Streets of Rage`,
    'id'      : `OCP6`,
    'descr'   : { 'FR' : `Vous devez créer un jeu vidéo en JavaScript dans lequel deux joueurs s'affrontent chacun
                          leur tour. Utilisez la Programmation Orientée Objet pour vous aider !
                         `,
                  'EN' : `Create a video game with javascript in which two players will fight each other round by round.
                          Use Object Oriented Programing to help you out !
                         `
                },
    'skills'  : { 'FR' : [`Concevoir une application JavaScript réutilisable`,
                          `Utiliser la Programmation Orientée Objet`,
                          `Déployer jQuery dans une application web`
                         ],
                  'EN' : [`Concieve a renewable JavaScript architecture`,
                          `Develop an object oriented object application`,
                          `Use jQuery in a web application`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE6.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE6.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini6.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini6.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini6.jpg`
                },
    'tech'    : ['javascript', 'jquery', 'poo', 'css3'],
    'date'    : { 'FR' : `6 mars 2020`,
                  'EN' : `March 6th 2020`
                },
    'resp'    : false,
    'github'  : `https://github.com/JeqnBat/OCP6`,
    'url'     : 'https://ocp6.jeanbaptistepellier.fr'
  },
// OCP7
  {
    'title'   : `Miam Miam`,
    'id'      : `OCP7`,
    'descr'   : { 'FR' : `Vous avez choisi de vous lancer dans le business des avis de restaurants. Votre objectif :
                          créer un service qui permet d'avoir des avis sur des restaurants autour de soi. Vous allez
                          devoir apprendre à utiliser des API externes, telles que celles de Google Maps et de Google Places !
                         `,
                  'EN' : `You have chosen to poke into the business of restaurants reviews. Your goal is to create a
                          simple & useful service that allows people to rate restaurants near them. You will have to
                          learn how to use external APIs such as Google Maps & Google Places in order to finish this project !
                         `
                },
    'skills'  : { 'FR' : [`Développer une application JavaScript complète`,
                          `Utiliser une API externe en JavaScript`
                         ],
                  'EN' : [`Develop an entire Javascript application`,
                          `Use external APIs w/ Javascript`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE7.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE7.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini7.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini7.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini7.jpg`
                },
    'tech'    : ['javascript', 'jquery', 'postman', 'git'],
    'date'    : { 'FR' : `6 mai 2020`,
                  'EN' : `May 6th 2020`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP7`,
    'url'     : 'https://ocp7.jeanbaptistepellier.fr'
  },
// OCP8
  {
    'title'   : `To-do list App`,
    'id'      : `OCP8`,
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
    'skills'  : { 'FR' : [`Déployer des tests dans une application`,
                          `Optimiser les performances d'un projet`,
                          `Reprendre en main un code JavaScript existant`
                         ],
                  'EN' : [`Set unit & functional tests in a web application`,
                          `Optimize a project's performances`,
                          `Take on an existing Javascript project`
                         ]
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE8.jpg`,
                  'resp'    : `Graphics/miniatures/RESPONSIVE8.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini8.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini8.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini8.jpg`
                },
    'tech'    : ['javascript', 'lighthouse', 'git','jasmine'],
    'date'    : { 'FR' : `1er août 2020`,
                  'EN' : `August 1st 2020`
                },
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP8`,
    'url'     : 'https://ocp8.jeanbaptistepellier.fr'
  }
]