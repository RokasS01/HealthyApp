const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".bx-menu");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
};

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
};

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////


const openModalSupprButtons = document.querySelectorAll('.openModalSuppr');
const openModalAddButtons = document.querySelectorAll('.openModalEdit');
const openModalInacButtons = document.querySelectorAll('.openModalInac');
const openModalCreateButtons = document.querySelectorAll('.openModalCreate');
const cancelButton = document.querySelectorAll('.cancelButton');

const modal = document.getElementById('modal');
const fenetreSuppr = document.querySelector('.page-suppr');
const fenetreAdd = document.querySelector('.page-ajouter');
const fenetreInactif = document.querySelector('.page-inactif');
const fenetreArgent = document.querySelector('.page-argent');
const fenetreMonth = document.querySelector('.page-update');

openModalInacButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      modal.style.display = 'flex';
      fenetreInactif.style.display = 'flex';
      var divInac = button.getAttribute('data-id');
      var inputInac = document.getElementById("inputInac");
      inputInac.setAttribute("value", divInac);
    });
  });

  openModalAddButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      modal.style.display = 'flex';
      fenetreAdd.style.display = 'flex';
      // var divAdd = button.getAttribute('data-id');
      // var inputAdd = document.getElementById("inputAdd");
      // inputAdd.setAttribute("value", divAdd);
    });
  });


openModalSupprButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.style.display = 'flex';
    fenetreSuppr.style.display = 'flex';
    var divSuppr = button.getAttribute('data-id');
    var inputSuppr = document.getElementById("inputSuppr");
    inputSuppr.setAttribute("value", divSuppr);
  });   
});




openModalCreateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      modal.style.display = 'flex';
      fenetreArgent.style.display = 'flex';
      var divCreate = button.getAttribute('data-id');
    });
});

  cancelButton.forEach(function(button) {
    button.addEventListener('click', function() {
    modal.style.display = 'none';
    fenetreSuppr.style.display = 'none';
    fenetreAdd.style.display = 'none';
    fenetreInactif.style.display = 'none';
    fenetreArgent.style.display = 'none';
    fenetreMonth.style.display = 'none';
    var divCancel = button.getAttribute('data-id');
    });
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    fenetreSuppr.style.display = 'none';
    fenetreAdd.style.display = 'none';
    fenetreInactif.style.display = 'none';
    fenetreArgent.style.display = 'none';
    fenetreMonth.style.display = 'none';
  }
});



////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOAD SCREEN
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// 

var imgProds = document.querySelectorAll('.img-prod');

imgProds.forEach(imgProd => {
  imgProd.addEventListener('change', function() {
    var fileName = this.value.split('\\').pop(); // Récupère le nom du fichier
    var fileBox = this.closest('.file-box');
    var label = fileBox.querySelector('label');
    if (fileName) {
      label.textContent = fileName; // Met à jour le contenu du label
      fileBox.classList.add('file-selected');
    } else {
      label.textContent = 'Parcourir une image ...'; // Réinitialise le contenu du label
      fileBox.classList.remove('file-selected');
    }
  });
});

// TP CHANGEMENT DE PAGE
var menu_links = document.querySelectorAll('.aMenu');

menu_links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var page = this.getAttribute('href');
        var speed = 550;
        var targetOffset = document.querySelector(page).offsetTop;
        
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});
