angular.module('routing').component('contact',{
    bindings: {contactData : '<'},
    template: '<h1>contact is : </h1>' +
    '<h1>{{$ctrl.contactData.name}}</h1>'+
    '<h1>{{$ctrl.contactData.age}}</h1>'


})