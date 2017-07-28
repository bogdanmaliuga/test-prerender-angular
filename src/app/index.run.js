(function() {
  'use strict';

  angular
    .module('testPrerender')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,ngMeta) {
  ngMeta.init();
    $log.debug('runBlock end');
  }

})();
