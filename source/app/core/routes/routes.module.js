import angular from 'angular';
import uirouter from 'angular-ui-router';

LocationConfig.$inject = ['$locationProvider'];
function LocationConfig($locationProvider) {
  /*
    * Attempt to use HTML5 History API for routing, if available.
    * Otherwise, route using hashbangs.
    * NOTE: HTML5 mode requires proper server side configuration.
    * NOTE: HTML5 mode requires the existence of a <base> tag in HTML.
    */
  $locationProvider.html5Mode(true);
}

RouterConfig.$inject = ['$urlRouterProvider'];
function RouterConfig($urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

}

export {LocationConfig, RouterConfig};

export const RoutesModule = angular.module('app.core.routes', [uirouter])
  .config(LocationConfig)
  .config(RouterConfig)
  .name;
