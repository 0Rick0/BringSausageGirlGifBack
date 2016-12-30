if(window.location.pathname.startsWith('/gag/')){
$.ajax({'url':'https://gist.githubusercontent.com/0Rick0/a674c1e5e6b5abb1df1294abbeae6da5/raw'}).done(function(data){
    window.sausages=JSON.parse(data);
    $('.comment-embed').find('.content').each(function(index,item){checkComment($(item));});
});
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
        
	//check the sauages and if it is found add the gif
	if(window.sausages && Object.keys(window.sausages).indexOf(gif) >= 0){
	    contentpart.html($('<img src="' + sausages[gif] + '">'));
	}
    }
}
