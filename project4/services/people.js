
angular.module('routing').service('peopleService',function($http){
    var service = {
        getData : function(){
            
             return $http.get('/data/people.json',{cache:true})
        },
      
    }
    return service
})