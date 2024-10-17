$(document).ready(function() {
  $('#teclado, #mouse, #mousepad, #fone, #Headset, #Multilaser, #gamer, #Office, #C3tech, #Trust, #Havit, #Maxprint, #Fortrek, #Vinik, #Warrior, #Knup, #JBL, #ND, #APPTECH, #RDG, #Microfone, #cxsom, #cooler, #cabos, #adaptador, #extensao').on('click', function() {
    const filters = [];
    if ($('#HAYOM').is(':checked')) {
      filters.push('HAYOM');
    }
    if ($('#Multilaser').is(':checked')) {
      filters.push('Multilaser');
    }
    if ($('#teclado').is(':checked')) {
      filters.push('teclado');
    }
    if ($('#mouse').is(':checked')) {
      filters.push('mouse');
    }
    if ($('#mousepad').is(':checked')) {
      filters.push('mousepad');
    }
    if ($('#fone').is(':checked')) {
      filters.push('fone');
    }
    if ($('#fone').is(':checked')) {
      filters.push('fone');
    }
    if ($('#gamer').is(':checked')) {
      filters.push('gamer');
    }
    if ($('#Office').is(':checked')) {
      filters.push('office');
    }
    if ($('#C3tech').is(':checked')) {
      filters.push('C3tech');
    }
    if ($('#Trust').is(':checked')) {
      filters.push('Trust');
    }
    if ($('#Havit').is(':checked')) {
      filters.push('Havit');
    }
    if ($('#Maxprint').is(':checked')) {
      filters.push('Maxprint');
    }
    if ($('#Fortrek').is(':checked')) {
      filters.push('Fortrek');
    }
    if ($('#Vinik').is(':checked')) {
      filters.push('Vinik');
    }
    if ($('#Warrior').is(':checked')) {
      filters.push('Warrior');
    }
    if ($('#Knup').is(':checked')) {
      filters.push('Knup');
    }
    if ($('#JBL').is(':checked')) {
      filters.push('JBL');
    }
    if ($('#ND').is(':checked')) {
      filters.push('ND');
    }
    if ($('#APPTECH').is(':checked')) {
      filters.push('APPTECH');
    }

    if ($('#RDG').is(':checked')) {
      filters.push('RDG');
    }
    if ($('#Headset').is(':checked')) {
      filters.push('Headset');
    }
    if ($('#ND').is(':checked')) {
      filters.push('ND');
    }
    if ($('#Microfone').is(':checked')) {
      filters.push('Microfone');
    }
    if ($('#cxsom').is(':checked')) {
      filters.push('cxsom');
    }
    if ($('#cooler').is(':checked')) {
      filters.push('cooler');
    }
    if ($('#cabos').is(':checked')) {
      filters.push('cabo');
    }
    if ($('#adaptador').is(':checked')) {
      filters.push('adaptador');
    }
    if ($('#extensao').is(':checked')) {
      filters.push('extensao');
    }
    
    
    if (filters.length > 0) {
      $('.card').hide().filter(function() {
        const filterValues = $(this).data('filter')?.split(' ') || [];
        return filters.some((filter) => filterValues.includes(filter));
      }).show();
    } else {
      $('.card').show();
    }
  });
});


// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

// Auto-play carousel
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 5000);

// Search and filter functionality
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');
const products = document.querySelectorAll('.product');

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = filterSelect.value;

  products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    const productCategory = product.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = category === '' || productCategory === category;

    if (matchesSearch && matchesCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProducts);
filterSelect.addEventListener('change', filterProducts);