angular.module('routing').component('people',{
    binding:{peopleData:'<'},
    template: '<h3>Some people:</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $ctrl.peopleData">' +
    '    <a ui-sref="person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>'
})