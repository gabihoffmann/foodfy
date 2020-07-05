const modalOverlay = document.querySelector('.modal__overlay')
const modalContent = document.querySelector('.modal__content')
const cards = document.querySelectorAll('.recipe__card')

//Habilitar o modal
for(let card of cards){
    card.addEventListener("click", function(){    
        const imgURL = card.getAttribute('id')
        const title = card.querySelector('.recipe__title').textContent
        const author = card.querySelector('.recipe__author').textContent
        
        const divTitle = document.createElement('div')
        divTitle.textContent = title
        const divAuthor = document.createElement('div')
        divAuthor.textContent = author

        modalContent.querySelector('img').src = `assets/${imgURL}.png`
        modalContent.querySelector(".recipe__title").appendChild(divTitle)
        modalContent.querySelector(".recipe__author").appendChild(divAuthor)
        
        modalOverlay.classList.add('active')

    })
}
//Desabilitar o modal
document.querySelector('.modal__close').addEventListener('click', function(){
   
    
    const divTitle = modalContent.querySelector(".recipe__title").querySelector('div')
    const divAuthor = modalContent.querySelector(".recipe__author").querySelector('div')
    
    modalContent.querySelector('img').src = ""
    modalContent.querySelector(".recipe__title").removeChild(divTitle)
    modalContent.querySelector(".recipe__author").removeChild(divAuthor)
    
    modalOverlay.classList.remove('active')
})