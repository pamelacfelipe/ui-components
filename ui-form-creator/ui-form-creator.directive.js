var _ = require('lodash');
var $ = require('jquery');

module.exports = uiFormCreatorDirective;

function uiFormCreatorDirective() {
    return {
        restrict: 'E',
        template: require('./ui-form-creator.directive.html'),
        scope: {
            ngModel: '='
        },
        controller: uiFormCreatorController,
        controllerAs: 'vm'
    };
}

uiFormCreatorController.$inject = ['$scope', '$attrs'];

function uiFormCreatorController($scope, $attrs) {
    var vm = this;

    vm.fields = $scope.ngModel || [];

    vm.isViewerMode = $attrs.hasOwnProperty('viewMode');

    vm.gridOptions = {
        columns: 12,
        minColumns: 2,
        minRows: 1,
        minSizeX: 2,
        maxSizeX: 12,
        minSizeY: 4,
        maxSizeY: 20,
        defaultSizeX: 2,
        defaultSizeY: 1,
        colWidth: 'auto',
        rowHeight: '20',
        mobileModeEnabled: false,
        draggable: {
            enabled: true,
            handle: 'label'
        },
        resizable: {
            enabled: true,
            handles: ['e', 'w']
        }
    };

    vm.addField = addField;
    vm.removeField = removeField;
    vm.setField = setField;
    vm.setFieldFocus = setFieldFocus;
    vm.getPattern = getPattern;
    vm.addOptions = addOptions;
    vm.removeOptions = removeOptions;

    function addField() {
        vm.fields.push({
            id: _.uniqueId('field-'),
            label: 'Campo ' + vm.fields.length + 1,
            pattern: 'TEXT',
            mandatory: false,
            config: {}
        });

        vm.setField(vm.fields[vm.fields.length - 1]);
        vm.setFieldFocus();
    }

    function removeField(index) {
        vm.fields.splice(index, 1);
    }

    function setField(field) {
        vm.selectedField = field;
    }

    function setFieldFocus() {
        setTimeout(function() {
            $('#fieldName').select();
        }, 100);
    }

    function getPattern(pattern) {
        if (pattern == 'SELECT_UNIQUE' || pattern == 'SELECT_MULTIPLE') {
            if (!vm.selectedField.config.values) {
                vm.selectedField.config.values = [
                    {
                        descricao: 'Opção 1',
                        valor: 'op_1'
                    },
                    {
                        descricao: 'Opção 2',
                        valor: 'op_2'
                    }
                ];
            }
        }
    }

    function addOptions() {
        vm.selectedField.config.values.push({
            descricao: '',
            valor: ''
        });
    }

    function removeOptions(index) {
        vm.selectedField.config.values.splice(index, 1);
    }
}
