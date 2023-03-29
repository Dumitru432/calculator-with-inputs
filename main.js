let a = document.querySelector("#value1");
let b = document.querySelector("#value2");

let addButton = document.querySelector("#add");
let minusButton = document.querySelector("#minus");
let divideButton = document.querySelector("#divide");
let multiplyButton = document.querySelector("#multiply");

let output = document.querySelector("#output");
let clearButton = document.querySelector('#clear')

let result;

function calculate(e) {
  if (e.target.id == "add") {
    result = parseInt(a.value) + parseInt(b.value);
    output.innerText = result;
  } else if (e.target.id == "minus") {
    result = parseInt(a.value) - parseInt(b.value);
    output.innerText = result;
  } else if (e.target.id == "multiply") {
    result = parseInt(a.value) * parseInt(b.value);
    output.innerText = result;
  } else if (e.target.id == "divide") {
    result = parseInt(a.value) / parseInt(b.value);
    output.innerText = result;
  }
}

addButton.addEventListener("click", (e) => calculate(e));
minusButton.addEventListener("click", (e) => calculate(e));
divideButton.addEventListener("click", (e) => calculate(e));
multiplyButton.addEventListener("click", (e) => calculate(e));

clearButton.addEventListener('click', ()=>{
   location.reload()
})


