'use strict'

require('angular');
require('angular-modal');
require('@uirouter/angularjs')

angular.module('ZB', [
	'ui.router',
	'btford.modal',
])

.config(require('./routes'))
.config(require('./config'))
.run(require('./run'))

.controller('Home', require('./controllers/home'))

.directive('body', require('./directives/body'))

.factory('modal', require('./factories/modal'))
.factory('project', require('./factories/project'))

angular.bootstrap(document, ['ZB']);