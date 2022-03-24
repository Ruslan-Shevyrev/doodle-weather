(function($) {
   let position = 1;
   $.fn.doodleRain=function(option){
	function random(min, max) {
	
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		
		return rand;
		
	};
	
  
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
  
      let setting={};
	  let dropCSS = {"position": "fixed",
					 "width": "5px",
					 "height": "20px",
					 "top": "-3px",
					 "background-color": "LightGray",
					 //"animation": "rain 1.2s linear infinite",
					 "z-index": "9999",
					 "border-radius": "52% 48% 30% 70% / 51% 54% 46% 49%"};

	  var $this = $(this);
      return this.each(function(){
			function getRain(){
						if (option){$.extend(setting,option);}
					 
						//for (let i=0; i<200; i++) {

						 // i++;
						 // let drop = $('<i class="rain" style="left: '+random(-2000, 2000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>');
						  let drop = $('<i class="rain"></i>');
						  drop.css(dropCSS);
						  drop.css("left", randomNumber(-$(window).height(), $(window).width())+"px");
						  let size = randomNumber(1, 3)
						  drop.css("width", Math.floor(3/size));
						  drop.css("height",Math.floor(15-size));
						//  animate_loop = function() {
							  drop.animate({ top: 1000, left: "+=200px",},800,function() {this.remove();})
							  //,function(){
						 //           animate_loop();
						//	});
						//  }
						//animate_loop();  
						//$(this).html($(this).html()+'<i class="rain" style="left: '+random(-2000, 2000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>');
						//  $(this).html($(this).html()+drop);
						//$(this).append(drop);
						//console.log($(this));
						$this.append(drop);
						//}
						//let timer=setTimeout(getRain)
			}
    /*  if (option){$.extend(setting,option);}
		 
	  //for (let i=0; i<200; i++) {

			  i++;
		  	 // let drop = $('<i class="rain" style="left: '+random(-2000, 2000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>');
			  let drop = $('<i class="rain"></i>');
			  drop.css(dropCSS);
			  drop.css("left", random(-2000, 2000)+"px");
			//  animate_loop = function() {
				  drop.delay(10*i).animate({ top: 1000, left: drop.css("left")+200},1200)
				  //,function(){
             //           animate_loop();
			//	});
			//  }
			//animate_loop();  
			//$(this).html($(this).html()+'<i class="rain" style="left: '+random(-2000, 2000)+'px;transform: translate3d(0, 0, 0);animation-delay: '+(0.01 * i)+'s"></i>');
			//  $(this).html($(this).html()+drop);
			$(this).append(drop);*/
			setInterval(getRain, 1);
			//getRain();
	  });
	  new doodleRain(setting);
   }
})(jQuery);