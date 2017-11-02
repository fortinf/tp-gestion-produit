(function () {
    'use strict';


    /**
     * Controller "NewProduitController"
     */
    angular.module('ProduitApp').controller('NewProduitController',
        ['$rootScope', '$scope', '$location', '$state', 'produitService', 'ProduitResource',
            function ($rootScope, $scope, $location, $state, produitService, ProduitResource) {

                $scope.modeForm = true;
                $scope.produitToCreate = new ProduitResource();
                $scope.createdProduit = new ProduitResource();
                $scope.alerts = [];
                $rootScope.path = $location.path();

                /**
                 * Si le formulaire est valide, communique avec le server pour créer un nouveau produit
                 */
                $scope.newProduit = function () {
                    if ($scope.newProduitForm.$valid) {
                        produitService.creerProduit($scope.produitToCreate).then(function (data) {
                            $scope.alerts = [
                                {type: 'success', msg: 'Création du produit réalisée avec succès!'}
                            ];
                            $scope.createdProduit = data;
                            $scope.modeForm = false;
                        });
                    }
                }

                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);

})();