(function () {
    'use strict';

    /**
     * Module "ProduitApp" de l'application AngularJs
     * @type {angular.Module}
     */
    var module = angular.module('ProduitApp', ['ngResource', 'ui.router', 'ngMessages', 'ui.bootstrap']);

    module.config(['$stateProvider', '$locationProvider', router]);

    module.controller('MainController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
        $rootScope.path = $location.path();
    }]);

    /**
     * Configuration des routes de l'application "ProduitApp"
     * @param $stateProvider
     */
    function router($stateProvider, $locationProvider) {

        var homeProduitState = {
            name: 'homeProduitState',
            url: '/produit/home',
            templateUrl: 'app/views/produit/home.html',
            controller: 'HomeController'
        };

        var searchProduitState = {
            name: 'searchProduitState',
            url: '/produit/search',
            templateUrl: 'app/views/produit/search.html',
            controller: 'SearchProduitController'
        };

        var newProduitState = {
            name: 'newProduitState',
            url: '/produit/new',
            templateUrl: 'app/views/produit/new.html',
            controller: 'NewProduitController'
        };

        var updateProduitState = {
            name: 'updateProduitState',
            url: '/produit/update/{produitId:int}',
            templateUrl: 'app/views/produit/update.html',
            controller: 'UpdateProduitController'
        };

        $stateProvider.state(homeProduitState);
        $stateProvider.state(searchProduitState);
        $stateProvider.state(newProduitState);
        $stateProvider.state(updateProduitState);

        $locationProvider.html5Mode(true);
    }
})();



