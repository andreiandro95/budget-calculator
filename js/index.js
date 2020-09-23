// input from html
let inputBudget = document.querySelector(".budget-input");
let inputNameExpense = document.querySelector(".expense-type-input");
let expenseAmount = document.querySelector('.expense-input');
// input buttons
let calculateBudget = document.querySelector('.calculate-budget');
let addExpenses = document.querySelector('.calculate-expense');
// modify budget expenses and balance
let budgetNum = document.querySelector(".budget-total");
let expenseNum = document.querySelector(".expenses-total");
let balanceNum = document.querySelector('.balance-total');
// table
let table = document.querySelector(".table-statistic");


// add budget
calculateBudget.addEventListener('click', function(){
    if(inputBudget.value === "" || inputBudget.value < 0){
        alert("Input a number");
    }else{
        budgetNum.textContent = inputBudget.value;
        balanceNum.textContent = inputBudget.value;
        if(balanceNum.textContent > 0){
            document.querySelector('.balance-amount').style.color = "green";
        }
    }
    inputBudget.value = "";
});

// add expensive
addExpenses.addEventListener('click', function(){
    if((inputNameExpense.value === "") || (expenseAmount.value === "") || (expenseAmount.value < 0)){
        alert("Input something");
    }else{
        expenseNum.textContent = +expenseNum.textContent + +expenseAmount.value;
        balanceNum.textContent -= +expenseAmount.value;
       
        if(balanceNum.textContent < 0){
            document.querySelector('.balance-amount').style.color = "red";
        }else if(balanceNum.textContent > 0){
            document.querySelector('.balance-amount').style.color = "green";
        }else{
            document.querySelector('.balance-amount').style.color = "black";
        }  
    }
    createElement()
    expenseAmount.value = "";
    inputNameExpense.value = ""
})

function createElement(){
    let divForList = document.createElement("div");
    divForList.classList.add("expense-list-row");
    document.querySelector('.expense-list').appendChild(divForList);

    let nameExpense = document.createElement("h3");
    nameExpense.classList.add("expense-name-info");
    let nameExpenseText = document.createTextNode(inputNameExpense.value);
    nameExpense.appendChild(nameExpenseText);
    divForList.appendChild(nameExpense);

    let valueExpense = document.createElement("h3");
    valueExpense.classList.add("expense-value-info");
    let valueExpenseText = document.createTextNode(expenseAmount.value);
    valueExpense.appendChild(valueExpenseText);
    divForList.appendChild(valueExpense);

    let divBtns = document.createElement("div");
    divBtns.classList.add("btn-div");
    divForList.appendChild(divBtns);

    let btnEdit = document.createElement("span");
    let iconBtnEdit = document.createElement("i");
    iconBtnEdit.setAttribute('class', "fas fa-edit editButton");
    btnEdit.appendChild(iconBtnEdit);
    divBtns.appendChild(btnEdit);

    let btnDelete = document.createElement("span");
    let iconBtnDelete = document.createElement("i");
    iconBtnDelete.setAttribute('class', "fas fa-trash-alt deleteButton");
    btnDelete.appendChild(iconBtnDelete);
    divBtns.appendChild(btnDelete);

  
    btnDelete.addEventListener("click", function(){
        divForList.remove();
    });

    btnEdit.addEventListener("click", function(){
        inputNameExpense.value = nameExpense.textContent;
        expenseAmount.value = valueExpense.textContent;
        divForList.remove();
    })

}
