function RootscopeConfig($rootScopeProvider) {
  'ngInject';

  /*
  * Keep the limit on how many times $digest can trigger new model updates,
  * as low as possible. Never go above the Angular default of 10 iterations.
  */
  $rootScopeProvider.digestTtl(1);
}

export {RootscopeConfig}
