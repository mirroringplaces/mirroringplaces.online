function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}

const isMobile;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  isMobile = true;
}else{
  isMobile = false;
}



domReady(() => {

  const mapLinks = document.querySelectorAll("#mapFolder a");
  
  mapLinks.forEach((mapLink) => {
    
    var new_url = mapLink.href.replace("scenes/", "scenes-mobile-info/");
    new_url = new_url.replace(/(scenes\d)_\d/, "$1")
    mapLink.href = new_url;
    
  });

});
