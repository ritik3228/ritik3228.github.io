// Detect headless browsers and bots
const isHeadless = !window.callPhantom ? false : true;
const isChrome = !!window.chrome;
const isFirefox = typeof InstallTrigger !== 'undefined';

if (isHeadless || (!isChrome && !isFirefox)) {
    // Redirect or show warning
    document.body.innerHTML = '<h1>Access Denied</h1><p>Please use a standard browser.</p>';
    throw new Error('Bot detected');
}