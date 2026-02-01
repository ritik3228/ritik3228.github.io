// Simple text obfuscation (note: this is not strong protection)
function obfuscateText() {
    document.querySelectorAll('.protect-text').forEach(element => {
        const originalText = element.textContent;
        element.setAttribute('data-original', originalText);
        element.textContent = originalText.split('').reverse().join('');
    });
}

window.addEventListener('load', obfuscateText);
window.addEventListener('DOMContentLoaded', obfuscateText);