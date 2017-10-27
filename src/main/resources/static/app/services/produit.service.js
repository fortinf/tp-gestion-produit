(function () {
    'use strict';

    /**
     *  Service "produitService"
     *  Se charge de fournir des méthodes pour traiter les produits
     */
    angular.module('ProduitApp').service('produitService', ['$resource', function($resource) {

        var $this = this;
        $this.produitResource = null;

        /**
         * Retourne la resource du service REST "/produits"
         * @returns $resource
         */
        $this.getResource = function() {
            if (!$this.produitResource) {
                $this.produitResource = $resource('/produits/:produitId', {produitId: '@id'},
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
            }
            return $this.produitResource;
        }

    }]);

})();