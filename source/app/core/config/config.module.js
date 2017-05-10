import angular from 'angular';
import uirouter from 'angular-ui-router';

import {RouterConfig} from './router.config'
import {LocationConfig} from './location.config'
import {RootscopeConfig} from'./rootscope.config'
import {CompilerConfig} from './compiler.config'
import {HttpConfig} from './http.config'

export const ConfigModule = angular.module('app.core.config', [uirouter])
  .config(RouterConfig)
  .config(LocationConfig)
  .config(RootscopeConfig)
  .config(CompilerConfig)
  .config(HttpConfig)
  .name;
