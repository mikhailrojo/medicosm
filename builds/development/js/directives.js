angular.module("medicosm")
		.directive("myFooter", [function(){
			return {
				restrict: 'E',
				templateUrl: '/views/footer.html'
			}
		}])
		.directive('myHeader', ['$location', '$rootScope', function($location, $rootScope){
	 	function linkFn(scope, element, attrs){
	 		//фунция чтобы кнопка бутерброд превращалась в крестик при нажатии
	 		document.getElementById("hamburger").addEventListener("click", function(e) {
		 		e.preventDefault();
		 		var headerNav = document.getElementById("header-nav");
		 		(headerNav.classList.contains("active") === true) ? headerNav.classList.remove("active") : headerNav.classList.add("active");
		 		(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		 	});
		 	// закрываем меню когда щелкнули на меню
		 	var header = angular.element(document).find("header")[0];
	 		if(attrs.data == 'green'){
	 			header.style.backgroundColor = "rgb(102,188,41)";
	 		}
	 		changeColour($location.url());
	 			$rootScope.$on('$locationChangeSuccess', function(){
	 				changeColour($location.url());
	 				var headerNav = document.getElementById("header-nav").classList.remove("active");
	 				document.getElementById("hamburger").classList.remove("active");
	 			});
	 			function changeColour(url){
	 					document.body.style.backgroundPositionY = "0";
	 					document.body.className="";
	 					document.getElementById("bodyDiv").className="";
		 				switch (url){
						case '/vacancy':
			 					document.body.style.backgroundPositionY = "180px";
			 					header.style.backgroundColor = "rgb(75, 75, 75)";
			 					document.body.className="vacancy";
			 				break;
			 				case '/feedback#up':
			 					document.body.className="feedback";
			 					header.style.backgroundColor = "rgb(75, 75, 75)";
			 					document.getElementById("bodyDiv").className="feedbackLeaves";
			 				break;
			 				case '/contacts':
			 				case '/construction':
			 				case '/about':
			 					header.style.backgroundColor = "rgb(75, 75, 75)";
			 				break;

			 				case '/':
			 				case '/sanitary':
			 					header.style.backgroundColor = "rgb(102,188,41)";
			 				break;

			 				case '/medicine':
			 					header.style.backgroundColor = "rgb(0,84,141)";
			 				break;

			 				case '/cosmetics':
			 					header.style.backgroundColor = "rgb(154, 48, 86)";
			 				break;

			 				default:
			 					header.style.backgroundColor = "rgb(102,188,41)";
		 				}
	 				}
	 		}
	 	return {
		 	restrict: 'E',
		 	templateUrl: 'views/header.html',
		 	link: linkFn
	 	}
 	}])
 	.directive("newsPanel", ['$interval', '$timeout', function($interval, $timeout){
	 	function link(scope, element, attributes){
	 		var images = element.children()[0].children;

	 		if(images.length > 1){
				var newsBlocks = element.children()[1].children;
				var pointers = element.children()[2].children[0].children;
				var n = 0;
				changeImage(0);

				$interval(function(){
					n++;
					n = n % images.length;
					changeImage(n);
				},10000);

				function changeImage(n){
					for (var i = 0; i < images.length; i++){
						(function(){
							images[i].style.opacity = "0";
							newsBlocks[i].style.display = "none";
						})(i);
					}
					images[n].style.opacity = "";
					newsBlocks[n].style.display = "";
				}

				for (var i = 0; i < pointers.length; i++){
						(function(){
							var number = i;
							pointers[i].addEventListener("click", function(){
								n = number;
								changeImage(number);
							}, false);
						})(i);
					}
		 		}

		}

		    return {
    		restrict: 'E',
    		templateUrl: '/views/directive/newsPanel.html',
        	link: link
    	}
	}])

	.factory("moveLeaf", function(){
		return function(){
			document.onmousemove = function(event){
				var initialX = event.clientX;
				var initialY = event.clientY;
				doParallax(initialX, initialY);
				}

			function doParallax(mouse_x, mouse_y){
				if (document.body.className == "feedback") {
					var body = document.body;
					body.style.backgroundPositionX = "0px";
					body.style.backgroundPositionY = "0px";

					var shift1, shift2;
				    var sh_1=30;
				    var sh_2=30;
				    shift1=-Math.round(sh_1*mouse_x/body.clientWidth);
				    shift2=-Math.round(sh_1*mouse_y/body.clientWidth);

				    body.style.backgroundPositionX=(shift1 + parseInt(body.style.backgroundPositionX))+'px';
				    body.style.backgroundPositionY=(shift2 + parseInt(body.style.backgroundPositionY))+'px';
				    }
				}
			}
	});
