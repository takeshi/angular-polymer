'use strict';

describe('Service: bindNgModel', function () {

  // load the service's module
  beforeEach(module('y2App'));

  // instantiate service
  var bindNgModel;
  beforeEach(inject(function (_bindNgModel_) {
    bindNgModel = _bindNgModel_;
  }));

  it('should do something', function () {
    expect(!!bindNgModel).toBe(true);
  });

});
