
function HttpConfig($httpProvider) {
  'ngInject'

  /*
  * Allow coalescing multiple HTTP responses into a single digest cycle.
  * This is just a performance optimization.
  */
  $httpProvider.useApplyAsync(true);

  /*
  * whether to set the withCredentials flag on the XHR object.
  */
  $httpProvider.defaults.withCredentials = true;

}

export {HttpConfig};
