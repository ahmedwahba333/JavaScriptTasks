var Answer = document.getElementById("Answer");
var operator = document.getElementsByClassName("operator");
function EnterNumber(myNum) {
  Answer.value += myNum;
}
function EnterOperator(myOperator) {
  Answer.value += myOperator;
}
function EnterClear() {
  Answer.value = "";
}

function EnterEqual() {
  for (let i = 0; i < operator.length; i++) {
    if (
      Answer.value[0] == operator[i].value ||
      Answer.value[Answer.value.length - 1] == operator[i].value
    ) {
      Answer.value = "invalid";
    }
  }

  if (Answer.value.length > 0 && typeof Answer.value != "string") {
    Answer.value = eval(Answer.value);
  } else {
    Answer.value = "invalid";
  }
}
