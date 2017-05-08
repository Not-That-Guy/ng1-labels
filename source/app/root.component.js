import templateUrl from './root.html';

export const RootComponent = {
  template: templateUrl,
  controller: class RootComponent {
    constructor($log) {
      'ngInject';

      $log.info('Application Loaded!');

    }

    $onInit() { }
  }
};
