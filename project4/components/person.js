angular.module('routing').component('person',{
    bindings:{personData :'<'},
    template:'<h1>person</h1>' +
    '<div>Name: {{$ctrl.personData.name}}</div>' +
            '<div>Id: {{$ctrl.personData.id}}</div>' +
            '<div>Company: {{$ctrl.personData.company}}</div>' +
            '<div>Email: {{$ctrl.personData.email}}</div>' +
            '<div>Address: {{$ctrl.personData.address}}</div>' +
            
            '<button ui-sref="people">Close</button>'
})