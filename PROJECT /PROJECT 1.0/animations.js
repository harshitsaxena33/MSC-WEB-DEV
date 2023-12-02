document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of internalLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
