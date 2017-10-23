var module = angular.module('ProduitApp', ['ngResource']);

module.factory('Produit', ['$resource', function($resource){
    return $resource('/produits/:produitId', {produitId: '@id'},
        {
            'search' : {url: '/produits/search', method: 'GET', params: {'exp':'@exp', page: '@page', size: '@size'}, isArray: false}
        }
    );
}]);


module.controller('ProduitCtrl', function($scope, Produit) {

    $scope.exp = '';
    $scope.currentPage = 0;
    $scope.tableSize = 5;
    $scope.tabPagination = [];
    $scope.nouvelleRecherche = function() {
        $scope.currentPage = 0;
        rechercherProduit();
    }
    $scope.goToPage = function(page) {
        $scope.currentPage = page;
        rechercherProduit();
    }

    function rechercherProduit(){
        Produit.search({exp: $scope.exp, page: $scope.currentPage, size: $scope.tableSize}, function(produits) {
            $scope.produits = produits;
            $scope.tabPagination = new Array(produits.totalPages);
        });
    }

});



