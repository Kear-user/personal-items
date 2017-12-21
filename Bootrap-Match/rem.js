// rem布局
var docEl = document.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
var clientWidth = docEl.clientWidth,rootV = 20,normalV = 375,maxV = 500;
	clientWidth = (clientWidth>maxV) ? maxV : clientWidth;
var fontSize = rootV * (clientWidth / normalV);
	docEl.style.fontSize = fontSize + 'px';
window.addEventListener(resizeEvt, function() { clientWidth = docEl.clientWidth;docEl.style.fontSize = rootV * (clientWidth / normalV) + 'px'; }, false);
