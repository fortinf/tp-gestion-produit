/**
 * Module "ProduitApp" de l'application AngularJs
 * @type {angular.Module}
 */
var module = angular.module('ProduitApp', ['ngResource', 'ui.router']);

module.config(['$stateProvider', router]);

/**
 * Configuration des routes de l'application "ProduitApp"
 * @param $stateProvider
 */
function router($stateProvider) {
    var homeProduitState = {
        name : 'homeProduitState',
        url : '/produit/home',
        template :'<h1>{{ Home.message }}</h1>',
        controller : function () {
            this.message = 'Bienvenue';
        },
        controllerAs : 'Home'
    };

    var searchProduitState = {
        name : 'searchProduitState',
        url : '/produit/search',
        templateUrl : 'app/views/produit/search.html',
        controller : 'ProduitController'
    };

    var newProduitState = {
        name : 'newProduitState',
        url : '/produit/new',
        templateUrl : 'app/views/produit/new.html',
        controller : 'ProduitController'
    };

    $stateProvider.state(homeProduitState);
    $stateProvider.state(searchProduitState);
    $stateProvider.state(newProduitState);
}




