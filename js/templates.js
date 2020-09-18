/**
 * <b>DESCR:</b><br>
 * Stores all the DOM nodes & contents. Call these objects
 * & their properties w/ the 'View' class.
 */
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
    'descr'   : { 'FR' : `L'agence immobilière “Chalets et caviar” de Courchevel possède une quinzaine de chalets de luxe
                          à la vente et une vingtaine en location. Cependant, elle ne possède pas encore de site web pour
                          promouvoir la vente et la location de ses chalets. C’est pour cette raison qu’elle fait appel
                          à vous.
                         `,
                  'EN' : `The real estate agency “Chalets et caviar” from Courchevel owns a dozen luxury cottages for sale
                          and about twenty for rent. However, it doesn't have a website yet that could promote its houses.
                          That is the reason why they have called you.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE2.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini2.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini2.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini2.jpg`
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
    'descr'   : { 'FR' : `Jennifer Edwards est l'organisatrice du festival des Films de Plein Air. Elle ambitionne de
                          sélectionner et de projeter des films d'auteur en plein air du 5 au 8 août au parc Monceau à
                          Paris. Son association vient juste d'être créée et elle dispose d'un budget limité. Elle a
                          besoin de communiquer en ligne sur son festival, d'annoncer les films projetés et de recueillir
                          les réservations.
                         `,
                  'EN' : `Jennifer Edwards is the organizer of the "Plein Air" film festival. She's planning on selecting
                          & screening independant movies outdoor from august the 5th to the 8th inside the Monceau Park
                          located in Paris. Her organization is brand new and she doesn't have an unlimited amount of money.
                          She needs to communicate online about her festival, to announce the movies that will be aired &
                          collect reservations.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE3.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini3.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini3.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini3.jpg`
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
    'descr'   : { 'FR' : `Vous venez d'être recruté par la toute jeune startup ExpressFood. Elle ambitionne de livrer
                          des plats de qualité à domicile en moins de 20 minutes grâce à un réseau de livreurs à vélo.
                          ExpressFood a besoin que vous conceviez sa base de données. Pour structurer votre réflexion,
                          vous utiliserez UML et construirez une suite de diagrammes afin de modéliser les besoins de
                          l’application et le diagramme de classe pour modéliser les entités de l'application. Une fois
                          que les diagrammes vous satisferont, vous réaliserez le schéma de base de données MySQL
                          correspondant, puis vous remplirez la base avec des premières valeurs fictives.
                         `,
                  'EN' : `You just got hired by the young start-up company ExpressFood. She plans on home delivering
                          quality meals in less than 20 minutes thanks to its network of bikers delivery men. ExpressFood
                          needs you to design its database. In order to structure your thought process, you will use UML
                          and build many diagrams to modelize the app's needs and a class diagram to modelize the app's
                          entities. Once you're satisfied with your diagrams, you will produce the mySQL database diagram
                          then you will fill in the database with a set of demonstration values.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE4.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini4.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini4.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini4.jpg`
                },
    'date'    : { 'FR' : `4 août 2019`,
                  'EN' : `August 4th 2019`
                },
    'color'   : 'bg-warning',
    'resp'    : true,
    'github'  : `https://github.com/JeqnBat/OCP4`
  },
// OCP5
  {
    'title'   : `La Machine à citations`,
    'descr'   : { 'FR' : `Votre objectif sera à la fois simple et amusant : vous allez construire un générateur de
                          citations ! Les citations seront construites aléatoirement en assemblant des morceaux de phrase.
                          Vous devez respecter les consignes suivantes : 1) chaque appel de fonction génère aléatoirement
                          les citations, 2) ces dernières sont composées d'au moins trois morceaux de phrases, 3) les
                          phrases doivent être cohérentes (pas de point d'exclamation au milieu), 4) choisir le nombre
                          de citations générées (de 1 à 5), 5) choisir entre deux types de générateurs de citations, 6)
                          proposer une solution pour la fin du programme (arrêter ou recommencer)
                         `,
                  'EN' : `Your goal will be both fun & simple : you will build a quote engine ! Quotes will be randomly
                          generated by puting different sentence's pieces together. You have to follow these instructions : 1)
                          each function call will randomly generate quotes, 2) quotes will be made out of sentence's pieces, 3)
                          quotes must be coherent (no exclamation mark in the middle of them), 4) choose the generated quotes
                          number (from 1 to 5), 5) chose between two types of quote engines, 6) build a solution for the ending
                          sequence of the program (stop or reset)
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE5.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini5.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini5.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini5.jpg`
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
    'descr'   : { 'FR' : `Vous devez créer un jeu en ligne en JavaScript dans lequel deux joueurs s'affrontent chacun
                          leur tour. Commencez par générer une carte de jeu aléatoire. Chaque case peut être soit : 1)
                          Vide, 2) Inaccessible (grisée). Des armes (4 maximum) seront placées sur la carte au hasard
                          et pourront être récoltées par les joueurs qui passeraient dessus. Vous inventerez au moins
                          4 types d’arme avec des dégâts différents. L’arme par défaut qui équipe les joueurs doit
                          infliger 10 points de dégâts. Chaque arme a un nom et un visuel associé.
                         `,
                  'EN' : `Create an online game with javascript in which two players will fight round by round. Start
                          with generating a random board. Each tile can be either empty or inaccessible. Weapons (4 max)
                          will be placed randomly on the board, players will be able to collect them by stepping on their
                          tile. Invent at least 4 weapon categories with different damages. The default weapon must
                          inflict 10 hit points. Each weapon has a specific name & appearance.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE6.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini6.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini6.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini6.jpg`
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
                          créer un service simple et utile qui permet d'avoir des avis sur des restaurants autour de soi.
                          Pour ce projet, vous allez devoir apprendre à utiliser des API externes, telles que celles de
                          Google Maps et de Google Places (votre plus gros concurrent). Et ce n'est pas tout : vous allez
                          devoir orchestrer toutes ces informations de manière cohérente dans votre application !
                         `,
                  'EN' : `You have chosen to poke into the business of restaurants reviews. Your goal is to create a
                          simple & useful service that allows people to rate restaurants near them. You will have to
                          learn how to use external APIs such as Google Maps & Google Places and then dispatch all
                          their informations inside your app in a coherent manner.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE7.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini7.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini7.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini7.jpg`
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
    'descr'   : { 'FR' : `Vous venez d'intégrer une petite équipe qui pense que tous les problèmes du monde viennent du
                          fait que les gens ne sont pas assez organisés et qu'un peu de focus pourrait tout changer !
                          C'est pourquoi ils ont créé ce qu'ils appellent la meilleur application "to-do list" du monde.
                          L'idée elle-même est très bien mais le code derrière n'est pas au top ! Ils vous ont sollicité
                          pour ajouter des tests et régler quelques bugs dans le code.
                         `,
                  'EN' : `You've just joined a small team who thinks that all the problems in the world are caused by
                          people not being organized enough and that a little focus could change everything. Therefore,
                          they've created what they call the best "to-do list" application in the world. The idea itself
                          is great, but the code behind really isn't ! They have asked you to add tests and fix some bugs
                          in the code.
                         `
                },
    'img'     : { 'mini'    : `Graphics/miniatures/MINIATURE8.jpg`,
                  'mobile'  : `Graphics/miniatures/MOBILE_mini8.jpg`,
                  'tablet'  : `Graphics/miniatures/TABLET_mini8.jpg`,
                  'desktop' : `Graphics/miniatures/DESKTOP_mini8.jpg`
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
