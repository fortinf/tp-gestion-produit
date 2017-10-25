/**
 *  Service "produitService"
 *  Se charge de fournir des méthodes pour traiter les produits
 */
module.factory('produitService', ["$resource", function ($resource) {
    var produitResource = null;

    return {

        /**
         * Retourne la resource du service REST "/produits"
         * @returns $resource
         */
        getResource: function () {
            if (!produitResource) {
                produitResource = $resource('/produits/:produitId', {produitId: '@id'},
                    {
                        'search': {
                            url: '/produits/search',
                            method: 'GET',
                            params: {'exp': '@exp', page: '@page', size: '@size'},
                            isArray: false
                        }
                    }
                );
            }
            return produitResource;
        }
    };
}]);