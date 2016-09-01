 angular.module("medicosm", ['ngRoute','ngAnimate'])

 	.controller('blueCtrl', ["$scope", function($scope){
 		document.body.className="";
 		$scope.showDetails = function(){
 			if($scope.medic1 != true){
	 			$scope.medic1 = !$scope.medic1;
	 			document.getElementById("knopkaMed1").className="button highlighted";
	 			document.getElementById("knopkaMed4").className="button highlighted";
	 			document.getElementById("knopkaMed5").className="button highlighted";
 			}else{
	 			$scope.medic1 = !$scope.medic1;
	 			document.getElementById("knopkaMed1").className="button";
	 			document.getElementById("knopkaMed4").className="button";
	 			document.getElementById("knopkaMed5").className="button";
 			}
	 	}
 	}])
 	.controller("bodyCtrl", ["$scope", "contactForm", "$location", "$anchorScroll", function($scope, contactForm, $location, $anchorScroll){
 		$scope.removeMe = function(){
	 		$scope.formShowWrite = false;
	 		$scope.formShowCall = false;
 		}
	 	$scope.makeVisible = function(param){
	 		contactForm(param, $scope);
	 	};
	 	$location.hash('up');
	 	 $anchorScroll();
	}])
	.controller("formCtrl", ["$scope", "sendEmail", "$timeout",  function($scope, sendEmail, $timeout){
		$scope.requestCall = function(form){
			console.log("requestCall : ", $scope.wasSent);
			if(!$scope.wasSent){
				sendEmail(form);
				$scope.wasSent = true;
			}
			

			$timeout(function(){
				$scope.removeMe();
			}, 1500);

		}
		$scope.writeLetter = function(form){
			console.log("writeLetter : ", $scope.wasSent);
			if(!$scope.wasSent){
				sendEmail(form);
				$scope.wasSent = true;
			}

			$timeout(function(){
				$scope.removeMe();
			}, 1500);


		}
	}])
	.controller('feedbackCtrl', ['moveLeaf', '$scope', 'sendEmail', '$location', '$anchorScroll', function(moveLeaf, $scope, sendEmail, $location, $anchorScroll){
		moveLeaf();
		$scope.sentOk = true;
		$scope.sendForm = function(form){
			$scope.sentOk = !$scope.sentOk;
			sendEmail(form);
		};
    $location.hash('up');
    $anchorScroll();

	}])
 	.factory('sendEmail', ["$http",function($http){
	 	return function(formDetails){
		 	$http.post('/sendEmail.php', formDetails)
		 		.then(function(){console.log("данные прошли")}, console.log("произошла ошибка") );
	 	}
 	}])
 	.factory("contactForm", function(){
 	// this factory services to show contact form, centralize it and make background dimmed while active
 		function centralize(param){
 			var elementWidth, elementHeight;
 			if(param == 'email'){
	 			var elementHeight = 447;
	 			var div  = document.getElementById("writePop");
 			} else if(param == 'call'){
 				var elementHeight = 318;
	 			var div  = document.getElementById("callPop");
 			}
 			var totalWidth = window.innerWidth;
	 		var totalHeight = window.innerHeight;
		 	var elementWidth = 540;
			div.style.top = (totalHeight - elementHeight)/2 + "px";
			div.style.left = (totalWidth - elementWidth)/2 + "px";
		}

	 	return function(param, $scope){
	 		if(param == 'email'){
				if($scope.formShowWrite === undefined || $scope.formShowWrite === false ){
					$scope.formShowWrite = true;
					centralize(param);
				}
				else{
					$scope.formShowWrite = false;
					centralize(param);
					}
			}else if (param == 'call'){
				if($scope.formShowCall === undefined || $scope.formShowCall === false ){
					$scope.formShowCall = true;
					centralize(param);
				}else{
					$scope.formShowCall = false;
					centralize(param);
				}
			}
		}
 	});
