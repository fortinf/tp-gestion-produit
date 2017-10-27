(function () {
    'use strict';


    /**
     * Controller "HomeController"
     */
    angular.module('ProduitApp').controller('HomeController',
        ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {

            $rootScope.path = $location.path();

            }]);

})();