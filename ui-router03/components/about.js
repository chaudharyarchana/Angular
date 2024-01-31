angular.module('helloSystem').component('about',{
    template:'<h3>My name is {{$ctrl.name}}</h3>'
              + '<button ng-click="$ctrl.showName()">show</button>' ,
    
    controller : function(){
        this.name = "archana";
        this.showName = function(){
            this.name = (this.name == "archana") ? "hello" : "archana" ; 
        }
    }          
})