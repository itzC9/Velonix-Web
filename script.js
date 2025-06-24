// script.js
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.right === '0px') {
    menu.style.right = '-300px';
  } else {
    menu.style.right = '0px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const execList = document.getElementById('executor-list');
  const modList = document.getElementById('modmenus-list');

  if (execList) {
    fetch('executors.json')
      .then(res => res.json())
      .then(data => {
        let html = '';
        for (const platform in data) {
          html += `<h3>${platform}</h3><ul>`;
          for (const name in data[platform]) {
            html += `<li><a href="${data[platform][name].link}" target="_blank">${name}</a></li>`;
          }
          html += '</ul>';
        }
        execList.innerHTML = html;
      });
  }

  if (modList) {
    fetch('modmenus.json')
      .then(res => res.json())
      .then(data => {
        let html = '<ul>';
        for (const name in data) {
          html += `<li><a href="${data[name].link}" target="_blank">${name}</a></li>`;
        }
        html += '</ul>';
        modList.innerHTML = html;
      });
  }
});
