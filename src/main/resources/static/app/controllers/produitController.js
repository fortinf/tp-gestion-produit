/**
 * Controller "ProduitController"
 */
module.controller('ProduitController', ['$scope', 'produitService', function($scope, produitService) {

    $scope.exp = '';
    $scope.currentPage = 0;
    $scope.tableSize = 5;
    $scope.tabPagination = [];

    /**
     * Lance une nouvelle recherche (avec mot clé ou pas)
     */
    $scope.nouvelleRecherche = function() {
        $scope.currentPage = 0;
        rechercherProduit();
    }

    /**
     * Lance une nouvelle recherche (avec un mot clé ou pas + le n° d'une page)
     * @param page
     */
    $scope.goToPage = function(page) {
        $scope.currentPage = page;
        rechercherProduit();
    }

    /**
     * Communique avec le server pour créer un nouveau produit
     */
    $scope.newProduit = function() {

    }

    function rechercherProduit(){
        var produitResource = produitService.getResource();
        produitResource.search({exp: $scope.exp, page: $scope.currentPage, size: $scope.tableSize}, function(produits) {
            $scope.produits = produits;
            $scope.tabPagination = new Array(produits.totalPages);
        });
    }

}]);