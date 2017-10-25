/**
 * Controller "ProduitController"
 */
module.controller('ProduitController', ["$scope", "produitService", function($scope, produitService) {

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
        var produitResource = produitService.getResource();
        produitResource.search({exp: $scope.exp, page: $scope.currentPage, size: $scope.tableSize}, function(produits) {
            $scope.produits = produits;
            $scope.tabPagination = new Array(produits.totalPages);
        });
    }

}]);