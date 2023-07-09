// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    var elements = document.querySelectorAll('.animate');

    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Event listener for the scroll event
window.addEventListener('scroll', handleScroll);
