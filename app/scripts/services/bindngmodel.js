'use strict';


angular.module('y2App')
  .service('bindngmodel', function bindngmodel($timeout,$parse,$browser) {
    return function(scope,element,attrs){
var input = element[0];

if(attrs.ngModel){
  bindNgModel('ngModel','inputValue',true);
}

function toModel(modelGet){
  var ngModelSet = modelGet.assign;

  var timeout;

  var deferListener = function(ev) {
    if (!timeout) {
      timeout = $browser.defer(function() {
        listener(ev);
        timeout = null;
      });
    }
  };

  var listener = function(event){
    ngModelSet(scope, input.inputValue);
    scope.$apply();
  }

  input.addEventListener('change',function(event){
    deferListener(event);
  });

  input.addEventListener('keydown',function(event){
    var key = event.keyCode;

    // ignore
    //    command            modifiers                   arrows
    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;

    deferListener(event);
  });

}

function toInput(ngModelGet,attrName,inputName){

  // placeholderが表示されてしまうのを防ぐ
  $timeout(function(){
    input[inputName] = ngModelGet(scope);
  },400);

  var first = true;
  scope.$watch(attrName,function ngModelWatch() {
    if(first){
      first = false;
      return;
    }
    var value = ngModelGet(scope);
    input[inputName] = value;
  });
}

function bindNgModel(attrName,inputName,towWay){
  var ngModelGet = $parse(attrs[attrName]);
  toInput(ngModelGet,attrs[attrName],inputName);
  if(towWay){
    toModel(ngModelGet,attrs[attrName],inputName);
  }
}

    };
  });
