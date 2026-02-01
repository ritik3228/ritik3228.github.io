// Detect DevTools opening
let devtools = /./;
devtools.toString = function() {
    document.body.innerHTML = '<h1>Developer Tools Detected</h1><p>Inspection is not allowed on this page.</p>';
    window.location.reload();
};

console.log('%c', devtools);