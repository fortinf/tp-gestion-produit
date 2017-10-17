var module = angular.module('ProduitApp', ['ngResource']);

module.factory('Produit', ['$resource', function($resource){
    return $resource('/produits/:produitId', {produitId: '@id'},
        {
            'search' : {url: '/produits/search', method: 'GET', params: {'exp':'', page:0, size:5,isArray: false}}
        }
    );
}]);


module.controller('ProduitCtrl', function($scope, Produit) {

    $scope.produits = Produit.search();

});


