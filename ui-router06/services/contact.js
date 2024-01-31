angular.module('routing').service('contactService', function($http){
    var service = {
        getData : function(){
            
             return $http.get('https://dummyjson.com/products/1')
        }
    }
    return service
})