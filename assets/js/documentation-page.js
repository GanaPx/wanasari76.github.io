const galleryData = Array.from({ length: 42 }, (_, i) => ({
  src: `documentation/image${i + 1}.jpg`,
  category: i % 2 === 0 ? 'konstruksi' : 'pemeliharaan',
}));

const itemsPerPage = 6;
let currentPage = 1;
let filteredData = [...galleryData];

function displayGallery(page) {
  const gallery = document.getElementById('gallery');
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleItems = filteredData.slice(start, end);

  gallery.innerHTML = visibleItems
    .map(item => `
      <a class="portfolio-lightbox gallery-item" href="${item.src}">
        <img src="${item.src}" alt="${item.category}" class="shadow-lg">
        <div class="overlay">${item.category.toUpperCase()}</div>
      </a>
    `)
    .join('');
}

function setupPagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageNumbersDiv = document.getElementById('page-numbers');
  pageNumbersDiv.innerHTML = '';

  const maxVisibleButtons = 3;
  const middleRange = 1;
  
  function createPageButton(pageNumberText, pageNumberValue, isDisabled = false) {
    const pageNumber = document.createElement('div');
    pageNumber.textContent = pageNumberText;
    pageNumber.className = 'page-number';

    pageNumber.style.backgroundColor = "#FFFFFF";
    pageNumber.style.color = "#3AAA35";
    pageNumber.style.border = "1px solid #3AAA35";
    pageNumber.style.padding = "8px 12px"; 
    pageNumber.style.borderRadius = "0px";
    pageNumber.style.cursor = isDisabled ? "default" : "pointer"; 
    pageNumber.style.margin = "2px";

    if (pageNumberValue === currentPage) {
      pageNumber.style.backgroundColor = "#3AAA35";
      pageNumber.style.color = "#FFFFFF";
      pageNumber.style.border = "1px solid #3AAA35";
    }

    if (!isDisabled) {
      pageNumber.onclick = () => {
        currentPage = pageNumberValue;
        updateGallery();
        setupPagination();
      };
    }

    pageNumbersDiv.appendChild(pageNumber);
  }

  // Menampilkan halaman pertama
  createPageButton(1, 1);

  if (currentPage > maxVisibleButtons) {
    createPageButton("...", null, true);
  }

  for (let i = Math.max(2, currentPage - middleRange); i <= Math.min(totalPages - 1, currentPage + middleRange); i++) {
    createPageButton(i, i);
  }

  if (currentPage < totalPages - maxVisibleButtons) {
    createPageButton("...", null, true);
  }

  if (totalPages > 1) {
    createPageButton(totalPages, totalPages);
  }

  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');

  prevButton.style.backgroundColor = currentPage === 1 ? "#BFBFBF" : "#3AAA35";
  prevButton.style.color = "#FFFFFF";
  prevButton.style.cursor = currentPage === 1 ? "default" : "pointer";
  prevButton.style.borderRadius = "0px";

  nextButton.style.backgroundColor = currentPage === totalPages ? "#BFBFBF" : "#3AAA35";
  nextButton.style.color = "#FFFFFF";
  nextButton.style.cursor = currentPage === totalPages ? "default" : "pointer";
  nextButton.style.borderRadius = "0px";

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}



function updateGallery() {
  displayGallery(currentPage);
  setupPagination();
}

function filterGallery(category) {
  filteredData = category === 'all' ? [...galleryData] : galleryData.filter(item => item.category === category);
  currentPage = 1;
  updateGallery();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    filterGallery(e.target.getAttribute('data-filter'));
  });
});

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateGallery();
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateGallery();
  }
});

updateGallery();