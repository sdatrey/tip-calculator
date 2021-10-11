window.onload = () =>
    //the function called when Calculate button is clicked.
{
    /*calling a function calculateTip
     which will calculate the tip for the bill.*/
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip() {
    /*assign values of ID : amount, person and service to
    variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;

    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }

    //now we are checking number of persons
    if (persons === '1')
        //if there is only one person then we need not to display each.
        document.querySelector('#each').style.display = 'none';
    else
        //if there are more than one person we will display each.
        document.querySelector('#each').style.display = 'block';

    const total =  (amount * (service) / 100) / persons;
    const totalAmount = Number(total) + Number(amount);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
    document.querySelector('.total-Amount').style.display = 'block';
    document.querySelector('#total-amount').innerHTML = totalAmount;
}
