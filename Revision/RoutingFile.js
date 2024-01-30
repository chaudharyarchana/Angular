angular.module('routing',['ui.router']).config(function($stateProvider){
    var helloState = {
        name:'hello',
        url:'/hello',
        template:'<h1>Hello Archana</h1>'
    }
    var aboutState = {
        name:'about',
        url:'/about',
        component:'about',
        resolve : {
            personData : function(personService){

               return personService.getData()
                
            }
        }
    }
    var contactState = {
        name:'contact',
        url:'/contact',
        component: 'contact',
        resolve : {
            contactSolved : function(contactService){
               return contactService.getData().then(function(response) {
                    // console.log(response.data)
                    return response.data
                })
            }
        }
    }
    var dataState={
        name:'data',
        url:'/data',
        component:'data',
        resolve: {
           dataSolved : function(dataService){
              return dataService.getData()
           }
        }
    }
    $stateProvider.state(helloState)
    $stateProvider.state(aboutState)
    $stateProvider.state(contactState)
    $stateProvider.state(dataState)
    


})