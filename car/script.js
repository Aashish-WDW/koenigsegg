setTimeout(function () {
    document.body.classList.remove('no-scroll');
}, 1100);

document.addEventListener('DOMContentLoaded', function () {
    var imageWrapper = document.querySelector('.image-wrapper');
    var maskedImage = document.querySelector('.m2-masked-image');
    var slideInElements = document.querySelectorAll('.slideIn');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(imageWrapper) && !maskedImage.classList.contains('visible')) {
            maskedImage.classList.add('visible');
            
            slideInElements.forEach(function (element) {
                element.classList.add('visible');
            });

            
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    var pimg = document.querySelector('.pimg img');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !pimg.classList.contains('visible')) {
                pimg.classList.add('visible');
                observer.disconnect(); 
            }
        });
    });

    observer.observe(pimg);
});

document.addEventListener('DOMContentLoaded', function () {
    var dimg2 = document.querySelector('.dimg2 img');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !dimg2.classList.contains('visible')) {
                dimg2.classList.add('visible');
                observer.disconnect(); 
            }
        });
    });

    observer.observe(dimg2);
});

document.addEventListener('DOMContentLoaded', function () {
    var slideIn2Element = document.querySelector('.slideIn2');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(slideIn2Element) && !slideIn2Element.classList.contains('visible')) {
            slideIn2Element.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    var slideIn2Element = document.querySelector('.slideIn3');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(slideIn2Element) && !slideIn2Element.classList.contains('visible')) {
            slideIn2Element.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    var slideInElements = document.querySelectorAll('.slideOut2, .slideOut');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        slideInElements.forEach(function (element) {
            if (isInViewport(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });


        if (slideInElements.every(function (element) { return element.classList.contains('visible'); })) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});