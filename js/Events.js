/**
 * <b>DESCR:</b><br>
 * All event listeners || handlers are defined inside
 * this class. Use it to select, click, scroll,…
 *
 * @constructor
 * @param {object} animations takes the 'animations' object
 */
class Events {
  constructor(animations) {
    this.move = animations
  }

// BIG TITLE CLICK _____________________________________ */
 /**
  * <b>DESCR:</b><br>
  * Slides up the home screen outside the viewport
  *
  * @method
  */
  titleClick() {
    let that = this
    $('.title').on('click', function() {
      that.move.slideUp('#home-screen')
    })
  }
}
