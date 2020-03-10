var angular = require('angular');

require('./ui-diff.scss');

module.exports = angular
    .module('ui-components.diff', [])
    .directive('uiDiff', require('./ui-diff.directive'))
    .filter('uiDiffDisplayData', require('./ui-diff-display-data.filter')).name;
