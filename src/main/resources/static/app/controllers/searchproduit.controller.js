(function () {
    'use strict';


    /**
     * Controller "SearchProduitController"
     */
    angular.module('ProduitApp').controller('SearchProduitController',
        ['$rootScope', '$scope', '$location', '$state', 'produitService',
            function ($rootScope, $scope, $location, $state, produitService) {

                var ProduitResource = produitService.getResource();

                $scope.exp = '';
                $scope.currentPage = 0;
                $scope.tableSize = 5;
                $scope.tabPagination = [];
                $rootScope.path = $location.path();

                /**
                 * Lance une nouvelle recherche (avec mot clé ou pas)
                 */
                $scope.nouvelleRecherche = function () {
                    $scope.currentPage = 0;
                    rechercherProduit();
                }

                /**
                 * Lance une nouvelle recherche (avec un mot clé ou pas + le n° d'une page)
                 * @param page
                 */
                $scope.goToPage = function (page) {
                    $scope.currentPage = page;
                    rechercherProduit();
                }

                function rechercherProduit() {
                    ProduitResource.search({
                        exp: $scope.exp,
                        page: $scope.currentPage,
                        size: $scope.tableSize
                    }, function (produits) {
                        $scope.produits = produits;
                        $scope.tabPagination = new Array(produits.totalPages);
                    });
                }

            }]);

})();