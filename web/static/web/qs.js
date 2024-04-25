function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateSections() {
    const sections = document.querySelectorAll('.qs-section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);
