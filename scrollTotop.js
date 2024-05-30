    //BACK TO TOP BUTTON
    // Get the back to top button element
    var backToTopButton = document.getElementById("back-to-top");

    // Function to control the visibility of the back to top button based on scroll position
    window.onscroll = function() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var section4Bottom = document.getElementById("clear").offsetTop + document.getElementById("clear").offsetHeight;
        if (currentPosition > (document.getElementById("see").offsetTop - (window.innerHeight / 2)) && currentPosition < section4Bottom - window.innerHeight) {
            backToTopButton.style.right = "5px"; // Show the button by moving it to the right
            backToTopButton.style.opacity = "0.5"; // Set opacity to initial value
        } else {
            backToTopButton.style.right = "-70px"; // Hide the button by moving it off the screen
            backToTopButton.style.opacity = "0"; // Set opacity to 0 when hidden
        }

        // If scrolling up and button was clicked, remove styles
        if (currentPosition === 0) {
            backToTopButton.style.opacity = "0";
        }
    };

    // Function to scroll to the top of the page when the back to top button is clicked
    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
        // Remove the styles after clicking
        backToTopButton.style.opacity = "0";
    }