document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }
});


document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {

        if (
            this.hostname === window.location.hostname &&
            !this.href.includes("#")
        ) {
            e.preventDefault();

            document.body.classList.add("page-transition");

            setTimeout(() => {
                window.location = this.href;
            }, 300);
        }

    });
});

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(
            href &&
            !href.startsWith("#") &&
            !this.hasAttribute("target")
        ){

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(()=>{
                window.location.href = href;
            },350);

        }

    });

});