function onClick(){
    const element=document.querySelector('#menu-categorie');
    const menu= document.querySelector('#menu_tendina');
    const chiusura= document.querySelector('#chiudi_menu');
    element.classList.remove('hidden');
    menu.removeEventListener("click",onClick);
    menu.addEventListener("click",nascondiMenu);
    chiusura.addEventListener("click",nascondiMenu);
};

function nascondiMenu(){
    const element=document.querySelector('#menu-categorie');
    const menu= document.querySelector('#menu_tendina');
    const chiusura= document.querySelector('#chiudi_menu');
    element.classList.add('hidden');
    chiusura.removeEventListener("click",nascondiMenu);
    menu.removeEventListener("click",nascondiMenu);
    menu.addEventListener("click",onClick);
    
};

function sostituisciTesto(){
    const element= this;
    const sostituto= document.querySelector('#menu_tendina');
    sostituto.textContent= element.textContent;
}



function subImg(){
    const divv= event.target;
    const divImg= divv.querySelector('img');

    switch(divv.id){

        case '1.3':
            divImg.classList.add("fade-out");
            
            setTimeout(function() {
                divImg.src='img/sez1.3bis.jpg';
                divImg.classList.remove("fade-out");
                
            }, 200);
            
            break;


        case '1.4': 
        divImg.classList.add("fade-out");
            
            setTimeout(function() {
                divImg.src='img/sez1.4bis.jpg';
                divImg.classList.remove("fade-out");
                
            }, 200);
            break;

        case '1.5':
            divImg.classList.add("fade-out");
            
            setTimeout(function() {
                divImg.src='img/sez1.5bis.jpg';
                divImg.classList.remove("fade-out");
                
            }, 200);

            break;
        default: break; 
    }
}

function resetImg(){
    const divv= event.target;
    const divImg= divv.querySelector('img');
    
    switch(divv.id){

        case '1.3':
            
            
        divImg.classList.add("fade-out");

            setTimeout(function() {
                divImg.src='img/sez1.3.jpg';
                divImg.classList.remove("fade-out");
                
            }, 200);


            break;

        case '1.4': 
        
        divImg.classList.add("fade-out");

            setTimeout(function() {
                divImg.src='img/sez1.4.jpg';
                divImg.classList.remove("fade-out");
                
            }, 200);

        break;
        case '1.5':
            
        divImg.classList.add("fade-out");

        
        setTimeout(function() {
            divImg.src='img/sez1.5.jpg';
            divImg.classList.remove("fade-out");
            
        }, 200);

            break;
        default: break; 
    }
}

function addCart(){
    const element= event.target;
    const span= element.querySelector('.prezzo');
    
    
    element.removeChild(span);
    const carrello= document.createElement('span');
    carrello.textContent="+CARRELLO";
    carrello.classList.add("carrello");
    element.appendChild(carrello);

}


function removeCart(){
    const element= event.target;
    
    const carrello= element.querySelector('.carrello');
    element.removeChild(carrello);
    const prezzo= document.createElement("span");
    prezzo.classList.add("prezzo");

    switch(element.id){

    case '1.1': prezzo.textContent="499,00$";
                break;
    case '1.2': prezzo.textContent="395,00$";
    break;
    case '1.3': prezzo.textContent="1.263,10$";
    break;
    case '1.4': prezzo.textContent="1.065,00$";
    break;
    case '1.5': prezzo.textContent="899,00$";
    break;

    }
    element.appendChild(prezzo);
}

const spans= document.querySelectorAll('#menu-categorie span');
for (const span of spans){
    span.addEventListener("click",sostituisciTesto);
    span.addEventListener("click",nascondiMenu);
}

const element= document.querySelector('#menu_tendina');
element.addEventListener("click",onClick);


const divContainers = document.querySelectorAll('.main-container .content')

for (const div of divContainers){
    
    div.addEventListener("mouseenter",subImg);
    div.addEventListener("mouseleave",resetImg);
    div.addEventListener("mouseenter", addCart );
    div.addEventListener("mouseleave",removeCart);

}






