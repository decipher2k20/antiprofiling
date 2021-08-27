actualCode = 'document.onmousemove=function(){return false;}; var all = document.getElementsByTagName("*");for (var i=0, max=all.length; i < max; i++) {     all[i].onmouseover=function(e){return false;};   all[i].onscroll=null;  all[i].onmouseout=null;     all[i].onmouseleave=null;     all[i].onmouseenter=null;all[i].onmousemove=null;all[i].onmousescroll=null;all[i].onscroll=null;}';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);