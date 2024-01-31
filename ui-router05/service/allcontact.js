angular.module('routing').service('allcontactService', function($http){
    var service = {
        getAllContact : function(){
          return $http.get('/data/allcontact.json').then(function(res){
            return res.data
          })
        } ,
        getContact : function(id){

          return service.getAllContact().then(function(contact){
            return contact.find(function(con){
              return con.id == id
            })

           })
            
          
        }
    }
    return service
})