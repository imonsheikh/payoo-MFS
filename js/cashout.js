// console.log('cash out');

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    // console.log('cash out button clicked');
   event.preventDefault()

   const cashOut = document.getElementById('input-cash-out').value
   const cashOutNumber = parseFloat(cashOut)
   const pinNumber = document.getElementById('input-cash-out-pin').value
   
//    console.log(cashOut, pinNumber);
// wrong way to verify in Number 
if(pinNumber === '1234'){
//   console.log('Money is reducing');
  const balance = document.getElementById('account-balance').innerText
//   console.log(balance);
const balanceNumber = parseFloat(balance)

//   reduce the balance 
const newBalance = balanceNumber - cashOutNumber

//Update the UI OR DOM
document.getElementById('account-balance').innerText = newBalance
  
}else{
   alert('Failed to cash out. Please try again later') 
}

})
