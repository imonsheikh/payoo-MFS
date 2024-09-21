// console.log("button clicked");

// search: form submited reloading the page 
//Step-1: Set event handler
document.getElementById('button-login').addEventListener('click', function(e){
    // step-2: prevent Default behavior(prevent reloading browser) 
    event.preventDefault() // Vejal to begginners
   console.log('login button clicked');

//    step-3: get the phone number and the phone number
   const phoneNumber = document.getElementById('phone-number').value
   const pinNumber = document.getElementById('pin-number').value
   console.log(phoneNumber, pinNumber);

    // step-4: Validate phone and Pin
   //This is temporary. you should not do like this
   if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are loggin in'); 
    // step-5: allow user to use the website
    window.location.href = '/home.html'
   }else{
    alert('wrong phone number or PIN')
   }

   
   
})

