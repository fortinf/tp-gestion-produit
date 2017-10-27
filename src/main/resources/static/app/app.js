(function () {
    'use strict';

    /**
     * Module "ProduitApp" de l'application AngularJs
     * @type {angular.Module}
     */
    var module = angular.module('ProduitApp', ['ngResource', 'ui.router', 'ngMessages', 'ui.bootstrap']);

    module.config(['$stateProvider', '$locationProvider', router]);

    module.controller('MainController', ['$rootScope', '$location', function ($rootScope, $location) {
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
            controller: 'ProduitController'
        };

        var searchProduitState = {
            name: 'searchProduitState',
            url: '/produit/search',
            templateUrl: 'app/views/produit/search.html',
            controller: 'ProduitController'
        };

        var newProduitState = {
            name: 'newProduitState',
            url: '/produit/new',
            templateUrl: 'app/views/produit/new.html',
            controller: 'ProduitController'
        };

        $stateProvider.state(homeProduitState);
        $stateProvider.state(searchProduitState);
        $stateProvider.state(newProduitState);

        $locationProvider.html5Mode(true);
    }
})();



