var pdfmod = "";
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  if (screen.width<=630) {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.Left = "0px";

  }
  document.getElementById("main").style.marginLeft = "250px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function accedercours(cours, mod_, matiere) {
  document.getElementById(mod_).style.display = "inline-grid";
  document.getElementById(cours).style.display = "inline-grid";
  document.getElementById(matiere).style.display = "none";
  document.getElementById("rtr-btn").style.display = "block";
  rtr_btn++;
}

function voir(pdf, courses, pdfpath) {
  document.getElementById(pdf).style.display = "block";
  document.getElementById(courses).style.display = "none";
  document.getElementById("pdfhere").data = pdfpath;
  pdfmod = courses;
}
function inscrire() {
  document.getElementById("inscrire_form").style.display = "block";
}
function show(id_, scroll_) {
  document.getElementById(id_).style.display = "block";
  window.scrollTo(0, scroll_);
}
function hide(id_) {
  document.getElementById(id_).style.display = "none";
}
function precedent(dest, maintenant, displ_y) {
  document.getElementById(dest).style.display = displ_y;
  document.getElementById(maintenant).style.display = "none";
}
function precedentpdf(maintenant, displ_y) {
  document.getElementById(pdfmod).style.display = displ_y;
  document.getElementById(maintenant).style.display = "none";
}

function semstrelink(id_, id_1, id_2) {
  document.getElementById(id_).style.display = "block";
  document.getElementById(id_1).style.display = "none";
  document.getElementById(id_2).style.display = "none";
}
