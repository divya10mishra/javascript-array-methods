Function.prototype.mybind = function (context, ...args1) {
    let fn = this;
    return function (...arg2) {
        fn.apply(context, [...args1, ...arg2])
    }
  };