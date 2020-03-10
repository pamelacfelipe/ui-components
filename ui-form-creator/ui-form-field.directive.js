module.exports = uiFormFieldDirective;

function uiFormFieldDirective() {
    return {
        restrict: 'E',
        template: '<div class="template-field" ng-include="getTemplateUrl()"></div>',
        require: '^uiFormCreator',
        scope: {
            model: '=',
            label: '=',
            pattern: '=',
            config: '=',
            mandatory: '='
        },
        link: function(scope) {
            scope.getTemplateUrl = function() {
                if (scope.pattern == 'TEXT') {
                    return 'field-text.html';
                }
                if (scope.pattern == 'VALUE') {
                    return 'field-value.html';
                }
                if (scope.pattern == 'DATE') {
                    return 'field-date.html';
                }
                if (scope.pattern == 'SELECT_UNIQUE') {
                    return 'field-select-unique.html';
                }
                if (scope.pattern == 'SELECT_MULTIPLE') {
                    return 'field-select-multiple.html';
                }
            };
        }
    };
}
