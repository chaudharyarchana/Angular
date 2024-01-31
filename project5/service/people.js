angular.module('routing').service('peopleService',function($http){
    var service={
        getData : function(){
            return $http.get('/data/people.json').then(function(res){
                return res.data
            })
        }
    }
     return service
})