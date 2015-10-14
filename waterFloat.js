function waterFloat(elm,t,d,v){
var i = elm;
var runIt = function (elm,t,d,v) {
       elm.animate({top:'+='+v},t,"linear",function(){
			elm.css({'-webkit-transform' : 'rotate('+d+'deg)'});
			elm.animate({top:'-='+v},t,"linear",function(){
				elm.css({'-webkit-transform' : 'rotate(-'+d+'deg)'});
				runIt(elm,t,d,v);
			});
	   });
   }
   runIt(i,t,d,v);
}
