angular.module('routing').component('person',{
    bindings:{personData : '<'},
    template : '<h1>{{$ctrl.personData.name}}</h1>' + '<h1>{{$ctrl.personData.company}}</h1>'
})