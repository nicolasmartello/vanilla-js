(function(){
  'use strict'
  console.log(sum(7)(9)); // expect 16
  console.log(sum(8,8));// expect 16
  
  // Classic clouser
  function sum(a, b) {
    if (b) return a + b;
    return function (c) {
      return a + c;
    }
  }
})();

