const myBind = function(fn) {
    const context = this;
    return function(...args) {
        return fn.apply(context, args);
    };
};