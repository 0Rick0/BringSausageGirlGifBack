var s = document.createElement('script');
if(window.chrome){
    s.src = chrome.extension.getURL('sausage.js');
}else if(window.browser){
    s.src = browser.extension.getURL("sausage.js");
}else{
   alert('What kind of browser is this? I don\'t know how to use it!');
}

//todo unload?
(document.head || document.documentElement).appendChild(s);
