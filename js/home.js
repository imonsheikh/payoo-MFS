// console.log('home added');

/**
 * step-1: add event handler
 * prevent page reload after form submit
 * step-2: get money to be added to the account balance
 * step-3: get the pin Number provided 
 * step-4: Verify the Pin number(this not ideal OR right way)
 * step-5: get the current balance
 * 
 * 
 */

// add money to the account 
// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    // console.log("money add button clicked");
    // prevent page reload after form submit 
event.preventDefault()

// step-2: get money to be added to the account balance
const addMoneyInput = document.getElementById('input-add-money').value
    console.log(addMoneyInput);

 // step-3: get the pin Number provided 
const pinNumberInput = document.getElementById('input-pin-number').value
    console.log(pinNumberInput);

// step-4: Verify the Pin number(this not ideal OR right way)
//wrong way to validate pin Number
if(pinNumberInput === '1234'){
    console.log('Adding money to your account');  
    //step-5: get the current balance
}else{
    alert('Failed to add money! Please try again')
}
    
    
})