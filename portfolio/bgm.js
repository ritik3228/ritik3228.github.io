document.addEventListener('DOMContentLoaded', function() {
    // Create an invisible audio element
    const audio = new Audio('audio.mp3'); // Replace with your music URL
    audio.loop = true;
    audio.volume = 0.5; // Adjust volume (0.1 to 1.0)
    
    // Attempt autoplay (works in some browsers if site is trusted)
    const playPromise = audio.play();
    
    // Handle autoplay blocking
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Fallback: Wait for ANY user interaction (click, scroll, keypress)
            const enableMusic = () => {
                audio.play();
                window.removeEventListener('click', enableMusic);
                window.removeEventListener('touchstart', enableMusic);
                window.removeEventListener('keydown', enableMusic);
            };
            
            window.addEventListener('click', enableMusic, { once: true });
            window.addEventListener('touchstart', enableMusic, { once: true });
            window.addEventListener('keydown', enableMusic, { once: true });
        });
    }
});