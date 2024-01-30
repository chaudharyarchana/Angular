angular.module('routing').service('personService',function($http){
    var service = {
        getData : function(){
            
             return $http.get('/data/person.json',{cache:true}).then(function(res){
                return res.data
             })
        },
      
    }
    return service
})