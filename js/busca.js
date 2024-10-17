const searchForm = document.querySelector('.search-box');
const searchField = document.querySelector('.search-field');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchField.value.trim();

    if (searchTerm) {
        // Redirect the user to the search results page
        window.location.href = `produtos.html?q=${searchTerm}`;
    }
});