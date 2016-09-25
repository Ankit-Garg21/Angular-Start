var app = angular.module( "app", [ "ngRoute" ] );
app.controller( "StrawhatsController", StrawhatsController );

app.config( function( $routeProvider ) {
	$routeProvider
		.when( "/", {
			controller: "StrawhatsController",
			templateUrl: "pages/straw.html"
		})
		.when( "/luffy", {
			controller: "StrawhatsController",
			templateUrl: "pages/luffy.html"
		})
		.otherwise( { redirectTo: "/" } )
});

app.factory( 'strawhatsFactory', function() {
	var factory = {};
	var members =  [
	   { name:"Luffy", place: "Japan" },
	   { name: "Zoro", place: "Germany" },
	   { name: "Usopp", place: "Brazil" },
	   { name: "Sanji", place: "France" },
	   { name: "Nami", place: "America" },
	   { name: "Chopper", place: "Canada" },
	   { name: "Robin", place: "India" },
	   { name: "Franky", place: "China" },
	   { name: "Brook", place: "Britain" } 
	];
	
	factory.getMembers = function()
	{
		return members;
	}
	return factory;
});

function StrawhatsController( $scope, strawhatsFactory )
{
	$scope.strawhats = [];
	init();
	
	function init()
	{
		$scope.strawhats = strawhatsFactory.getMembers();
	}
}