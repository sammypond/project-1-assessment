var minus = document.getElementById("sub");
var plus = document.getElementById("add");
var number = document.getElementById("number");
var numinput = document.getElementById("numinput");
var num = 0;

minus.addEventListener("click", function(e) {
  num -= Number(numinput.value);
  number.textContent = num;
  if(num > 0){
      number.style.color = 'green';
  } else if (num < 0) {
      number.style.color = 'red';
  }
})

plus.addEventListener("click", function(e) {
  num += Number(numinput.value);
  number.textContent = num;
  if(num > 0){
    number.style.color = 'green';
} else if (num < 0) {
    number.style.color = 'red';
}
})

