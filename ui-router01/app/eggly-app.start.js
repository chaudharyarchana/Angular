angular.module('Eggly',[

])
.controller('MainCtrl',function($scope){
    $scope.categories=[
        {id:0 , name:"Development"},
        {id:1 , name:"Design"},
        {id:2 , name:"Data"}

    ];
    $scope.bookmarks=[
        {id:0,title:'Angular',category:'Development'},
        {id:1,title:'Python',category:'Development'},
        {id:2,title:'Figma',category:'Design'},
        {id:3,title:'Canva',category:'Design'},
        {id:4,title:'Pandas',category:'Data'},
        {id:5,title:'Matplotlib',category:'Data'},

    ]
    $scope.currentCategory = null;
    function setCurrentCategory(category){
        $scope.currentCategory = category;
    }
    $scope.setCurrentCategory = setCurrentCategory;
})
