//Redirecionamento
const cards = document.querySelectorAll('.recipe__card')

for(let card of cards){
    card.addEventListener("click", function(){    
        const id = card.getAttribute('id')
        window.location.href = `/recipe/${id}`
    })
}

//Mostrar e esconder
const recipeContainer = document.querySelectorAll('.recipe__directions')

for(let item of recipeContainer){
    let show = true
    const button = item.querySelector('button')
    const content = item.querySelector('.direction__content')

    button.innerText = "esconder"

    button.addEventListener('click', () => {
        show ? button.innerText = "mostrar" : button.innerText = "esconder"
        content.classList.toggle('active',show)
        show = !show
    })

}