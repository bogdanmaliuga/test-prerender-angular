(function() {
  'use strict';

  angular.module('testPrerender').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,ngMetaProvider) {
    ngMetaProvider.useTitleSuffix(true);

// On /home, the title would change to
// 'Home Page | Best Website on the Internet!'
ngMetaProvider.setDefaultTitleSuffix(' | Best Website on the Internet!');

//Set defaults for arbitrary tags
// Default author name
ngMetaProvider.setDefaultTag('author', 'John Smith');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      data: {
        meta: {
          'title': 'Home page',
          'description': 'This is the description shown in Google search results'
        }
      }
    })
    .state('about',{
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about',
      data: {
        meta: {
          'title': 'About page',
          'description': 'Description About'
        }
      }
    })

    $urlRouterProvider.otherwise('/');
  }

})();
