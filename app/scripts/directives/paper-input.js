'use strict';

angular.module('y2App')
  .directive('paperInput', function (bindngmodel) {
    return {
      restrict: 'E',
      require:'?ngModel',
      link: function postLink(scope, element, attrs) {
        bindngmodel(scope, element, attrs);        
      }
    };
  });
