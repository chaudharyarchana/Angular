angular.module('routing').component('product',{
    bindings:{productData : '<'},
    // template:'<h1>{{$ctrl.productData}} hello</h1>'

    template: 
          '<p>Description: {{$ctrl.productData[0].description}}</p>' +
          '<p>Price: ${{$ctrl.productData[0].price}}</p>' +
          '<p>Discount Percentage: {{$ctrl.productData[0].discountPercentage}}%</p>' +
          '<p>Rating: {{$ctrl.productData[0].rating}}</p>' +
          '<p>Stock: {{$ctrl.productData[0].stock}}</p>' +
          '<p>Brand: {{$ctrl.productData[0].brand}}</p>' +
          '<img src="{{$ctrl.productData[0].thumbnail}}" alt="Product Thumbnail">' +
          '<h2>Additional Images</h2>' +
          '<div ng-repeat="image in $ctrl.productData[0].images">' +
          '  <img src="{{image}}" alt="Product Image">' +
          '</div>'
})