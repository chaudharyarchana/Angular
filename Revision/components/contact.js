angular.module('routing').component('contact',{
    bindings: {contactSolved: '<'},
    template:'<h1>Hello {{$ctrl.var1}}</h1>' +
    '<h2> {{$ctrl.contactSolved.title}} </h2>'+ 
    '<button ng-click="$ctrl.handleVar1()">change var1 </button>',
    controller: function(){
        this.var1 = "i am variable 1" ;
        this.handleVar1 = function(){
            this.var1="i am changed"
        }
    }
})