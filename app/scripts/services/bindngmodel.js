'use strict';

angular.module('y2App')
  .service('bindngmodel', function bindngmodel($timeout,$parse,$browser) {
    return function(scope,element,attrs){

if(!attrs.ngModel){
  return;
}

var ngModelGet = $parse(attrs.ngModel),
    ngModelSet = ngModelGet.assign;

var input = element[0];
    
$timeout(function(){
  input.inputValue = ngModelGet(scope);
},500);

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

var first = true;

scope.$watch(attrs.ngModel,function ngModelWatch() {
  var value = ngModelGet(scope);
  if(first){
    first = false;
    return;
  }
  input.inputValue = value;
});

    };
  });
