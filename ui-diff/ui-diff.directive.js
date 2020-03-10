var angular = require('angular');
var _ = require('lodash');

module.exports = uiDiffDirective;

function uiDiffDirective() {
    return {
        restrict: 'E',
        template: require('./ui-diff.directive.html'),
        scope: {
            hasFiltro: '=',
            acao: '=',
            labels: '=',
            historicoAtual: '=',
            historicos: '='
        },
        bindToController: true,
        controller: uiDiffController,
        controllerAs: 'vm'
    };
}

uiDiffController.$inject = ['$element'];

function uiDiffController($element) {
    var vm = this;

    // drag-n-scroll
    var clicked = false;
    var clickX;

    var uiDiff = $element.find('.ui-diff');

    uiDiff.on({
        mousemove: function(e) {
            clicked && updateScroll(e);
        },
        mousedown: function(e) {
            _.set(clicked, true);
            uiDiff.css('cursor', 'grabbing');
            clickX = e.pageX;
        },
        mouseup: function() {
            _.set(clicked, false);
            uiDiff.css('cursor', 'grab');
        }
    });

    function updateScroll(e) {
        uiDiff
            .css('cursor', 'grabbing')
            .scrollLeft(angular.element(document).scrollLeft() + (clickX - e.pageX));
    }
}
