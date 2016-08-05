 angular.module("medicosm")
 	.config(["$routeProvider","$locationProvider",  function($routeProvider, $locationProvider){
 		$routeProvider
 			.when('/contacts', {
		 	templateUrl: 'views/contacts.html'
		 	})
		 	.when('/', {
			 	templateUrl: 'views/mainPage.html'
		 	})
		 	.when('/about', {
			 	templateUrl: 'views/about.html'
		 	})
		 	.when('/medicine', {
			 	templateUrl: 'views/medicine.html',
			 	controller: 'blueCtrl'
		 	})
		 	.when('/cosmetics', {
			 	templateUrl: 'views/cosmetics.html'
		 	})
		 	.when('/vacancy', {
			 	templateUrl: 'views/vacancy.html'
		 	})
		 	.when('/sanitary', {
			 	templateUrl: 'views/sanitary.html'
		 	})
		 	.when('/contacts', {
			 	templateUrl: 'views/contacts.html'
		 	})
		 	.when('/feedback', {
			 	templateUrl: 'views/feedback.html',
			 	controller: 'feedbackCtrl'
		 	})
		 	.when('/certification', {
			 	templateUrl: 'views/certification.html'
		 	})
		 	.when('/medicine/perchatki', {
			 	templateUrl: 'views/construction.html',
			 	controller: 'blueCtrl'
		 	})
		 	.when('/cosmetics/perchatki', {
			 	templateUrl: 'views/construction.html'
		 	})
		 	.otherwise({
			 	templateUrl: 'views/construction.html'
		 	});
    }])
