// ==UserScript==
// @name         NextEpPutLocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://putlocker.is/watch-*-season-*-episode-*-online-free-putlocker.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.indexOf("-season-") > -1)
    {
        var body  = document.getElementsByTagName('body')[0];
        var season =parseInt(window.location.href.split("-season-")[1].split("-episode-")[0]);
        var episode =parseInt(window.location.href.split("-episode-")[1].split("-online")[0]);
        var seriese =window.location.href.split("-season-")[0];
        if (body.innerHTML.indexOf("This movie doesn't exist!") > -1)
        {
            if (episode>1)
            {
                season+=1;
                episode=1;
                window.location =seriese+"-season-"+season+"-episode-"+episode+"-online-free-putlocker.html";
                //http://putlocker.is/watch-jackie-chan-adventures-tvshow-season-1-episode-1-online-free-putlocker.html
            }
            else
            {
                window.alert("Thier are no more seasons");
            }
        }
        else
        {
            episode+=1;
            var style = document.createElement("style");
            var NextButton = document.createElement("div");
            NextButton.className += " FloatDiv";
            NextButton.innerHTML="<a href=\""+seriese+"-season-"+season+"-episode-"+episode+"-online-free-putlocker.html\" title=\"Go to the next episode\" style=\"color:#ffffff;\" class=\"movgr\">Ep: "+episode+"</a>";
            style.innerHTML=".FloatDiv{position:fixed;top: 123px;}";
            document.body.appendChild(NextButton);
            document.head.appendChild(style);
            // Your code here...
        }
    }
})();