// console.log("button clicked");

// search: form submited reloading the page 
//Step-1: Set event handler
document.getElementById('button-login').addEventListener('click', function(e){
    // step-2: prevent Default behavior(prevent reloading browser) 
    event.preventDefault() // Vejal to begginners
   console.log('login button clicked');

//    step-3: get the phone number 
   const phoneNumber = document.getElementById('phone-number').value
   console.log(phoneNumber);

   
   
})

