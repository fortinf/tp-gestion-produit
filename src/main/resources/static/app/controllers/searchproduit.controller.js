(function () {
    'use strict';


    /**
     * Controller "SearchProduitController"
     */
    angular.module('ProduitApp').controller('SearchProduitController',
        ['$rootScope', '$scope', '$location', '$state', 'produitService',
            function ($rootScope, $scope, $location, $state, produitService) {

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
                    produitService.rechercherProduit($scope.exp, $scope.currentPage, $scope.tableSize).then(function (data) {
                        $scope.produits = data;
                        $scope.tabPagination = new Array($scope.produits.totalPages);
                    });

                }

                /**
                 * Lance une nouvelle recherche (avec un mot clé ou pas + le n° d'une page)
                 * @param page
                 */
                $scope.goToPage = function (page) {
                    $scope.currentPage = page;
                    produitService.rechercherProduit($scope.exp, $scope.currentPage, $scope.tableSize).then(function (data) {
                        $scope.produits = data;
                        $scope.tabPagination = new Array($scope.produits.totalPages);
                    });

                }


            }]);

})();