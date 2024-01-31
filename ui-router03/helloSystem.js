angular.module("helloSystem" , ['ui.router'])
.config(function($stateProvider){
    var states = [
        {
            name:'hello',
            url:'/hello',
            component:'hello'
        },
        {
            name:'about',
            url:'/about',
            component:'about'
        }
    ]
       
    states.forEach((state)=>{
    $stateProvider.state(state)
       
    })
})