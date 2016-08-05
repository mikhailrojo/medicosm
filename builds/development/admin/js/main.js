angular.module('adminPanel', ['ngAnimate', 'ngRoute', 'ngCookies'])
	.run(function($rootScope, $location, $http, $cookies){
			$rootScope.$on("$routeChangeStart", function(event,next,current){
			console.log($rootScope.authorized);
				if($rootScope.authorized){
					console.log('проходим');
				} else{
					console.log('не проходим');
					$location.path('/login');
				}
			})
	})
	
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/login', {
				templateUrl: 'views/loginForm.html',
				controller: 'authCtrl'
			})
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html'
			})
			.when('/vacancy', {
				templateUrl: 'views/vacancy.html'
			})
			.when('/news', {
				templateUrl: 'views/news.html'
			})
			.otherwise({
				redirectTo: '/login'
			})
	})
	
	.controller('authCtrl',function($scope, $http, $cookies, $location, $rootScope){
			$scope.logMeIn = function(log){
			$http.post('api/login.php', log).success(function(result){
				console.log(result);
				if(result.pass){
			 			$rootScope.authorized = true;
			 			console.log('пароль верен');
			 			$location.path('/dashboard');
			 			
		 			} else{
			 			$location.path('/login');
			 			console.log('пароль не верен')
		 			}
			})
		}
	})
	.controller('php', function($scope, $http){
		$http.get('api/dbQuery.php').success(function(data){
		 	$scope.messages = data;
		 	console.log(data);
		});
	})
	.controller('vacancyCtrl', function($scope, $http){
		$http.get('api/vacancyQuery.php').success(function(data){
		 	$scope.vacancies = data;
		 	console.log(data);
		 	
		});
		
		$scope.addVacancy = function(vacancy){
			var send = JSON.stringify(vacancy);
			$scope.vacancy = {};
			$http.post('api/addVacancy.php', send).success(function(data){
		 		console.log(data);
		 		
		 	});
		}
		
		
	})

	.directive("upperPanel", function($http){
		function linkFn(){
			
		}
		return{
			templateUrl: 'views/upperPanel.html',
			link: linkFn
		}
	})
	
	.controller('mainCtrl', function($scope, $http, $window, $rootScope, $location){		
		$scope.editDigitInForm = function(info, $index){
			$scope.form = {digit: 0};
			$scope.form.digit = info.digit;
			$scope.form.index = $index;
		}
		$scope.changeDigit = function(form){
			$scope.info[$scope.form.index].digit = form.digit;
		}
		
		$scope.logMeOut = function(){
			console.log('разлогинились');
			$rootScope.authorized = false;
			$location.path('/login');
		}
		
		
	});

