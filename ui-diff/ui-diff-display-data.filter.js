var _ = require('lodash');

var DEFAULT_TEXT = 'Não informado';

module.exports = uiDiffDisplayDataFilter;

function uiDiffDisplayDataFilter() {
    return function(model, noDataText) {
        if (_.isBoolean(model)) {
            return model ? 'Sim' : 'Não';
        }

        if (_.isArray(model) && _.isEmpty(model)) {
            return DEFAULT_TEXT;
        }

        // Data
        var regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

        if (_.isString(model) && model.match(regexData)) {
            return model
                ? model.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, '$3/$2/$1')
                : DEFAULT_TEXT;
        }

        // CPF
        var regexCPF = /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/;

        if (_.isString(model) && model.match(regexCPF)) {
            return model
                ? model.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
                : DEFAULT_TEXT;
        }

        return model ? model : noDataText || DEFAULT_TEXT;
    };
}
