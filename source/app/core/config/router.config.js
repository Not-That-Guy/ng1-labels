function RouterConfig($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
}

export {RouterConfig}
