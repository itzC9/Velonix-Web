// script.js
function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.right === '0px') {
    menu.style.right = '-250px';
  } else {
    menu.style.right = '0px';
  }
}

// Future feature: fetch json to populate menu lists
// fetch('https://yourgithubusername.github.io/yourrepo/mods.json')
//   .then(res => res.json())
//   .then(data => console.log(data));
