
var actualCode = 'Element.prototype._addEventListener=Element.prototype.addEventListener;Element.prototype.addEventListener=function(a,b,c){if(a!="mouseenter"&&a!="DOMMouseScroll"&&a!="scroll"&&a!="mouseenter"&&a!="mouseleave"&&a!="mouseout"&&a!="mouseover"&& a!="mousemove" && a!="scroll" && a!="mousescroll"){this._addEventListener(a,b,c);}};';
	
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

actualCode = 'Document.prototype._addEventListener=Element.prototype.addEventListener;Element.prototype.addEventListener=function(a,b,c){if(a!="mouseenter"&&a!="DOMMouseScroll"&&a!="scroll"&&a!="mouseenter"&&a!="mouseleave"&&a!="mouseout"&&a!="mouseover"&& a!="mousemove" && a!="scroll" && a!="mousescroll"){this._addEventListener(a,b,c);}};';
	
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

actualCode = 'Window.prototype._addEventListener=Element.prototype.addEventListener;Element.prototype.addEventListener=function(a,b,c){if(a!="mouseenter"&&a!="DOMMouseScroll"&&a!="scroll"&&a!="mouseenter"&&a!="mouseleave"&&a!="mouseout"&&a!="mouseover" && a!="mousemove" && a!="scroll" && a!="mousescroll") ){this._addEventListener(a,b,c);}};';
	
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

actualCode = 'var all = document.getElementsByTagName("*");for (var i=0, max=all.length; i < max; i++) {    all[i].onscroll=null; all[i].onmouseover=function(e){return false;};     all[i].onmouseout=null;     all[i].onmouseleave=null;     all[i].onmouseenter=null;all[i].onmousemove=null;all[i].onmousescroll=null;all[i].onscroll=null;}';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);

actualCode = 'delete Navigator.prototype.maxTouchPoints;';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
