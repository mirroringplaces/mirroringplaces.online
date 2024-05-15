document.addEventListener('DOMContentLoaded', function(){

  // grab the sections (targets) and menu_links (triggers)
  // for menu items to apply active link styles to
  const sections = document.querySelectorAll("section");
  const menu_links = document.querySelectorAll(".sticky-scrollspy li");

  // functions to add and remove the active class from links as appropriate
  const makeActive = function(link) {
    if (menu_links[link] != undefined) {
      menu_links[link].classList.add("active");
    }
  }
  const removeActive = function(link) {
    if (menu_links[link] != undefined) {
      menu_links[link].classList.remove("active");
    }
  }
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 200;

  // keep track of the currently active link
  // use this so as not to change the active link over and over
  // as the user scrolls but rather only change when it becomes
  // necessary because the user is in a new section of the page
  let currentActive = 0;

  // listen for scroll events
  window.addEventListener("scroll", () => {

    // check in reverse order so we find the last section
    // that's present - checking in non-reverse order would
    // report true for all sections up to and including
    // the section currently in view
    //
    // Data in play:
    // window.scrollY    - is the current vertical position of the window
    // sections          - is a list of the dom nodes of the sections of the page
    //                     [...sections] turns this into an array so we can
    //                     use array options like reverse() and findIndex()
    // section.offsetTop - is the vertical offset of the section from the top of the page
    //
    // basically this lets us compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);


// When the user scrolls the page, execute stickyNavControl
window.onscroll = function() {stickyNavControl()};

// Get the navbar
var navbar = document.getElementById("landing-page-sticky-navbar");

var navbar_placeholder = document.getElementById("landing-page-sticky-navbar-placeholder");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var sticky_height = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavControl() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.querySelector("body").classList.add("stick-nav-active");
    navbar_placeholder.style.height = sticky_height + "px";
  } else {
    navbar.classList.remove("sticky");
    document.querySelector("body").classList.remove("stick-nav-active");
    navbar_placeholder.style.height = 0;
  }
}