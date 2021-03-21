// ==UserScript==
// @name            Khan Academy Gruvbox
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Gruvbox theme for Khan Academy
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/.*khanacademy\.org\/.*/
// @released        YYYY-MM-DD
// @updated         YYYY-MM-DD
// @compatible      Greasemonkey
// @run-at          document-end
// ==/UserScript==
 
(function(){
 
    function main(){
        var bg_0    = "#282828";
        var bg_1    = "#3c3836";
        var fg_0    = "#fbf1c7";
        var fg_1    = "#ebdbb2";
        var blue    = "#458588";
        var br_blue = "#83a598";
        var css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(document.createTextNode(`
        body {
            color: ${fg_0} !important;
        }
        ._1fo6imx {
            background-color: ${bg_1} !important;
        }
        a._njwr4l3 {
            color: ${fg_1} !important;
        }
        a._les45vw {
            background-color: ${bg_1} !important;
        }
        a._je2o3if {
            background-color: ${bg_1} !important;
        }
        a._kp2byz9 {
            background-color: ${bg_1} !important;
        }
        a._1729tu2s {
            color: ${fg_1} !important;
        }
        div._1u7fvnum {
            background-color: ${bg_1} !important;
        }
        div._e296pg {
            background-color: ${bg_0} !important;
        }
        div._64iw7hi {
            background-color: ${bg_1} !important;
        }
        div._1ct7vg8q {
            background-color: ${bg_1} !important;
        }
        div.paragraph {
            color: ${fg_0} !important;
        }
        div._whx152 {
            background-color: ${bg_1} !important;
        }
        div.instructions {
            color: ${fg_1} !important;
        }
        div.perseus-radio-option-content {
            color: ${fg_1} !important;
            filter: invert(1);
        }
        div.task-container {
            background-color: ${bg_0} !important;
        }
        h1._1l44zfj {
            color: ${fg_1} !important;
        }
        .perseus-math-input {
            background-color: ${bg_1} !important;
        }
                                                `));
        document.getElementsByTagName("head")[0].appendChild(css);
        console.log(css);
    };
 
    // instantiate and run 
    var main = new main();
})();

