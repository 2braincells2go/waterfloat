function waterFloat(elm,t,d){
var i = elm;
var runIt = function (elm,t,d) {
       elm.animate({top:'+=8'},t,"linear",function(){
			elm.css({'-webkit-transform' : 'rotate('+d+'deg)'});
			elm.animate({top:'-=8'},t,"linear",function(){
				elm.css({'-webkit-transform' : 'rotate(-'+d+'deg)'});
				runIt(elm,t,d);
			});
	   });
   }
   runIt(i,t,d);
}
