const searchInput = document.querySelector('#search');
const cards = document.querySelectorAll('.card-s');
const cardGroups = document.querySelectorAll('.card');

searchInput.addEventListener('input', function() {
  const keyword = searchInput.value;

  cards.forEach(function(card) {
    const title = card.querySelector('h4').textContent;

    if (title.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

    // 再檢查每個外層框框
  cardGroups.forEach(function(group) {
    const visibleCards = group.querySelectorAll('.card-s[style="display: block;"]');
    if (visibleCards.length === 0) {
      group.style.display = 'none';
    } else {
      group.style.display = 'block';
    }
  });
});


