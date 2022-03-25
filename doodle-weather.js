(function($) {

   $.fn.doodleRain=function(option){
  
	let setting={size: 5, wind: 0, sizeKoef: 5, strength: 20};
	let dropCSS = 	{"position": "fixed",
					 //"width": "3px",
					 //"height": "15px",
					 "top": "-50px",
					 "background-color": "gray",
					 "z-index": "9999",
					 //"border-radius": "32% 68% 0% 100% / 19% 100% 0% 81% ",
					 "border-radius": "40% 60% 46% 54% / 78% 77% 23% 22%",
					 //"box-shadow": "inset 10px 10px 10px rgba(0,0,0,0.05),15px 25px 10px rgba(0,0,0,0.1),15px 20px 20px rgba(0,0,0,0.05),inset -10px -10px 15px rgba(255,255,255,0.9)"
					};
	let lightningCSS = {"position":"absolute","width": "400","height": "300","top": "0","left":"0","background": "transparent","background-color": "transparent","background-image": "none"};
	let lightningEnd = true;
	let w = 0;
	let h = 0;
	
	
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	function random(min, max) {
		return Math.random() * (max - min + 1) + min;
	}
	
	
	if (option){$.extend(setting,option);}
	var $this = $(this);
	
    return this.each(function(){

		/*	function drawLightning() {
			  for (var i = 0; i < lightning.length; i++) {
				var light = lightning[i];

				light.path.push({
				  x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
				  y: light.path[light.path.length - 1].y + (random(0, light.yRange))
				});

				if (light.path.length > light.pathLimit) {
				  lightning.splice(i, 1);
				}

				ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
				ctx3.lineWidth = 3;
				if (random(0, 15) === 0) {
				  ctx3.lineWidth = 6;
				}
				if (random(0, 30) === 0) {
				  ctx3.lineWidth = 8;
				}

				ctx3.beginPath();
				ctx3.moveTo(light.x, light.y);
				for (var pc = 0; pc < light.path.length; pc++) {
				  ctx3.lineTo(light.path[pc].x, light.path[pc].y);
				}
				if (Math.floor(random(0, 30)) === 1) { //to fos apo piso
				  ctx3.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
				  ctx3.fillRect(0, 0, w, h);
				}
				ctx3.lineJoin = 'miter';
				ctx3.stroke();
			  }
			};

		function animateLightning() {
		  clearCanvas3();
		  lightTimeCurrent++;
		  if (lightTimeCurrent >= lightTimeTotal) {
			createLightning();
			lightTimeCurrent = 0;
			lightTimeTotal = 200;  //rand(100, 200)
		  }
		  drawLightning();
		}*/

		function getRain(){
				//console.log($('.drop').length)
				let isLightning = randomNumber(1, 10);
				for (let i=0; i<setting["strength"]; i++) {
					let drop = $('<i class="drop"></i>');
					drop.css(dropCSS);
					let size = randomNumber(1, 3);
					let speedKoef = randomNumber(1, 3);
					drop.css("left", randomNumber(-$(window).height(), $(window).width())+"px");
					drop.css("width", Math.floor(setting["size"]/size));
					drop.css("height",Math.floor((setting["size"]*setting["sizeKoef"])-size));
					drop.delay(i).animate({ top: $(window).height()+50, left: "+="+setting["wind"]},400*speedKoef,function() {this.remove();})
					$this.append(drop);
				}
				
				
				if(isLightning===10 && lightningEnd===true){
					lightningEnd = false;
					let lightning = $('<canvas class="lightning" id="lightning"></canvas>');
					lightning.css(lightningCSS);
					//lightning.css("width", $(window).width());
					lightning.css("height",$(window).height()-3);
					lightning.css("left", randomNumber(0, $(window).width())+"px");
					$this.append(lightning);
					let lightningArr = [];
					//console.log(lightning);
					let ctx = lightning[0].getContext('2d');
					//let ctx = document.getElementById("lightning").getContext('2d');
					let lightTimeCurrent = 0;
					let lightTimeTotal = 0;
					
					function createLightning() {
						  let x = random(100, w - 100);
						  let y = random(0, h / 4);

						  let createCount = random(1, 3);
						  for (let i = 0; i < createCount; i++) {
							single = {
							  x: x,
							  y: y,
							  xRange: random(5, 30),
							  yRange: random(10, 25),
							  path: [{
								x: x,
								y: y
							  }],
							  pathLimit: random(40, 55)
							};
							lightningArr.push(single);
						  }
						};
						
					function drawLightning() {
						  for (let i = 0; i < lightningArr.length; i++) {
							let light = lightningArr[i];

							light.path.push({
							  x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
							  y: light.path[light.path.length - 1].y + (random(0, light.yRange))
							});

							if (light.path.length > light.pathLimit) {
							  lightningArr.splice(i, 1);
							}

							ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
							ctx.lineWidth = 3;
							if (random(0, 15) === 0) {
							  ctx.lineWidth = 6;
							}
							if (random(0, 30) === 0) {
							  ctx.lineWidth = 8;
							}

							ctx.beginPath();
							ctx.moveTo(light.x, light.y);
							for (let pc = 0; pc < light.path.length; pc++) {
							  ctx.lineTo(light.path[pc].x, light.path[pc].y);
							}
							if (Math.floor(random(0, 30)) === 1) {
							  ctx.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
							  ctx.fillRect(0, 0, w, h);
							}
							ctx.lineJoin = 'miter';
							ctx.stroke();
						  }
						};
						function animateLightning() {
							lightTimeCurrent++;
							if (lightTimeCurrent >= lightTimeTotal) {
								createLightning();
								lightTimeCurrent = 0;
								lightTimeTotal = 200;  //rand(100, 200)
							}
							drawLightning();
						}
					
					function animloop() {
					  animateLightning();
					  requestAnimationFrame(animloop);
					}
					animloop();
					
					function remove(){
						$('#lightning').remove();
						lightningEnd = true;
					};
					
					setTimeout(remove, 1000);
					//$('#lightning').remove();
					
				}
				setTimeout(getRain, 1);
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
			//setInterval(getRain, 1);
			getRain();
	  });
	  new doodleRain(setting);
   }
})(jQuery);