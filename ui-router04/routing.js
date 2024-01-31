angular.module('routing',['ui.router'])
.config(function($stateProvider){
    var peopleState = {
        name:'people',
        url:'/people',
        component:'people',
        resolve:{
            peopleData : function(peopleService){
                return peopleService.getData()
            }
        }
       
    }
    var personState = {
        name:'person',
        url:'/people/{personId}',
        component:'person',
        resolve:{
            personData : function(peopleService, $transition$){
                
                return peopleService.getPerson($transition$.params().personId);
            }
        }
    }

    $stateProvider.state(peopleState)
    $stateProvider.state(personState)

})