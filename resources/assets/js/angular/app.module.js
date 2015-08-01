var angular = require('angular');

angular
    .module("magrippis", [require('angular-material'), require('angular-animate'), require('angular-messages'), require('angular-sanitize'), 'magrippis.routes'])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange');
    }]);