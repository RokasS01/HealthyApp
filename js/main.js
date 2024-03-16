//LOAD SCREEN
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

//PAGINATION
const cards = document.querySelectorAll(".card");
const pageNumber = document.querySelector(".pageNumber");
const selectedActive  = document.getElementById("selected");
let test_var = test();

function test() {
    const tab_cards = [];

    cards.forEach(card => {
        if (card.classList.contains(selectedActive.innerText.toLowerCase())) {
            tab_cards.push(card);
        };
    });

    return tab_cards
};

let currentPage = 1;
let perPage = 6;

function adjustProductDisplay() {
    let width = window.innerWidth;
    if (width < 640) {
        perPage = 3;
        currentPage = 1;
    }else {
        perPage = 6;
        currentPage = 1;
    };
    displayCards(test());
};

adjustProductDisplay();

window.addEventListener('resize', adjustProductDisplay);


function displayCards(tab_cards) {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    for (let i = startIndex; i < endIndex && i < tab_cards.length; i++) {
        cardContainer.appendChild(tab_cards[i]);
    };
};

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCards(test());
    };
    pageNumber.innerText = currentPage;
};

function nextPage(test_var) {
    let tab_cards_loc = test_var;
    const totalPages = Math.ceil(tab_cards_loc.length / perPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCards(tab_cards_loc);
    };
    pageNumber.innerText = currentPage;
};

displayCards(test_var);

    
// FILTRE
const filters = document.querySelectorAll(".ff");

filters.forEach(filter => {
    filter.addEventListener("click", function() {
        const category = this.textContent.toLowerCase();
        filters.forEach(f => f.classList.remove("active"));
        this.classList.add("active");
        selectedActive.innerText = filter.innerText;
        if (currentPage > 1) {
            currentPage = 1;
            pageNumber.innerText = currentPage;
        };
        displayCards(test());

        cards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});

//DROPDOWN FILTRE
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            filters.forEach(filter => {
                if (filter.innerText == option.innerText) {
                    filter.classList.add("active");
                };
            });
            if (currentPage > 1) {
                currentPage = 1;
                pageNumber.innerText = currentPage;
            };
            displayCards(test())
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

// TP CHANGEMENT DE PAGE
var links = document.querySelectorAll('.c');
var menu_links = document.querySelectorAll('.aMenu');

links.forEach(function(link) {
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


// QUANTITY CART

const articles = document.querySelectorAll('.article');

articles.forEach((article, index) => {
    const qtPlusBtn = article.querySelector('.qt-plus');
    const qtMinusBtn = article.querySelector('.qt-minus');
    const qtDisplay = article.querySelector('.qt');

    qtPlusBtn.addEventListener('click', () => {
        let quantity = parseInt(qtDisplay.textContent);
        quantity++;
        qtDisplay.textContent = quantity;
    });

    qtMinusBtn.addEventListener('click', () => {
        let quantity = parseInt(qtDisplay.textContent);
        if (quantity > 0) {
            quantity--;
            qtDisplay.textContent = quantity;
        }
    });
});
