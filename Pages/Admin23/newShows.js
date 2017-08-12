var app = angular.module('culturalHall');
app.controller('showCtrl', function($scope, parseService){
    $scope.shows = [];
    var getShowData = function() {
        parseService.getShowData().then(function(data){
            debugger;
            $scope.shows = data.data.results;
        });
    }

    getShowData();

    $scope.costcoShows = [];
    $scope.postShowData = function(){
        var newShow = {
            store: $scope.costcoStore,
            startDate: new Date($scope.startDate),
            endDate: new Date($scope.endDate)
        }
        parseService.postShowData(newShow).then(function(){
            debugger;
            getShowData();
        })
        $scope.costcoStore = '';
        $scope.startDate = '';
        $scope.endDate = '';
    }

    $scope.changeShow = function(obj){
        obj.status = "yellow";
        debugger;
        parseService.updateData(obj).then(function(){
            getShowData();
        })
    }

    $scope.deleteShow = function(obj){
        parseService.deleteData(obj).then(function(){
            getShowData();
        })

    }



});
