'use strict';

angular.module('y2App')
  .controller('MainCtrl', function ($scope) {
    $scope.tabNames = [
      'ALL',
      'AngularJS',
      'FAVARITES'
    ];

    $scope.test = function(value){
      $scope.text = value;
    }
    $scope.text = "sampleaaa";
    $scope.sampleLabel = "sample Label xxx";
  });
