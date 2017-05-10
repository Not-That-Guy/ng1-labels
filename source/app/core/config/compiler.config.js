function CompilerConfig($compileProvider) {
  'ngInject';

  let hostname = (this || location).hostname;
  /*
    * Disable debug mode if not running in a dev environment, for performance.
    * `location.hostname` is actually not a safe way to check where we are
    * running from, but it doesn't matter since this is just a performance
    * optimization.
    * Debug mode can be re-enabled in production environments by running
    * `angular.reloadWithDebugInfo()` from dev tools.
    */
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    $compileProvider.debugInfoEnabled(false);
  }

  /*
    * Keep the limit on how many times $onChanges can trigger new model updates,
    * as low as possible. Never go above the Angular default of 10 iterations.
    */
  $compileProvider.onChangesTtl(1);

  /*
    * Save HTML compilation time by not attempting to match and compile
    * classes/comments.
    */
  $compileProvider.cssClassDirectivesEnabled(false);
  $compileProvider.commentDirectivesEnabled(false);
}

export {CompilerConfig};
