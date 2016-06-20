angular.module('adminPanel', ['ngAnimate'])

	.controller('php', function($scope, $http){
		$http.get('./dbQuery.php').success(function(data){
		 	$scope.messages = data.slice(0, -1);
		 	console.log(data.slice(0, -1));
		});
	})

	
	
	.controller('mainCtrl', function($scope, $http){		
		$scope.editDigitInForm = function(info, $index){
			$scope.form = {digit: 0};
			$scope.form.digit = info.digit;
			$scope.form.index = $index;
		}
	$scope.changeDigit = function(form){
		$scope.info[$scope.form.index].digit = form.digit;
	}
	});

