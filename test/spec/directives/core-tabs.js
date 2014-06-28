'use strict';

describe('Directive: coreTabs', function () {

  // load the directive's module
  beforeEach(module('y2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<core-tabs></core-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the coreTabs directive');
  }));
});
