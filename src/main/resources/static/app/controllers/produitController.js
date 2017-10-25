/**
 * Controller "ProduitController"
 */
module.controller('ProduitController', ['$scope', 'produitService', function($scope, produitService) {

    var ProduitResource = produitService.getResource();

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
        if ($scope.newProduitForm.$valid) {
            var produit = new ProduitResource();
            produit.libelle = $scope.produit.libelle;
            produit.description = $scope.produit.description;
            produit.prix = $scope.produit.prix;
            produit.$save();
        }
    }

    function rechercherProduit(){
        ProduitResource.search({exp: $scope.exp, page: $scope.currentPage, size: $scope.tableSize}, function(produits) {
            $scope.produits = produits;
            $scope.tabPagination = new Array(produits.totalPages);
        });
    }

}]);