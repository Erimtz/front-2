let e = confirm("¿Quiere guardar los datos?");
window.addEventListener('load', () => {
    if (e) {
        comments = JSON.parse(sessionStorage.getItem('key'));
        showComments()
       }
});
    

let button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    comments.push(document.querySelector('#comentario').value);
    showComments();
});

let comments = [];

// Almacenamos los comentarios en un array y luego renderizamos el mismo
function showComments() {
    let container = document.querySelector('.comentarios');
    container.innerHTML = '';
    
    comments.forEach((comment, index) => {
        let div = document.createElement('div');
        div.innerHTML += `<p>${comment}</p>`;
        let button = document.createElement('button');
        button.textContent = 'Borrar';
        button.addEventListener('click', () => {
            deleteComment(index);
            showComments();
        });
        div.appendChild(button);
        
        container.appendChild(div);
    });

    if (e) {
        sessionStorage.setItem('key', JSON.stringify(comments));
    }
    
}

function deleteComment(index) {
    comments.splice(index, 1);
}



// Renderizamos directamente los comentarios en el HTML
// function showComments(comment) {
//     let container = document.querySelector('.comentarios');
//     container.innerHTML += `<p>${comment}</p>`;
// }

let now = new Date();

// Retrasamos el console.log por 2''
// setTimeout(() => {
//     console.log(new Date() - now);
// }, 2000);

// Mostramos el console.log cada 1''
// setInterval(() => {
//     console.log(new Date() - now);
// }, 1000);

/* let key = '_key1';
sessionStorage.setItem(key, new Date());
setInterval(() => {
    console.log(sessionStorage.getItem(key));
}, 1500); */


