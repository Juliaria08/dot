// ==UserScript==
// @name         Redirect Youtube to Cloudtube
// @version      1.0
// @description  Converts youtube.com links to tube.cadence.moe links
// @author       lovetocode999 <lovetocode999@gmail.com
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=www.youtube.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

function test(url){
    return !!url.match(/^(|http(s?):\/\/)(|www.)youtube.com(\/.*|$)/gim);
}

function getNewPagePlease(url){
    return 'https://invidious.fdn.fr' + url.split('youtube.com').pop();
}

function fixYoutubeStuff(){
    var links = Array.prototype.slice.call(document.links, 0);
    links.filter(function(link){
        if(test(link.href)){
            var greatNewLink = getNewPagePlease(link.href);
            if(link.hasAttribute('data-outbound-url')) link.setAttribute('data-outbound-url', greatNewLink);
            link.setAttribute('href', greatNewLink);
        }
    });
}

if(test(window.location.href)){window.location.assign(getNewPagePlease(window.location.href));}

window.onload = fixYoutubeStuff;
setInterval(fixYoutubeStuff, 50);
console.log("Test");
