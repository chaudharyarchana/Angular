angular.module('routing').component('allcontact',{
    bindings: {allcontactData:'<'},
    template: '<div ng-repeat="contact in $ctrl.allcontactData">' +
    '<a ui-sref="contact({contactId: contact.id})">{{contact.name}}</a>' + 
    '</div>'
})