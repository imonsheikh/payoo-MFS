// console.log("I am added money recap");

/**
 * step-1: Add event listener to the add Money button(form submit) and make sure to preventDefault so that page doesn't reloads
 * step-2: get the money user wants to add also get the pin Number Provided
 * step-3: Verify the pin Number, for wrong pin Number ==> failed to add and for right pin Number, allow to add the number to the balance.
 * step-4: Get the current balance
 * step-5: Add money to be added with the current balance
 * step-6: Display/Update the balance in the UI/DOM
 */

// step-1: Add event listener to the add Money button(form submit) 
document.getElementById('btn-add-money').addEventListener('click', function(event){

    // preventDefault so that page doesn't reloads
    event.preventDefault();
    console.log('added the event handler');
    
    //step-2: get the money user wants to add also get the pin Number Provided
    const addMoney = document.getElementById('input-add-money').value
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('input-pin-number').value
 

    // console.log(addMoney, pinNumber);
    if(pinNumber === '1234'){
    //   add money to the account
    const balance = document.getElementById('account-balance').innerText 
    const balanceNumber = parseFloat(balance)

    // new balance 
    const newBalance = balanceNumber + addMoneyNumber

    // Update the dom with updated balance 
    document.getElementById('account-balance').innerText = newBalance

    }else{
        alert('failed to add money. Please try again later')
    }
    
})