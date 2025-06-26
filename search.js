document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const foodDatabase = window.foodDatabase || []; // Link to food-data.js

  function searchAllContent(query) {
    const results = [];
    const queryLower = query.toLowerCase();

    foodDatabase.forEach(item => {
      const score =
        (item.name.toLowerCase().includes(queryLower) ? 3 : 0) +
        (item.desc.toLowerCase().includes(queryLower) ? 2 : 0) +
        (item.keywords?.toLowerCase().includes(queryLower) ? 1 : 0);

      if (score > 0) {
        results.push({ ...item, score });
      }
    });

    return results.sort((a, b) => b.score - a.score);
  }

  function showResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
      searchResults.innerHTML = `<div class="search-result-item">No results found for "${searchInput.value}"</div>`;
    } else {
      results.forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
          <strong>${item.name}</strong>
          <div class="search-result-desc">${item.desc}</div>
          <small>${item.category.replace('-', ' ')}</small>
        `;
        div.addEventListener('click', () => window.location.href = item.link);
        searchResults.appendChild(div);
      });
    }

    searchResults.classList.add('show');
  }

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (searchInput.value.trim().length >= 2) {
      const results = searchAllContent(searchInput.value.trim());
      showResults(results);
    }
  });

  searchInput.addEventListener('input', function () {
    const query = this.value.trim();
    if (query.length >= 2) {
      const results = searchAllContent(query);
      showResults(results);
    } else {
      searchResults.classList.remove('show');
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-container')) {
      searchResults.classList.remove('show');
    }
  });
});
