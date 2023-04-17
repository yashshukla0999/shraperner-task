// let expense = document.getElementById('expense').value;
// let descipition = document.getElementById('descipition').value;
// let category = document.getElementById('category').value;
let val = document.addEventListener('submit',updateForm);
function updateForm(event){
    event.preventDefault();
    let expense = event.target.expense.value;
    let descipition = event.target.descipition.value;
    let category = event.target.category.value
var obj ={
    expense:expense,
    descipition:descipition,
    category:category
}
localStorage.setItem(descipition,JSON.stringify(obj) )

//     let expense = document.getElementById('expense').value;
//     localStorage.setItem('expense',expense);
// let descipition = document.getElementById('descipition').value;
// localStorage.setItem('descipition',descipition);


// let category = document.getElementById('category').value;
// localStorage.setItem('category',category)
   




show(obj);
};
function show(obj){
//     let expense = document.getElementById('expense').value;
// let descipition = document.getElementById('descipition').value;
// let category = document.getElementById('category').value;
    let prt = document.getElementById('print');
    let childr = document.createElement('li');
    childr.textContent=obj.expense +'--' +obj.descipition +'--'+obj.category;
   

    let btn = document.createElement('button');
     btn.textContent = 'delete expense';
     let edit = document.createElement('button');
     edit.textContent='edit expense';
     btn.onclick=()=>{
      localStorage.removeItem(childr);
      prt.removeChild(childr)
     document.getElementById('expense').value=obj.expense;
   document.getElementById('descipition').value=obj.descipition;
      document.getElementById('category').value = obj.category;
}
prt.appendChild(childr);
      childr.appendChild(btn);
      childr.appendChild(edit);
}