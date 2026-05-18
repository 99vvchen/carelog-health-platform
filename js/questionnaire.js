const records = JSON.parse(localStorage.getItem('records')) || [];

records.forEach(function(record, index) {
  if (record.type !== '想問醫生') return; // 不是想問醫生就跳過

  const div = document.createElement('div');
  div.className = 'card-s';
  div.innerHTML = `
    <div class="kebab-wrap">
    <button class="kebab-btn">⋮</button>
    <div class="kebab-menu">
      <button class="edit-btn">編輯</button>
      <button class="delete-btn">刪除</button>
    </div>
  </div>
  <span>${record.date}</span>
  <h4>Q: ${record.description}</h4>
  `;

  const targetCard = document.querySelector('.card');
  targetCard.appendChild(div);

// 刪除
const deleteBtn = div.querySelector('.delete-btn');
deleteBtn.addEventListener('click', function() {
  records.splice(index, 1);
  localStorage.setItem('records', JSON.stringify(records));
  div.remove();
});
});
