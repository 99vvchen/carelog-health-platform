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

// 讀出陣列資料
const records = JSON.parse(localStorage.getItem('records')) || [];

records.forEach(function(record, index) {
  const li = document.createElement('li');
  li.className = 'card-s';
  li.dataset.index = index;
  li.innerHTML = `
    <div class="kebab-wrap">
      <button class="kebab-btn">⋮</button>
      <div class="kebab-menu">
        <button class="edit-btn">編輯</button>
        <button class="delete-btn">刪除</button>
      </div>
    </div>
    <h4>${record.description}</h4>
    <p class="desc">${record.date} ／ ${record.type}</p>
  `;
  
  //kebab刪除
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
  records.splice(index, 1);
  localStorage.setItem('records', JSON.stringify(records));
  li.remove();
});

  // 1. 對照表
  const typeMap = {
    '藥物紀錄': '#med-manage ol',
    '回診記錄': '#date-manage ol',
    '醫囑記錄': '#orders-manage ol',
    '健康記錄': '#sit-manage ol',
  };

  // 2. 決定放哪裡
  const targetOl = document.querySelector(typeMap[record.type]);

  // 3. 加進去
if (!targetOl) return;
targetOl.appendChild(li);


});


