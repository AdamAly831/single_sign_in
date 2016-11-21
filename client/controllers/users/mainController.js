myApp.controller('mainController', function($scope, $location, userFactory){


	userFactory.get_user(function(data){
		$scope.current_user = data;
	})

})