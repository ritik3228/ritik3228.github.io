// Disable right-click, text selection, and copy-paste
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('cut', event => event.preventDefault());
document.addEventListener('paste', event => event.preventDefault());

// Disable keyboard shortcuts for copy/paste/etc.
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'C' || 
                          event.key === 'x' || event.key === 'X' || 
                          event.key === 'v' || event.key === 'V' || 
                          event.key === 'a' || event.key === 'A' || 
                          event.key === 'u' || event.key === 'U')) {
        event.preventDefault();
    }
});