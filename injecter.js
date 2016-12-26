var s = document.createElement('script');
s.src = chrome.extension.getURL('sausage.js');

//todo unload?
(document.head || document.documentElement).appendChild(s);
