'use strict';

describe('Directive: paperInput', function () {

  // load the directive's module
  beforeEach(module('y2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<paper-input></paper-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the paperInput directive');
  }));
});
