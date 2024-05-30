function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}

domReady(() => {

  var isMobile;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  } else {
    return;
  }

  const mapLinks = document.querySelectorAll("#mapFolder a");

  mapLinks.forEach((mapLink) => {
    console.log("hej")
    var new_url = mapLink.href.replace("map/chapters/", "chapters-mobile-info/");
    new_url = new_url.replace(/scene\d+\/?/, "")
    mapLink.href = new_url;
    
  });

});
