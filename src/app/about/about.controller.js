(function() {
  'use strict';

  angular
    .module('testPrerender')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1501228781425;

  }
})();
