// ==UserScript==
// @name            Google Classroom++
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     My own improvements upon Google Classroom
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/classroom\.google\.com\/.*/
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
        css.appendChild(document.createTextNode(`span {
                                                    color: ${fg_0} !important;
                                                }
                                                span.l4V7wb {
                                                    background-color: ${blue} !important;
                                                }
                                                span.NPEfkd {
                                                    color: ${bg_1} !important;
                                                }
                                                span.WNDO8c {
                                                    color: ${bg_1} !important;
                                                }
                                                span.QNajvd {
                                                    color: ${bg_1} !important;
                                                }
                                                h2 {
                                                    color: ${fg_1} !important;
                                                }
                                                body {
                                                    color: ${fg_0} !important;
                                                }
                                                div {
                                                    color: ${fg_0} !important;
                                                }
                                                p {
                                                    color: ${fg_0} !important;
                                                }
                                                li {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                    border-radius: 0.5em !important;
                                                    margin: 0.5em !important;
                                                    border-bottom: none !important;
                                                    padding: 1em !important
                                                }
                                                td {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                svg.gb_cf {
                                                    color: ${fg_1} !important;
                                                }
                                                a.gb_D {
                                                    transform: scale(0);
                                                }
                                                nav.joJglb {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.jrhqBd {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.LKqFXc {
                                                    border-top: none !important;
                                                }
                                                div.EE538 {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                    border-radius: 0.5em !important;
                                                    padding: 1.5em !important;
                                                }
                                                div.po4Aib {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.n4xnA {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.nforOe {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.GWZ7yf {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.OX4Vcb {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.d4Fe0d {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.QSmq3c {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.I7OXgf {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.pOf0gc {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }
                                                div.OK1tJe {
                                                    background-color: ${bg_0} !important;
                                                }
                                                div.K0lUWd {
                                                    color: ${bg_1} !important;
                                                }
                                                div.JAPqpe {
                                                    background-color: ${bg_0} !important;
                                                }
                                                div.ncFHed {
                                                    background-color: ${bg_1} !important;
                                                }
                                                div.ziS7vd {
                                                    background-color: ${bg_0} !important;
                                                }
                                                div.KKjvXB {
                                                    background-color: ${bg_0} !important;
                                                }
                                                div.wSo7x {
                                                    background-color: ${bg_1} !important;
                                                    color: ${fg_1} !important;
                                                }`));
        document.getElementsByTagName("head")[0].appendChild(css);
        console.log(css);
    };
 
    // instantiate and run 
    var main = new main();
})();

