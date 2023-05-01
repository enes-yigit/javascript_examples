

const form= document.getElementById("#car-form");
const titleElement=document.getElementById("#title");
const priceElement=document.getElementById("#price");
const urlElement=document.getElementById("#url");

//UI objesini başlatma
const ui = new UI();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);    
}

//addCar
function addCar(e){
    e.preventDefault()

    const title=titleElement.value;
    const price=priceElement.value;
    const url=urlElement.value;

    if(title===""||price===""||url===""){
        console.log("hatali")
    }
    else{
        //yeni araç
        const newCar = new Car (title,price,url);
        //arayüze araç ekleme
        ui.addCarToUI(newCar);
    }
    ui.clearInputs(titleElement,priceElement,urlElement);
}

