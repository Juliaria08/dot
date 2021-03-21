// ==UserScript==
// @name            Duolingo Gruvbox
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Gruvbox for Duolingo
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/www\.duolingo\.com\/.*/
// @released        YYYY-MM-DD
// @updated         YYYY-MM-DD
// @compatible      Greasemonkey
// @run-at          document-end
// ==/UserScript==
 
(function(){
 
    function main(){
        var fg = "#ebdbb2";
        var bg0 = "#282828";
        var bg1 = "#3c3836";
        var blue = "#458588";
        var css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(document.createTextNode(`
            body {
                background-color: ${bg0} !important;
                color: ${fg} !important;
            }
            div._3YEom {
                background-color: ${bg0} !important;
                color: ${fg} !important;
            }
            div.goj2_ {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div._1_p4S {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div.Mr3if {
                color: #fbf1c7 !important;
            }
            div._2O43A {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div.Yth9H {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div._3Gj5_ {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div.GVcJz {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            div.AjBUV {
                background-color: ${bg1} !important;
                color: ${fg} !important;
                border-radius: 16px;
            }
            div._3uC-w {
                background-color: ${bg1} !important;
                color: ${fg} !important;
                border-radius: 16px;
            }
            div._3yA12:after {
                background-color: ${bg1} !important;
                border: none;
            }
            div._399cc {
                background-color: ${bg0} !important;
            }
            div.YQ0lZ {
                background-color: ${bg1} !important;
            }
            div._3dRS9 {
                background-color: ${bg1} !important;
            }
            div.sgs9X {
                background-color: ${bg1} !important;
            }
            div._1Q4WV {
                background-color: ${bg1} !important;
            }
            div._1dj9x { 
                background-color: ${bg1} !important;
            }
            div._2cmOB {
                background-color: ${bg1} !important;
            }
            div._3izPU {
                background-color: ${bg1} !important;
            }
            div._11rtD {
                background-color: ${bg1} !important;
            }
            div._2nhmY {
                display: none !important;
            }
            div._2_Pxj {
                background-color: ${bg0} !important;
            }
            div._1bYhI {
                background-color: ${bg1} !important;
            }
            div._1zsgz {
                background-color: ${bg1} !important;
            }
            div._1VFDm {
                background-color: ${bg1} !important;
            }
            div._1eZU8 {
                color: ${fg} !important;
            }
            p._1lJ31 {
                color: ${fg} !important;
            }
            a.yXp5g {
                background-color: ${bg1} !important;
            }
            a._3_B9a:after {
                background-color: ${bg1} !important;
                border: none;
            }
            a._1gs94 {
                background-color: ${blue} !important;
                color: ${fg} !important;
            }
            a._1gs94:after {
                background-color: ${blue} !important;
                color: ${fg} !important;
                border: none !important;
            }
            a._3iVqs {
                background-color: ${blue} !important;
                color: ${fg} !important;
            }
            a._3iVqs:after {
                background-color: ${blue} !important;
                color: ${fg} !important;
                border: none !important;
                display: none !important;
            }
            button {
                background-color: ${blue} !important;
                color: ${fg} !important;
                border-radious: 16px;
            }
            button:after {
                background-color: ${blue} !important;
                color: ${fg} !important;
                border: none !important;
            }
            button._20MSV {
                display: none !important;
            }
            button._2hiHn {
                background-color: ${bg0} !important;
            }
            textarea {
                background-color: ${bg1} !important;
                color: ${fg} !important;
            }
            h1 {
                color: #b8bb26 !important;
            }
            h2 {
                color: #8ec07c !important;
            }
            h3 {
                color: #689d6a;
            }
            * {
                border: none !important;
            }
        `));
        document.getElementsByTagName("head")[0].appendChild(css);
        console.log(css);
    };
 
    // instantiate and run 
    var main = new main();
})();
