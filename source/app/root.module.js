import angular from 'angular'

import {ConfigModule} from './core/config/config.module';
import {RootComponent} from './root.component';

export const root = angular
  .module('root', [ConfigModule])
  .component('root', RootComponent)
  .name;
