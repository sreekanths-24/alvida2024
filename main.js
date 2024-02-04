var mainmenuholder = document.getElementById('mainmenuholder');
var menuHolder = document.getElementById('menuHolder');
var siteBrand = document.getElementById('siteBrand');
var prevScrollPos = window.pageYOffset;
var scrollTimeout;

function menuToggle() {
  if (menuHolder.classList.contains("drawMenu")) {
    menuHolder.classList.remove("drawMenu");
  } else {
    menuHolder.classList.add("drawMenu");
  }
}

function closeMenu() {
  if (menuHolder.classList.contains("drawMenu")) {
    menuHolder.classList.remove("drawMenu");
  }
}

function updateNavbarVisibility() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    mainmenuholder.classList.remove("navbar-hidden");
  } else {
    // Scrolling down, hide the navbar with a delay
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      mainmenuholder.classList.add("navbar-hidden");
    }, 100); // Adjust the delay as needed
  }
  prevScrollPos = currentScrollPos;
}

// if (window.innerWidth < 426) siteBrand.innerHTML = "ALVIDA 2024";

// window.onresize = function () {
//   if (window.innerWidth < 420) siteBrand.innerHTML = "ALVIDA 2024";
//   else siteBrand.innerHTML = "Kerala Blasters Football Club";
// };

// Event listener for clicking on a nav-menu-item
var navMenuItems = document.querySelectorAll('.nav-menu-item');
navMenuItems.forEach(function (item) {
  item.addEventListener('click', closeMenu);
});

// Event listener for clicking outside the navbar
document.addEventListener('click', function (event) {
  if (
    !mainmenuholder.contains(event.target) &&
    !event.target.classList.contains('siteLink')
  ) {
    closeMenu();
  }
});


// Set the date we're counting down to
var countDownDate = new Date("Feb 9, 2024 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);