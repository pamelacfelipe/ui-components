var angular = require('angular');

require('./ui-form-creator.scss');

module.exports = angular
    .module('ui-components.form-creator', [])
    .directive('uiFormCreator', require('./ui-form-creator.directive'))
    .directive('uiFormField', require('./ui-form-field.directive'))
    .run([
        '$templateCache',
        function($templateCache) {
            $templateCache.put('field-text.html', require('./templates/field-text.html'));
            $templateCache.put('field-value.html', require('./templates/field-value.html'));
            $templateCache.put('field-date.html', require('./templates/field-date.html'));
            $templateCache.put(
                'field-select-unique.html',
                require('./templates/field-select-unique.html')
            );
            $templateCache.put(
                'field-select-multiple.html',
                require('./templates/field-select-multiple.html')
            );
        }
    ]).name;
