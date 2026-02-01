// Prevent the page from being loaded in an iframe
if (window.top !== window.self) {
    window.top.location = window.self.location;
}