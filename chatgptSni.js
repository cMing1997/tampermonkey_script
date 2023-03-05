// ==UserScript==
// @name         chatgpt 截图助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shows how to use babel compiler
// @author       wuXinTongXue
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require      https://html2canvas.hertzen.com/dist/html2canvas.js
// @match        *://chat.openai.com/chat/*
// @grant        GM_registerMenuCommand
// @grant        GM_download
// @match        <$URL$>
// @icon         <$ICON$>
// ==/UserScript==

(function() {
    'use strict';
    function createScreenshot(){
        const main = document.querySelector("body main").querySelector(`[class^="react-scroll-"] .flex`);
        console.log(main);
        if(!main) return false;
        window.html2canvas(main).then(function(canvas) {
            const url = canvas.toDataURL('image/png');
            const name = document.title;
            GM_download(url,name)
            console.log(url);
        });
    };
    GM_registerMenuCommand("分享本页内容",createScreenshot)
    // Your code here...
})();
