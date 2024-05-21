
//NAVIGATION SMOOTH SCROLL

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }); 
});




//REFRESH PAGE WHEN HOME NAV LINK IS PRESSED
function refreshPage() {
            location.reload(); // Reload the current page
            window.scrollTo(0, 0); // Scroll to the top of the page
        }

//BURGER NAV WHEN SMALL SCREEN
document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
  toggleIcon();
}); 

function toggleIcon() {
  var menuToggle = document.getElementById('mobile-menu');
  menuToggle.classList.toggle('open');
}


//CLOSES HAMBURGER BUTTON AFTER PRESSING A LINK
document.querySelector('.nav-list').addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    var navList = document.getElementById('dynamic-nav-list');
    navList.classList.remove('show');
    toggleIcon();
  }
});

//NAV CHANGES COLOR WHEN SCROLLED DOWN
document.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      var section2 = document.getElementById("navChangeColor");
      var scrollPosition = window.scrollY;

      if (scrollPosition >= section2.offsetTop) {
        // If scrolled down to or past section 2, change header color to pale yellow green #A5B699
        header.style.backgroundColor = "#A5B699";
        header.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1)";
      } else {
        // Otherwise, keep the default color (transparent)
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      }
    });


//SLOW TEXT HOME FIRST PAGE 
document.addEventListener('DOMContentLoaded', function() {
      var slowText = document.getElementById('slowTextHome1');
      setTimeout(function() {
        slowText.style.opacity = 1;
      }, 100);
    });

document.addEventListener('DOMContentLoaded', function() {
      var slowText = document.getElementById('slowTextHome2');
      setTimeout(function() {
        slowText.style.opacity = 1;
      }, 350);
    });


//UNDER SERVICE HIGHLIGHTS COUNTING 
//HIGHLIGHTS COUNT 1
  window.addEventListener('scroll', function() {
    var section2 = document.getElementById('highlights');
    var countingElement = document.getElementById('countingA');
    var section2Top = section2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (section2Top < windowHeight && !countingElement.dataset.counted) {
        animateCounting(1, 13, countingElement);
        countingElement.dataset.counted = true;
    }
});

function animateCounting(start, end, element) {
    var duration = 5000; // 2 seconds
    var range = end - start;
    var minTimer = 50; // minimum time interval between animation frames
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        element.textContent = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

//HIGHLIGHTS COUNT 2
  window.addEventListener('scroll', function() {
    var section2 = document.getElementById('highlights');
    var countingElement = document.getElementById('countingB');
    var section2Top = section2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (section2Top < windowHeight && !countingElement.dataset.counted) {
        animateCounting(1, 42, countingElement);
        countingElement.dataset.counted = true;
    }
});

function animateCounting(start, end, element) {
    var duration = 5000; // 2 seconds
    var range = end - start;
    var minTimer = 50; // minimum time interval between animation frames
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        element.textContent = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}


//HIGHLIGHTS COUNT 3
  window.addEventListener('scroll', function() {
    var section2 = document.getElementById('highlights');
    var countingElement = document.getElementById('countingC');
    var section2Top = section2.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (section2Top < windowHeight && !countingElement.dataset.counted) {
        animateCounting(1, 55, countingElement);
        countingElement.dataset.counted = true;
    }
});

function animateCounting(start, end, element) {
    var duration = 5000; // 2 seconds
    var range = end - start;
    var minTimer = 50; // minimum time interval between animation frames
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        element.textContent = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}   


//BACK TO TOP BUTTON
    // Get the back to top button element
    var backToTopButton = document.getElementById("back-to-top");

    // Function to control the visibility of the back to top button based on scroll position
    window.onscroll = function() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var section4Bottom = document.getElementById("clear").offsetTop + document.getElementById("clear").offsetHeight;
        if (currentPosition > (document.getElementById("services").offsetTop - (window.innerHeight / 2)) && currentPosition < section4Bottom - window.innerHeight) {
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

//NAVIGATION APPEAR DISAPPEAR
let lastScrollTop = 0;
        const header = document.getElementById("header");

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Scroll down
                header.classList.remove("visible");
                header.classList.add("hidden");
            } else {
                // Scroll up
                header.classList.remove("hidden");
                header.classList.add("visible");
            }
            lastScrollTop = currentScroll;
        });










