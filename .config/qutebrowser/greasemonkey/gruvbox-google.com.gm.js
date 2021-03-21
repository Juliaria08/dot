// ==UserScript==
// @name            Gruvbox for google.com
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Gruvbox for google.com
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/.*(classroom|hangouts)\.google\.com\/.*/
// @released        YYYY-MM-DD
// @updated         YYYY-MM-DD
// @compatible      Greasemonkey
// @run-at          document-end
// ==/UserScript==
 
(function(){
 
    function main(){
        var css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(document.createTextNode(`
        * {
            border-color: #fabd2f !important;
        }

        a {
            color: #458588 !important;
        }

        a:visited {
            color: #d3869b !important;
        }

        body {
            background-color: #282828 !important;
            color: #83a598 !important;
        }

        html {
            background-color: #282828 !important;
        }

        input,
        textarea {
            background-color: #3c3836 !important;
            color: #83a598 !important;
        }

        blockquote,
        pre {
            background-color: #3c3836 !important;
            color: #83a598 !important;
        }

        .sfbgg {
            background-color: #3c3836 !important;
        }

        .sbib_a {
            background: linear-gradient(to bottom, #3c3836, #282828) !important;
        }

        input#lst-ib,
        #sb_ifc0.sbib_b,
        #gs_taif0 {
            background: transparent !important;
        }

        #lst-ib,
        .sbsb_a {
            background-color: #282828 !important;
        }

        .kpbb {
            background-image: linear-gradient(to bottom, #67afb2, #458588) !important;
        }

        #hdtbSum {
            background-color: #282828 !important;
        }

        #hdtbMenus.hdtb-td-o {
            background-color: #282828 !important;
        }

        #hdtb-tls.hdtb-tl {
            background-image: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        #hdtb-tls.hdtb-tl.hdtb-tl-sel {
            background-image: linear-gradient(to bottom, #3c3836, #282828) !important;
        }

        #abar_button_opt.ab_button {
            background: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        #appbar {
            background-color: #282828 !important;
        }

        cite {
            color: #98971a !important;
        }

        .ab_dropdown {
            background-color: #282828 !important;
        }

        div.crp {
            background-color: #282828 !important;
        }

        #fbar {
            background-color: #3c3836 !important;
        }
        `));
        document.getElementsByTagName("head")[0].appendChild(css)
    };
 
    // instantiate and run 
    var main = new main();
})();

