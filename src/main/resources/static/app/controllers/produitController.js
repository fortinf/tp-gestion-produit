(function () {
    'use strict';


    /**
     * Controller "ProduitController"
     */
    angular.module('ProduitApp').controller('ProduitController',
        ['$rootScope', '$scope', '$location', '$state', 'produitService',
            function ($rootScope, $scope, $location, $state, produitService) {

        var ProduitResource = produitService.getResource();

        $scope.exp = '';
        $scope.currentPage = 0;
        $scope.tableSize = 5;
        $scope.tabPagination = [];
        $scope.produitToCreate = new ProduitResource();
        $scope.alerts = [];

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

        /**
         * Si le formulaire est valide, communique avec le server pour créer un nouveau produit
         */
        $scope.newProduit = function () {
            if ($scope.newProduitForm.$valid) {
                var promise = $scope.produitToCreate.$save();
                promise.then(function () {
                    $scope.alerts = [
                        {type: 'success', msg: 'Création du produit réalisée avec succès!'}
                    ];
                    $scope.produitToCreate = new ProduitResource();
                    //$state.reload();
                });
            }
        }


        /*
            $scope.users = User.query(paramètres);
            $scope.users.$promise.then(callback en cas de succès).catch(callback en cas d'échec);
         */

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

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