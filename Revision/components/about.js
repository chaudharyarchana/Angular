angular.module('routing').component('about',{
    bindings:{personData : '<'},
    
  template: '<h3>Some people:</h3>' +
  '<ul>' +
  '  <li ng-repeat="person in $ctrl.personData">' +
  '    <a ui-sref="person({ personId: person.id })">' +
  '      {{person.name}}' +
  '    </a>' +
  '  </li>' +
  '</ul>'
    
})