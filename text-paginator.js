// Filename: textpaginator.js
// Created April 9, 2011 by Chris Oates
// Updated April 20, 2011 by Chris Oates

var tp = {
	init: function(){
		tp.sections= $('p');
		tp.animateParagraph();
	},
	
	sections:'',
	
	pCounter:0,
	intervalID:0,
	
	changeParagraph: function(){
		if( tp.pCounter == tp.sections.length-1 ){
			clearInterval(tp.intervalID);
			$('body').addClass("end");
			return;
		}
		$(tp.sections[tp.pCounter]).removeClass('visible');
		tp.pCounter++;
		tp.animateParagraph();		
	},
	
	animateParagraph: function(){
		var currPara = $(tp.sections[tp.pCounter]);
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