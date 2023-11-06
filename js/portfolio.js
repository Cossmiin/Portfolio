function zoom(img) {
  
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("img_modal");
  var navbar = document.getElementById("navbar");

  navbar.style.display = "none";
  modal.style.display = "block";
  modalImg.src = img.src;
  if (document.documentElement.clientWidth <= 950)
    modalImg.style.transform = "scale(2)";
  else
    modalImg.style.transform = "scale(0.7)";
  modalImg.style.opacity = 1;

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
    navbar.style.display = "block";
  }
}





function activeButton() {
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}





var logos = document.getElementById("column_logos");
var websites = document.getElementById("column_websites");
var others = document.getElementById("column_other");
if (document.documentElement.clientWidth <= 950) {
  logos.style.display = "block";
  websites.style.display = "block";
  others.style.display = "block";
}
else{
  logos.style.display = "grid";
  websites.style.display = "grid";
  others.style.display = "grid";
}

function filterSelection(filter) {
  var logos = document.getElementById("column_logos");
  var websites = document.getElementById("column_websites");
  var others = document.getElementById("column_other");
  if (document.documentElement.clientWidth <= 950) {
    if (filter == "logos") {
      logos.style.display = "block";
      websites.style.display = "none";
      others.style.display = "none";
    }
    if (filter == "websites") {
      logos.style.display = "none";
      websites.style.display = "block";
      others.style.display = "none";
    }
    if (filter == "other") {
      logos.style.display = "none";
      websites.style.display = "none";
      others.style.display = "block";
    }
  }
  else {
    if (filter == "logos") {
      logos.style.display = "grid";
      websites.style.display = "none";
      others.style.display = "none";
    }
    if (filter == "websites") {
      logos.style.display = "none";
      websites.style.display = "grid";
      others.style.display = "none";
    }
    if (filter == "other") {
      logos.style.display = "none";
      websites.style.display = "none";
      others.style.display = "grid";
    }
  }
}





function sendEmail(event) {
  event.preventDefault(); 

  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

 
  var mailtoLink = "mailto:icswebdesign77@gmail.com" +
    "?subject=" + encodeURIComponent("Mesaj nou de la " + name) +
    "&body=" + encodeURIComponent("Nume: " + name + "\nEmail: " + email + "\nMesaj: " + message);

  window.open(mailtoLink);
}





function MobileNavbar() {
  var x = document.getElementById("navbar-right");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 