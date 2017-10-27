(function () {
    'use strict';


    /**
     * Controller "NewProduitController"
     */
    angular.module('ProduitApp').controller('NewProduitController',
        ['$rootScope', '$scope', '$location', '$state', 'produitService',
            function ($rootScope, $scope, $location, $state, produitService) {

                var ProduitResource = produitService.getResource();

                $scope.produitToCreate = new ProduitResource();
                $scope.alerts = [];
                $rootScope.path = $location.path();

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

                $scope.closeAlert = function (index) {
                    $scope.alerts.splice(index, 1);
                };

            }]);

})();