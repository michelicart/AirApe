const api_quartos = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
// associa a div corpo que está no HTML a contante corpo_cards
const corpo_cards = document.querySelector("#corpo");
//cria uma array chamada data
let data = [];

async function fetchCards() {
    let response = await fetch(api_quartos)
    return await response.json()   
}

function renderCards(info) {
    //esvazia o que tem dento do #corpo
   corpo_cards.innerHTML= "";
   //.map == a for each
   info.map(renderCard);
}

function renderCard(vetor){
    const div = document.createElement("div");
    div.className = "vetor"

    div.innerHTML = ` 
    <img class="imgnoticia"
        src= "${vetor.photo}"
        alt="${vetor.name}">
    <h2 class="property_type">${vetor.property_type}</h2>
    <h2 class="name">${vetor.name}</h2>
    <h3 class="price"> R$ ${vetor.price},00</h3>
    `;
    corpo_cards.appendChild(div);
}




async function main() {
    data = await fetchCards();
    if (data[0]) {
        renderCards(data);
    }
}

main();


/* <div class="linha">
<div class="texto">
    <img class="photo"
        src= ""
        alt="foto do apê">
    <h2 class="property_type"><span id="type"></span></h2>
    <p class="name">Apartment in Son Parc, wonderful views
    <h3> <a class="price" href="https://www.sonoticiaboa.com.br/2020/04/04/usp-cria-respirador-baixo-custo-producao-rapida-pandemia/">R$10,99</a></h3>
</div>
</div> */