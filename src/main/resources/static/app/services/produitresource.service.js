(function () {
    'use strict';

    /**
     *  Service "ProduitResource"
     *  Est une resource de l'API REST "/Produits"
     */
    angular.module('ProduitApp').factory('ProduitResource', ['$resource', function($resource) {

        /**
         * Retourne la resource du service REST "/produits"
         * @returns $resource
         */
        return $resource('/produits/:produitId', {produitId: '@id'},
            {
                'search': {
                    url: '/produits/search',
                    method: 'GET',
                    params: {'exp': '@exp', page: '@page', size: '@size'},
                    isArray: false
                },
                'update': {method: 'PUT'}
            }
        );

    }]);

})();