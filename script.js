let titulo = confirm('Quieres activar modo oscuro');
console.log(titulo);

if (titulo) {
  let body = document.querySelector('body');
  body.classList.add('bodyDark');
  let h1 = document.querySelector('h1');
  h1.classList.add('h1Dark');
  let items = document.getElementsByClassName('item');
  for (item of items) {
    item.classList.add('itemDark');
    item.classList.add('itemh2Dark');
  }
}
