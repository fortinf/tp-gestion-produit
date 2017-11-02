(function () {
    'use strict';

    /**
     *  Service "produitService"
     *  Se charge de fournir des méthodes pour traiter les produits
     */
    angular.module('ProduitApp').service('produitService', ['$q', 'ProduitResource', function ($q, ProduitResource) {

        /**
         * Recherche des produits en fonction d'une expression.
         * Retourne dans une promesse le résultat paginé.
         *
         * @param exp expression de recherche
         * @param page n° de page demandé
         * @param size taille de la page en nombre de produits affichés
         * @returns {Promise}
         */
        this.rechercherProduit = function (exp, page, size) {
            var defer = $q.defer();
            var produitResource = new ProduitResource();
            var promise = produitResource.$search({exp: exp, page: page, size: size});

            promise.then(function (data) {
                defer.resolve(data);
            });

            return defer.promise;
        }

        /**
         * Crée un nouveau produit.
         * Retourne dans une promise le produit créé.
         *
         * @param ProduitResource
         * @returns {Promise}
         */
        this.creerProduit = function (ProduitResource) {
            var defer = $q.defer();
            var promise = ProduitResource.$save();

            promise.then(function(data) {
                defer.resolve(data);
            });

            return defer.promise;
        }   

    }]);

})();