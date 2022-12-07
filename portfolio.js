function myFunction(x) {
  if (x.matches) { // If media query matches

    document.querySelectorAll("h4")[0].style.fontSize = "13px";
    document.querySelectorAll("h4")[1].style.fontSize = "13px";

  }
  else {
    document.querySelectorAll("h4")[0].style.fontSize = "14px";
    document.querySelectorAll("h4")[1].style.fontSize = "14px";
  }
}

var x = window.matchMedia("(max-width: 560px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes