document.addEventListener('DOMContentLoaded', function() {
    // Check if redirect has already happened this session
    if (!sessionStorage.getItem('hasRedirected')) {
        
        // Configuration
        const redirectConfig = {
            url: 'https://www.profitableratecpm.com/ar5yd3uuk?key=85d260dc7855a01d2b5316aab2e57259',
            target: '_blank', // '_blank' for new tab, '_self' for same tab
            delay: 2000, // Wait 1 second after DOM load before activating
            // Only exclude very specific elements that might cause issues
            excludeSelectors: ['[data-no-redirect]'] // Minimal exclusions
        };
        
        // Wait for the configured delay
        setTimeout(() => {
            function handleFirstInteraction(event) {
                // Check if clicked element is excluded (only checks for data attribute)
                const isExcluded = event.target.closest('[data-no-redirect]');
                
                if (isExcluded) return;
                
                // Set flag to prevent future redirects
                sessionStorage.setItem('hasRedirected', 'true');
                
                // Open the URL
                window.open(redirectConfig.url, redirectConfig.target);
                
                // Remove the event listeners after first interaction
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
            }

            // Add both click and touch event listeners
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('touchstart', handleFirstInteraction);
        }, redirectConfig.delay);
    }
});