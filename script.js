var h2 = document.querySelectorAll('h2')
console.log(h2[0].textContent)
var btn = document.querySelectorAll('button')
btn[0].addEventListener('click', incomeUpdate)
var inp = document.querySelectorAll('input')
var h1 = document.querySelector('h1')
var table1 = document.createElement('table')
btn[1].addEventListener('click', expenseUpdate)
var table2 = document.createElement('table')
var display = document.getElementById('display')
display.append(table1, table2)
var flag1 = true
var flag2 = true
var inc = 0
var exp = 0
var i =1
var j =1
console.log(h1.textContent)
function incomeUpdate(){
    inc = inc + Number(inp[1].value)
    // console.log(inc)
    h2[0].textContent = "Income: " + inc
    h1.textContent = "Available Money: "+ inc
    // console.log(h1.textContent)
    var row1 = document.createElement('tr')
    if(flag1 == true)
    {
        row1.innerHTML = '<th>'+'Sl.No'+'<th>'+'Income'+'<th>'+'Amount'
        flag1 = false
    }
    
    var row2 = document.createElement('tr')
    row2.innerHTML = '<td>'+i+'<td>'+inp[0].value +'<td>'+inp[1].value
    console.log(row2)
    i++
    table1.append(row1, row2)
    table1.style.float = "left"
    document.body.append(table1)
}
console.log(h2[1].textContent)
function expenseUpdate(){
    exp = exp + Number(inp[3].value)
    console.log(exp)
    h2[1].textContent = "Expenses: "+ exp
    h1.textContent = "Available Money: "+ (inc - exp)
    var row1 = document.createElement('tr')
    if(flag2 == true)
    {
        row1.innerHTML = '<th>'+'Sl.No'+'<th>'+'Expense'+'<th>'+'Amount'
        flag2 = false
    }
    
    var row2 = document.createElement('tr')
    row2.innerHTML = '<td>'+j+'<td>'+inp[2].value +'<td>'+inp[3].value
    console.log(row2)
    j++
    table2.append(row1, row2)
    // table2.style.float = "left"
    document.body.append(table2)
}