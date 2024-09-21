// console.log('features');
// show the cash out form and hide the add money form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
   
    //show cash out btn clicked 
    console.log('show cash out btn cliked');
    document.getElementById('cash-out-form').classList.remove('hidden')

    // hide the add money form 
    document.getElementById('add-money-form').classList.add('hidden')
    
})


// Show add money and hide the cash out form 
document.getElementById('btn-show-add-money').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden')

    document.getElementById('cash-out-form').classList.add('hidden')
})