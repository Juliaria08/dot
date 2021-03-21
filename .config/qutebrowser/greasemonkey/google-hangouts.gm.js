// ==UserScript==
// @name            Google Hangouts Gruvbox
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Gruvbox theme for Google Hangouts
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/hangouts\.google\.com\/.*/
// @released        YYYY-MM-DD
// @updated         YYYY-MM-DD
// @compatible      Greasemonkey
// @run-at          document-end
// ==/UserScript==
 
(function(){
 
    function main(){
        var bg_0 = "#282828";
        var bg_1 = "#3c3836";
        var fg_0 = "#fbf1c7";
        var fg_1 = "#ebdbb2";
        var blue = "#458588";
        var css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(document.createTextNode(`
            .g-Ue-ad {
                filter: opacity(0);
            }
        `));
        document.getElementsByTagName("head")[0].appendChild(css);
        console.log(css);
    };
 
    // instantiate and run 
    var main = new main();
})();

