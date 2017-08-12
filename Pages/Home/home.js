var app = angular.module('culturalHall');
app.controller('homePageCtrl', function($scope, dataService){
    //$scope.shows = [];
    //var getShowData = function() {
        //parseService.getShowData().then(function(data){
            //$scope.shows = data.data.results;
        //});
    //}

    //getShowData();

   	$scope.shows = dataService.getShowData()

});
