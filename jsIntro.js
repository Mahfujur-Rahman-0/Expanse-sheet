
document.getElementById('submitBtn').addEventListener('click',function(){
    //tergeting values
    var MonthlyIncome= parseFloat(document.getElementById('monthlyIncome').value);
    
        //negative values
    var foodExpense= parseFloat(document.getElementById('foodExpanse').value);
    var clothExpense= parseFloat(document.getElementById('clothExpanse').value);
    var houseRent= parseFloat(document.getElementById('houseRent').value);

    
    //checking negative values
   
    if (Math.sign(foodExpense) == 1 && Math.sign(clothExpense) == 1 && Math.sign(houseRent) == 1) {

        const negativesTotal = foodExpense + clothExpense + houseRent;
        
        if(MonthlyIncome > negativesTotal){
            
            var total = MonthlyIncome - negativesTotal;
            //console.log(total);
            document.getElementById('totalExpenses').innerText = 'Total Expenses: ' + negativesTotal + ' $';
            document.getElementById('remainingBalance').innerText = 'Remaining Balance: ' + total + ' $';
            }else{
                alert('Your expenses is higher than your income.');
            }
    } else{
        alert('Please enter valid values for expenses.');
    }

    document.getElementById('percentBtn').addEventListener('click',function(){
        const percentInput =parseFloat(document.getElementById('percentInput').value);
        if(Math.sign(percentInput) == 1){        
        const percentTotal = total * (percentInput/100);
        const remaining = total - percentTotal;

        document.getElementById('mainBalance').innerText = remaining;
        document.getElementById('percentSaved').innerText = percentTotal;
        }else{
            alert('Negative values are not allowed');
        }
    })
})
