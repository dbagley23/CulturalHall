var app = angular.module('culturalHall');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'KE8IkvnyIEYnV6kdxgnlT8nyK1GVrP8OXSzIlPkn', 'X-Parse-REST-API-Key': 'knb3X6aLArGsxBBIUTsaiB7co0clXQPgPDS0j1Wg'}
      //Parse.initialize("CLZywhNOb86LSo2t3DZXGyJk9zrrzblNvWg26hK1", "EsmHvPWp16KkjTDLhMjV1QA6ToeVVMXkeSErx9yo");
      return config;
    }
  };
});
