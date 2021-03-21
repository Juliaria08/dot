// ==UserScript==
// @name            Background color for 6502 tutorial
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Description
// @license         MIT License
// @version	        0.1
// @include         /^https?://skilldrick\.github\.io/easy6502.*/
// @released        YYYY-MM-DD
// @updated         YYYY-MM-DD
// @compatible      Greasemonkey
// @run-at          document-end
// ==/UserScript==
 
(function(){
 
    function main(){
        document.body.style = "background-color: lightgrey;";
    };
 
    // instantiate and run 
    var main = new main();
})();
