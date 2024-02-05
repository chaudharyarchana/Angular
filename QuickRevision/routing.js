angular.module('routing',['ui.router']).config(function($stateProvider){
    let homeState={
        name:'home',
        url:'/',
        template:'<h1>Hello page </h1>'
    }
    let AboutState={
        name:'about',
        url:'/about',
        template:'<h1>About page </h1>'
    }
    let ServiceState={
        name:'services',
        url:'/services',
        component:'services',
        resolve:{
            serviceData : function(servicesService){
              return servicesService.getData()
            }
        }
    }
    let ProductState ={
        name:'services.product',
        url:'/{productId}',
        component:'product',
        resolve:{
            productData : function(serviceData,$stateParams){
                return serviceData.filter(function(product){
                    
                    return product.id == $stateParams.productId})
                
            }
        
        }
    }
    $stateProvider.state(homeState)
    $stateProvider.state(AboutState)
    $stateProvider.state(ServiceState)
    $stateProvider.state(ProductState)

})