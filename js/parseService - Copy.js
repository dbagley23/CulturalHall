var app = angular.module('culturalHall');

app.service('parseService', function($http, $q){
  
  //postData method here

    this.getParseData = function(){
        return $http.get('https://api.parse.com/1/classes/VintageTemples')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.getPicturesOfChristData = function(){
        return $http.get('https://api.parse.com/1/classes/POC')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.getHomeDecorData = function(){
        return $http.get('https://api.parse.com/1/classes/HomeDecor')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.getVariantData = function(obj, table){
        var defer = $q.defer();
        Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
        var variants = Parse.Object.extend(table);
        var query = new Parse.Query(variants);
        query.startsWith("Name", obj.Name);
        query.equalTo("isDefault", 1);
        query.find({
            success: function(results) {
                defer.resolve(results);
             },
            error: function(error) {
                //alert("Error: " + error.code + " " + error.message);
            }

        });
        return defer.promise;
    };

    this.getFramedData = function(obj, table){
        var defer = $q.defer();
        Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
        var variants = Parse.Object.extend(table);
        var query = new Parse.Query(variants);
        query.equalTo("ProductID", obj.ProductID);
        query.equalTo("isDefault", 0);
        query.find({
            success: function(results) {
                defer.resolve(results);
            },
            error: function(error) {
                //alert("Error: " + error.code + " " + error.message);
            }

        });
        return defer.promise;
    };


    this.getShowData = function(productid){
        return $http.get('https://api.parse.com/1/classes/Shows')
            .then(function(results){
                return results;
                //return results.data.results
            });
    };

    this.postShowData = function(obj){
        return $http({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/Shows',
            data: obj
        }).then(function(){
        return obj});
    };

    this.updateData = function(obj){
        debugger;
        return $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/Shows/' + obj.objectId,
            data: obj
        }).then(function(){
            return obj});
    };

    this.deleteData = function(obj){
        debugger;
        return $http.delete('https://api.parse.com/1/classes/Shows/' + obj.objectId).then(function(){
            return obj
        });
    };

    this.getData = function(){
        return $http.get('https://api.parse.com/1/classes/Shows')
            .then(function(results){
                return results.data.results
            });
    };


})

//  this.getParseData = function() {
//  Parse.initialize("KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn", "49KjJV6PpRAnzsHeFf8VbTVxDvKpd4eBdhQUffuo");
//  var vintageTemples = Parse.Object.extend("VintageTemples")
//  var queryObject = new Parse.Query(vintageTemples)
//  queryObject.limit(1000)
//  return queryObject.find({
//    success: function (results) {
//    var myArray = results.map(function(temple){
//      return{
//        name: temple.attributes.Name,
//        img: temple.attributes.Image
//      }
//    })
//    return myArray
//    },
//    error: function (error) {
//    debugger;
//      alert("Error: " + error.code + " " + error.message);
//  }  });
//}
//

