(function() {

  'use strict';


  /**
   * Selectors
   */


  /**
   * Settings
   */


  /**
   * States
   */
  
  const activeClass = 'is-active';
  const inactiveClass = 'is-inactive';
  const visibleClass = 'is-visible';


  /**
   * Utils
   */

  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();


  /**
   * Utils
   */



  /**
   * Methods
   */

   
  // Handle click events
  const clickEventHandler = (e) => {
  }


  /**
   * Events/APIs/init
   */

  // Replace 'no-js' w/ 'js' on document element
  document.documentElement.className = "js";

  // Listen for click events
  document.addEventListener('click', clickEventHandler, false);

})();
