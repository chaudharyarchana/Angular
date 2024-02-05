angular.module('routing').component('services',{
    bindings:{serviceData : '<'},
    template:'<div ng-repeat="product in $ctrl.serviceData"><a ui-sref="services.product({productId : product.id})">{{product.title}}</a> </div> <ui-view></ui-view>'
    

})