angular.module('routing',['ui.router']).config(function($stateProvider){
    var states = [
        {
           name:'home',
           url: '/home',
           template:'<h1>Hello I am Home</h1>' 
        },
        {
            name:'allcontact',
            url:'/allcontact',
            component: 'allcontact',
            resolve:{
                allcontactData : function(allcontactService){
                     return allcontactService.getAllContact()
                    
                }
            }
        },
        {
            name:'contact',
            url:'/allcontact/{contactId}',
            component:'contact',
            resolve:{
                contactData : function(allcontactService,$transition$){
                    return allcontactService.getContact($transition$.params().contactId)
                    // return "contact"
                }
            }
        },
        {
            name:'people',
            url:'/people',
            component:'people',
            resolve:{
                peopleData : function(peopleService){
                    // console.log(peopleService.getData())
                   return peopleService.getData()
                }
            }
        },
        {
            name:'people.person',
            url:'/{personId}',
            component:'person',
            resolve:{
                personData : function(peopleData,$stateParams){
                    return peopleData.find(function(person){
                        return person.id === $stateParams.personId
                    })
                }
            }
        }
    ]
    states.forEach((state)=> $stateProvider.state(state))
})