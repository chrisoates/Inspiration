// Filename: textpaginator.js
// Created April 9, 2011 by Chris Oates

var tp = {
	init: function(){
		tp.pMax = $('p').length;
		tp.pCounter++;
		tp.animateParagraph();
	},
	
	pCounter:0,
	pMax:0,
	intervalID:0,
	
	changeParagraph: function(){
		if( tp.pCounter == tp.pMax ){
			clearInterval(tp.intervalID);
			$('body').addClass("end");
			return;
		}
		
		$('#p'+ tp.pCounter).removeClass('visible');
		tp.pCounter++;
		tp.animateParagraph();
		
	},
	
	animateParagraph: function(){
		var currPara = $('#p' + tp.pCounter);
		var baseLagTime = 1000;
		var spans = currPara.children('span');
		currPara.addClass('visible');
		spans.each(function(item, value){
			setTimeout( function(){$(value).addClass('active');}, baseLagTime*this.className.valueOf());
		});
		
		setTimeout(tp.changeParagraph, (spans.length*baseLagTime+3000));
	}
};

$(document).ready(function(){
	tp.init();
});