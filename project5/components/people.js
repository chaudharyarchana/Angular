angular.module('routing').component('people',{
    bindings : {peopleData :'<'},
    template:'<div >Some Peoples:' +
    '<div  ng-repeat="person in $ctrl.peopleData"> <a ui-sref="people.person({personId : person.id})" >{{person.name}}</a> </div>' +
    '</div>' + '<ui-view></ui-view>'
})