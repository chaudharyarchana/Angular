
angular.module('routing').service('peopleService',function($http){
    var service = {
        getData : function(){
            
             return $http.get('/data/people.json',{cache:true}).then(function(res){
                return res.data
             })
        },
        getPerson: function(id) {
            function personMatchesParam(person) {
              return person.id === id;
            }
            
            return service.getData().then(function (people) {
              return people.find(personMatchesParam)
            });
          }
        // getPerson : function(id){
        //       let data = service.getData()
        //       return data.then(function(data){
        //         data.find(data => data.id == id)
        //       })

            
        // }
      
    }
    return service
})