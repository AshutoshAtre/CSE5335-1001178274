angular.module('projectOneController', [])
	.controller('mainController', ['$scope','$http', function($scope, $http) {
		$scope.mapHidden = true;
		$scope.map = null;
		// Function to fetch data from json file and display map
		$scope.fetchData = function(){
			$scope.mapHidden = false;
			$scope.locations = [];
			// GET request definition
			var req = {
				method: 'GET',
				url: 'http://localhost:8081/getLocations',
				headers: {
				   'Content-Type': 'application/json'
				}
			}
			// GET request
			$http(req).then(function(response){
				//success callback
				if (response.status == 200) {
					$scope.locations = response.data.location;
					console.log(response.data.location);
					$scope.initMap();
				} else {
					alert("Error: " + response);
					$scope.mapHidden = true;
				}
			}, function(response){
				//error callback
				if(typeof response.data.message === 'undefined')
					alert("Error: " + response.statusText);
				else
					alert("Error: " + response.data.message);
			});
		}
		//Function to hide map on click of hide button
		$scope.hideMap = function(){
			$scope.mapHidden = true;
		}
		//Function to intialize map
		$scope.initMap = function(){
			var mapOptions = { mapTypeId: google.maps.MapTypeId.ROADMAP, zoom:10 };
			$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    		geocoder = new google.maps.Geocoder();

    		/*Bound default address to US*/
   			geocoder.geocode({'address': 'US'}, function (results, status) {
        		var ne = results[0].geometry.viewport.getNorthEast();
        		var sw = results[0].geometry.viewport.getSouthWest();
        		$scope.map.fitBounds(results[0].geometry.viewport);   
        		$scope.plotPlaces();            
    		});
		}
		//Function to plot locations on the graph
		$scope.plotPlaces = function(){
			var latLng = { lat: 0, lng: 0};
			for(var i = 0; i < $scope.locations.length; i++){
				latLng = { lat: $scope.locations[i].latitude,
					lng: $scope.locations[i].longitude};
				var marker = new google.maps.Marker({
          			position: latLng,
			        map: $scope.map,
			        title: $scope.locations[i].name
			    });
			}
		}
}]);