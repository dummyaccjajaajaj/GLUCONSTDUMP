
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
        header.style.backgroundColor = "#4AA15A";
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
    const backToTopButton = document.getElementById("back-to-top");

    // We store these elements outside the function so the browser 
    // doesn't have to "find" them 100 times per second while scrolling.
    const servicesSection = document.getElementById("services");
    const clearSection = document.getElementById("clear");

    // Function to control the visibility of the back to top button
    window.addEventListener('scroll', function() {
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Safety check: make sure elements exist before calculating offset
        if (servicesSection && clearSection) {
            const section4Bottom = clearSection.offsetTop + clearSection.offsetHeight;
            const triggerPoint = servicesSection.offsetTop - (window.innerHeight / 2);

            // Visibility Logic
            if (currentPosition > triggerPoint && currentPosition < (section4Bottom - window.innerHeight)) {
                backToTopButton.style.right = "5px";
                backToTopButton.style.opacity = "0.5";
            } else {
                backToTopButton.style.right = "-70px";
                backToTopButton.style.opacity = "0";
            }
        }

        // Hide button if we are at the very top
        if (currentPosition <= 0) {
            backToTopButton.style.opacity = "0";
        }
    });

    // Improved Scroll Function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This replaces the loop and allows user to override
        });
    }

// Attach the click event via JavaScript (cleaner than using onclick in HTML)
backToTopButton.addEventListener('click', scrollToTop);

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










