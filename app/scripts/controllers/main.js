'use strict';

angular.module('y2App')
  .controller('MainCtrl', function ($scope) {
    $scope.tabNames = [
      'ALL',
      'AngularJS',
      'FAVARITES'
    ];

    $scope.test = function(value){
      console.log("test" ,value);
      console.log("text",$scope.text);
      console.log("id",document.getElementById("sample").inputValue);
      $scope.text = value;
    }
    console.log("start");

    $scope.text = "sampleaaa";
  });
