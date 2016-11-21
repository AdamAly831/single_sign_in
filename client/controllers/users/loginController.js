myApp.controller('loginController', function($scope, $location, userFactory){

	$scope.error = {};


	$scope.create_new_user = function(){

		if($scope.new_user.length > 5){
			$scope.error = {};
			userFactory.set_user($scope.new_user, function(data){
				$scope.current_user = data;
				$location.url('/users/new');
			})
		}else{
			$scope.error = {message: 'Your name must be at least 6 characters long!'};
		}

	}


})