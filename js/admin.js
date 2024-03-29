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
const openModalAddCompte = document.querySelectorAll('.openModalAddCompte');
const openModalEditCompte = document.querySelectorAll('.openModalEditCompte');
const cancelButton = document.querySelectorAll('.cancelButton');

const modal = document.getElementById('modal');
const fenetreSuppr = document.querySelector('.page-suppr');
const fenetreAdd = document.querySelector('.page-ajouter');
const fenetreInactif = document.querySelector('.page-inactif');
const fenetreArgent = document.querySelector('.page-argent');
const fenetreMonth = document.querySelector('.page-update');
const fenetreCompte = document.querySelector('.page-compte');
const fenetreEditCompte = document.querySelector('.page-edit-compte');

openModalAddCompte.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.style.display = 'flex';
    fenetreCompte.style.display = 'flex';
    var divInac = button.getAttribute('data-id');
    var inputInac = document.getElementById("inputInac");
    inputInac.setAttribute("value", divInac);
  });
});

openModalEditCompte.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.style.display = 'flex';
    fenetreEditCompte.style.display = 'flex';
    var divInac = button.getAttribute('data-id');
    var inputInac = document.getElementById("inputInac");
    inputInac.setAttribute("value", divInac);
  });
});

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
    fenetreCompte.style.display = 'none';
    fenetreEditCompte.style.display = 'none';
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
    fenetreCompte.style.display = 'none';
    fenetreEditCompte.style.display = 'none';
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

//

var map = L.map('map').setView([0, 0], 2); // Vue mondiale
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Exemple de données sur les ventes
var salesData = [
  { location: [48.866, 0.333], intensity: 10 }
  // Ajoute d'autres données ici
];

// Ajoute des marqueurs sur la carte pour chaque emplacement
salesData.forEach(function(data) {
  var marker = L.circleMarker(data.location, {
    radius: data.intensity,
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5
  }).addTo(map);
});

/*----------------------------------------------------*/

const PourColor = [
    '#02C667','#FF6F61','#F9C74F', '#F9C74F ', '#448AFF', '#FFD700', '#32CD32',
    '#FF6347', '#8A2BE2', '#00FFFF', '#FFA500', '#808080',
    '#FF1493', '#00CED1', '#FF4500', '#800080', '#00FF00',
    '#FF00FF', '#008000', '#FFFF00', '#D2691E'
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getMonthNames(startMonth) {
    const months = [];
    const date = new Date();
    
    for (let i = startMonth - 1; i < startMonth + 11; i++) {
        date.setMonth(i % 12);
        const monthName = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
        months.push(capitalizeFirstLetter(monthName));
    }
    return months;
}

const startingMonth = 2; // Par exemple, pour commencer par octobre, utilisez 10 pour octobre

const monthLabels = getMonthNames(startingMonth);

const dataCourbe = {
    labels: monthLabels,
    datasets: [
        {
            label: 'Année',
            data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
            borderColor: PourColor[0],
            tension: 0.3,
        },
        {
            label: 'Mois',
            data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
            borderColor: PourColor[1],
            tension: 0.3,
        }
        // Ajoutez d'autres enregistrements ici si nécessaire
    ]
};

// const optionsCourbe = {
//     responsive: false,
//     plugins: {
//         legend: {
//             display: false
//         }
//     },
//     scales: {
//         y: {
//             ticks: {
//                 callback: function(value) {
//                     return value + ' €';
//                 },
//                 stepSize: 20, // Définit l'intervalle entre chaque graduation
//                 min: 0, // Définit la valeur minimale sur l'axe y
//                 max: 600 // Définit la valeur maximale sur l'axe y
//             }
//         }
//     }
// };


// const courbe = document.getElementById('myCourbe');

// new Chart(courbe, {
//     type: 'line',
//     data: dataCourbe,
//     options: optionsCourbe
// });

/*----------------------------------------------------*/

const donut = document.getElementById('myDonut');
const PourLabels = ['Healthy', 'Vegan', 'Accessoires']; // Exemple de noms de compte
const PourData = [8980, 3972, 1691]; // Exemple de données de compte

const dataDonut = {
    labels: PourLabels,
    datasets: [
        {
            label: 'Ventes € ',
            data: PourData,
            backgroundColor: PourColor,
            borderWidth: 1,
            tension: 0.2,
        }
    ]
};

const optionsDonut = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
};

new Chart(donut, {
    type: 'doughnut',
    data: dataDonut,
    options: optionsDonut
});

/*----------------------------------------------------*/

const trait = document.getElementById('myTrait');

const dataTrait = {
    labels: PourLabels,
    datasets: [
        {
            label: 'Ventes €',
            data: PourData,
            backgroundColor: PourColor,
            borderWidth: 1,
            tension: 0.2,
        }
    ]
};

const optionsTrait = {
    responsive: true,
    scales: {
        x: {
            display: false, // Masque l'axe x
        },
        y: {
            ticks: {
                callback: function(value) {
                    return value + ' €';
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

new Chart(trait, {
    type: 'bar',
    data: dataTrait,
    options: optionsTrait,
});