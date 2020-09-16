/**
 * <b>DESCR:</b><br>
 * The 'Model' class regroups all the actions
 * a user can have on the program.
 * It takes a controller as an exiting point & a view as
 * an entring point.
 *
 * @constructor
 * @param {view} object renders the visuals of the actions taken by Model
 */
class Model {
  constructor(view) {
    this.view = new View()
  }

// SWITCH LANGUAGE ________________________________________ */
/**
 * <b>DESCR:</b><br>
 * Selects all the DOM elements containing a "lang" item
 * Repaints them all w/ the language defined by 'controller.langClick()'
 *
 * @method
 * @param {string} lang the ID of the language to switch to
 */
 switchTo(lang) {
   let selector = $(document).find(`[item=lang]`)
   this.view.fadeIn(selector)

   for (let i = 0; i < selector.length; i++) {
     if (lang == 'FR') {
       if (selector[i].id == 'descr') {
         this.view.repaint(`#${selector[i].id}`, text[i].fr)
       }
       if (selector[i].id == 'test') {
         this.view.repaint(`#${selector[i].id}`, data[0].descr.FR)
       }
     } else if (lang == 'EN') {
       if (selector[i].id == 'descr') {
         this.view.repaint(`#${selector[i].id}`, text[i].en)
       }
       if (selector[i].id == 'test') {
         this.view.repaint(`#${selector[i].id}`, text[i].en)
       }
     }
   }
 }
// MOUSEOVER UPDATE _______________________________________ */
/**
* <b>DESCR:</b><br>
* Calls in view.bgSwap() and view.signature()
*
* @method
* @param {string} lang the ID of the language to switch to
*/
 refresh(lang) {

 }
}
