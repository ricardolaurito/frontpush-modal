//console.log("Olá Mundo");


// DOM (Document Object Model)

// É uma interface que representa o HTML por meio de objetos.
// Com ela é possível manipular a estrutura, conteúdo, 
// estilo

const button = document.querySelector('button');
const modal = document.getElementById('mymodal');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    modal.classList.add('modal-active');
})

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})