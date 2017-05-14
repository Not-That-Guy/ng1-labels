import templateUrl from './root.html';

import '../css/sierra.css';
import '../../node_modules/devicons/css/devicons.css'
import '../css/base.css'

import '../../node_modules/devicons/fonts/devicons.eot'
import '../../node_modules/devicons/fonts/devicons.svg'
import '../../node_modules/devicons/fonts/devicons.ttf'
import '../../node_modules/devicons/fonts/devicons.woff'

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
