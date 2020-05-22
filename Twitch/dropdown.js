function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myMoveFunction() {
  document.getElementById('d1').style.visibility="visible";
  var dropdowns = document.getElementById("myDropdown");
  if (dropdowns.classList.contains('show')) {
    document.getElementById('d1').style.visibility="hidden";
  }
  else {

  }
}

function nad() {
  var dropdowns = document.getElementById("myDropdown");
  if (dropdowns.classList.contains('show')) {
    document.getElementById('d1').style.visibility="hidden";
  }
  else {
    document.getElementById('d1').style.visibility="visible";
  }
}

function obok() {
  document.getElementById('d1').style.visibility="hidden";
}