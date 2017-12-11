(function () {
    'use strict';


    /**
     * Controller "UpdateProduitController"
     */
    angular.module('ProduitApp').controller('UpdateProduitController',
        ['$rootScope', '$scope', '$location', '$state', '$stateParams', 'produitService',
            function ($rootScope, $scope, $location, $state, $stateParams, produitService) {

                $scope.produitToUpdate = null;
                $scope.alerts = [];
                $rootScope.path = $location.path();

                var produitId = $stateParams.produitId;

                /**
                 * Récupération du produit
                 */
                produitService.getProduit(produitId).then(function(data) {
                    $scope.produitToUpdate = data;
                });

                /**
                 * Si le formulaire est valide, communique avec le server pour modifier le produit
                 */
                $scope.updateProduit = function () {
                    if ($scope.updateProduitForm.$valid) {
                        produitService.modifierProduit($scope.produitToUpdate).then(function(data) {
                            $scope.alerts = [
                                {type: 'success', msg: 'Modification du produit réalisée avec succès!'}
                            ];
                            $scope.produitToUpdate = data;
                        });
                    }
                }

                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);

})();