// Continuous debugger statement
setInterval(function() {
    const check = function() {};
    check.toString = function() {
        debugger;
    };
    console.log('%c', check);
}, 1000);