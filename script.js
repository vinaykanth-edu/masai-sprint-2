// function add(inctab){

//     var inc = document.getElementById('inc').value;
//     var amt = document.getElementById('add').value;
//     // var exp = document.getElementById('exp').value;
//     // var sub = document.getElementById('sub').value;

//     var table = document.getElementsById('inctab');
//     // var newRow = table.insertRow(-1);  
//     // var cel1 = newRow.insertCell(0);
//     // var cel2 = newRow.insertCell(1);   
//     // cel1.innerHTML = inc;
//     // cel2.innerHTML = amt;
//     var ele = document.createElement('tr')
//     var td1 = document.createElement('td')
//     var td2 = document.createElement('td')
//     td1.innerHTML = inc
//     td2.innerHTML = amt
//     ele.appendChild(td1)
//     ele.appendChild(td2)  
//     table.appendChild(ele)
    
// }
// function add(){
//     var inc = document.getElementById('middle-box1')
//     var p = document.createElement('p')
//     p.textContent = document.getElementById('add').value
//     inc.appendChild(p)
      
// }
var arr = []
var exp = []
function add(){   
    var total = 0
    
    var money = document.getElementById('add').value
    arr.push(money)
    for(var i=0; i<arr.length; i++)
    {
        total = total + Number(arr[i])
    }
    // var h1 = document.getElementById("h1")
    // h1.innerHTML = "Available Money: " + money
    var income = document.getElementById('income')
    // income.innerHTML = "Income: "+ money
    // var p = document.createElement('p')
    income.innerHTML = "Income: "+ total
   
    
}
function sub(){
    var ini_exp = 0
    var expense =document.getElementById('sub').value
    var ele2 = document.getElementById('expense')
    exp.push(expense)
    for(var j=0; j<exp.length; j++)
    {
        ini_exp = ini_exp + Number(exp[i])
    }
    ele2.innerHTML = "Expenses: "+ ini_exp
    
}