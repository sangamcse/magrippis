var angular = require('angular');

angular
    .module('magrippis.routes', [require('angular-ui-router'), 'magrippis.controllers'])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                template: '<div ui-view="mainContent"></div>'
            })
            .state('app.home', {
                url: '',
                views: {
                    mainContent: {
                        templateUrl: './angular/components/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('app.cv', {
                url: 'cv',
                views: {
                    mainContent: {
                        templateUrl: './angular/components/cv/cv.html',
                        controller: 'CVController',
                        controllerAs: 'cv'
                    }
                }
            })
            .state('app.portfolio', {
                url: 'portfolio',
                views: {
                    mainContent: {
                        templateUrl: './angular/components/portfolio/portfolio.html',
                        controller: 'PortfolioController',
                        controllerAs: 'portfolio'
                    }
                }
            })
            .state('app.hobbies', {
                url: 'hobbies',
                views: {
                    mainContent: {
                        templateUrl: './angular/components/hobbies/hobbies.html',
                        controller: 'HobbiesController',
                        controllerAs: 'hobbies'
                    }
                }
            })
            .state('app.blog', {
                url: 'blog',
                abstract: true,
                views: {
                    mainContent: {
                        templateUrl: './angular/components/blog/blog.html',
                    }
                }
            })
            .state('app.blog.index', {
                url: '/',
                views: {
                    blogContent: {
                        templateUrl: './angular/components/blog/index.html',
                        controller: 'BlogController',
                        controllerAs: 'blog'
                    }
                }
            })
            .state('app.blog.show', {
                url: '/:postSlug',
                views: {
                    blogContent: {
                        templateUrl: './angular/components/blog/post/post.html',
                        controller: 'PostController',
                        controllerAs: 'post'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    }]);