angular.module('routing').component('data',{
    bindings : {dataSolved : '<'},
    
    template : '<h1 ng-repeat="person in $ctrl.dataSolved"> {{person.name}}</h1>'
})