if(window.location.pathname.startsWith('/gag/')){
$('body').on('DOMNodeInserted','div.comment-embed>div:not(.comment-box)', function(evt){
    "use strict";
    var comment = $(evt.target);
    var contentpart = comment.find('.content');
    checkComment(contentpart);
});
}
function checkComment(contentpart){
    "use strict";
    if(contentpart.text().indexOf('**insert ') > 0){
        var result = contentpart.text().match(/\*\*insert ([^*]+)\*/);
        if(!result)
            return;//incomplete
        var gif = result[1];
        
        //todo can't we use this?
        //https://memefulsearch.github.io/
	switch(gif){
	    case "sausage girl":
	        contentpart.html($('<img src="http://img-comment-fun.9cache.com/media/e96ed8aa142550343538852918_700wa_0.gif">'));
		break;
	    case "look at those boobs":
	        contentpart.html($('<img src="http://i0.kym-cdn.com/photos/images/original/000/196/206/1100-boobs.png">'));
		break;
	}
    }
}
$('.comment-embed').find('.content').each(function(index,item){checkComment($(item));});
