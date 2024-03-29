// ==UserScript==
// @name            Gruvbox for mediawiki.org
// @author          lovetocode999
// @namespace       https://lovetocode999.github.io/
// @description     Gruvbox for mediawiki.com
// @license         MIT License
// @version	        0.1
// @include         /^https?:\/\/.*(mediawiki|wikipedia|wikimedia|speedsolving)\.(org|com\/wiki)\/.*/
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

        body * {
            border-color: #44403e !important;
        }

        #content {
            background-color: #282828 !important;
            color: #83a598 !important;
        }

        #mw-head,
        #mw-panel {
            background-color: #3c3836 !important;
            color: #8ec07c !important;
        }

        #mw-head div.portal,
        #mw-panel div.portal {
            background-image: none !important;
        }

        #mw-head {
            background-color: #3c3836 !important;
            background-image: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        #mw-panel,
        #p-logo {
            background-image: linear-gradient(to right, #282828, #3c3836) !important;
        }

        div.vectorTabs {
            background-image: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        div.vectorTabs ul {
            background-image: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        div.vectorTabs ul li {
            background-color: #3c3836 !important;
            background-image: none !important;
            padding: 0px 1px 0px 1px !important;
        }

        div.vectorTabs span {
            background-color: #3c3836 !important;
            background-image: linear-gradient(to bottom, #282828, #3c3836) !important;
        }

        div.vectorTabs li.selected,
        div.vectorTabs li.selected span {
            background-color: transparent !important;
            background-image: linear-gradient(to bottom, #3c3836, #282828) !important;
        }

        .mw-wiki-logo {
            filter: opacity(50%);
        }

        div#simpleSearch #searchInput {
            background-color: #282828 !important;
            padding: 0.05em 0px 0.2em 0.2em !important;
        }

        .ambox,
        .infobox,
        #toc,
        #toctitle,
        .toclevel-1 {
            background-color: #3c3836 !important;
            border-color: #44403e !important;
            color: #8ec07c !important;
        }

        .catlinks {
            background-color: #3c3836 !important;
            border-color: #44403e !important;
            color: #8ec07c !important;
        }

        .navbox {
            background-color: #3c3836 !important;
            border-color: #44403e !important;
            color: #8ec07c !important;
        }

        .navbox .th,
        .navbox .navbox-title {
            background-color: #44403e !important;
        }

        .navbox-abovebelow,
        th.navbox-group,
        .navbox-subgroup,
        .navbox-title {
            background-color: #403c3a !important;
        }

        .navbox-even {
            background-color: #282828 !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            border-color: #44403e !important;
            color: #8ec07c !important;
        }

        code {
            background-color: #44403e !important;
            border-color: #44403e !important;
            color: #8ec07c !important;
        }

        div.thumbinner {
            background-color: #3c3836 !important;
            border-color: #44403e !important;
        }

        img {
            filter: opacity(75%);
        }

        img.thumbimage {
            border-color: #44403e !important;
        }

        .mw-body .external {
            opacity: 0.5 !important;
        }

        table.wikitable {
            background-color: #282828 !important;
            border-color: #44403e !important;
            color: #83a598 !important;
        }

        table.wikitable>*>tr>th {
            background-color: #3c3836 !important;
        }
        `));
        document.getElementsByTagName("head")[0].appendChild(css)
    };
 
    // instantiate and run 
    var main = new main();
})();

