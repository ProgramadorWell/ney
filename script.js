// ==============================
// MENU MUDA DE COR AO ROLAR
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#002b6b";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

    }else{

        header.style.background = "#003b8e";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    }

});


// ==============================
// ROLAGEM SUAVE
// ==============================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(".card");

function mostrarCards(){

    cards.forEach(card=>{

        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

});

window.addEventListener("scroll",mostrarCards);

mostrarCards();


// ==============================
// EFEITO NO BOTÃO WHATSAPP
// ==============================

const whatsapp = document.querySelector(".whatsapp");

setInterval(()=>{

    whatsapp.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.15)"},
        {transform:"scale(1)"}

    ],{

        duration:1000

    });

},4000);