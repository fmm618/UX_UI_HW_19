console.log("Your index.js file is loaded correctly!");

//smooth scroll animation
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "#top") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
})