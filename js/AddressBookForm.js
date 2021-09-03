//add event listener when document gets loaded
window.addEventListener('DOMContentLoaded',()=>{

    var addressbook = new AddressBook;
    //add listener to verify name entered by user
    const name = document.querySelector('#name');console.log(name.value)
    const textError = document.querySelector('.text-error');

     //adding listener at name input
    name.addEventListener('input',function(){       
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            addressbook.name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    //adding listener to verify address entered by the user
    const addr = document.querySelector('#address');
    const addressError = document.querySelector('.addr-error');
    //adding listener at address input
    addr.addEventListener('input',function(){    
        if(addr.value.length == 0){
            addressError.textContent="";
            return;
        }
        try{
            addressbook.address = addr.value;
            addressError.textContent = "";
        }catch(e){
            addressError.textContent = e;
        }
    });
    //adding listener to verify phone number entered by the user
    const phoneNumber = document.querySelector('#phone');
    const contactError = document.querySelector('.contact-error');
    //adding listener at phoneNumber input
    phoneNumber.addEventListener('input',function(){       
        if(phoneNumber.value.length == 0){
            contactError.textContent="";
            return;
        }
        try{
            addressbook.phoneNumber= phoneNumber.value;
            contactError.textContent = "";
        }catch(e){
            contactError.textContent = e;
        }
    });
});
//populate & save the addressbook object when submit buton is clicked
const save = ()=> {
    try{
        let addressbook = new AddressBook();
    }catch(e){
        return;
    }
} 
