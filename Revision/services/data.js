angular.module('routing').service('dataService', function($http){
    var service = {
        getData : function(){
            // return "hello"
            return $http.get('data/data.json').then(function(resp){
                return resp.data
            })
        }
    }
    return service
})