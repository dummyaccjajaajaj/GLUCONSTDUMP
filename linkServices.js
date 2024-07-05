     //NAV CHANGES COLOR WHEN SCROLLED DOWN
document.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      var section2 = document.getElementById("navChangeColor");
      var scrollPosition = window.scrollY;

      if (scrollPosition >= section2.offsetTop) {
        // If scrolled down to or past section 2, change header color to pale yellow green
        header.style.backgroundColor = "#4AA15A";
        header.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1)";
      } else {
        // Otherwise, keep the default color (dark green)
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      }
    });

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