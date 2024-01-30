angular.module('routing',['ui.router'])
.config(function($stateProvider){
    var peopleState = {
        name:'people',
        url:'/people',
        component:'people',
        resolve:{
            peopleData : function(peopleService){
                
                  return peopleService.getData().then(function(res){
                    console.log(res.data)
                    return res.data
                  })
                
            }
        }
       
    };
    var personState = {
        name:'person',
        url:'/person',
        component:'person'
    }
    $stateProvider.state(peopleState)
    $stateProvider.state(personState)

})