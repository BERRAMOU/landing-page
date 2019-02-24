$(document).ready(function () {

    var burger = document.getElementById('access_nav');
    var nav = document.getElementById("main_nav");

    // Add is-active class to burger on menu click.
    burger.addEventListener('click', function (e) {
        if (burger.classList.contains('is-active')) {
            burger.classList.remove("is-active");
            nav.className = "";
        } else {
            burger.classList.add("is-active");
            nav.className = "is-active";
        }
        e.preventDefault();
    });

    // Video element.
    var video = document.getElementById("video");
    // Buttons.
    var playButton = document.getElementById("play-pause");

    playButton.addEventListener("click", function () {
        if (video.paused === true) {
            // Play the video.
            video.play();
            // Update the button text to 'Pause'.
            playButton.innerHTML = '<img src="assets/images/pause-video-icon.png">';
        } else {
            // Pause the video.
            video.pause();
            // Update the button text to 'Play'.
            playButton.innerHTML = '<img src="assets/images/play-video-icon.png">';
        }
    });

    $(window).scroll(function () {
        // This is then function used to detect if the element is scrolled into view.
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            // return true if the element passed is scrolled into view.
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        // This is where we use the function to detect if ".video-content" is scrolled into view, and when it is play the video.
        if (elementScrolled('.video-content') === false) {
            video.pause();
        }
        else {
           /* video.play();*/
        }

    });


    // Scroll smooth.
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 900);
        }
    });


    //- Sliders.
    var slideIndex = 1;
    showDivs(slideIndex);

    /**
     * @param n
     */
    function currentDiv(n) {
        showDivs(slideIndex = n);
    }

    //- On click on span.
    $(".slider-dot").click(function () {
        var divNum = $(this).data("div-num");
        currentDiv(divNum);
    });

    /**
     * Show all divs
     * @param n
     */
    function showDivs(n) {
        var i, x = document.getElementsByClassName("tweets-item"), dots = document.getElementsByClassName("slider-dot");

        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        x[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

});

