angular.module('routing').service('servicesService',function($http){
    var service={
        getData : function(){
            return $http.get('https://dummyjson.com/products/').then(function(res){
                // var data = res.data.slice(0,3)
                return res.data.products.slice(0,3)
            })            
        },

    }
    return service
})