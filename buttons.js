var btnIsClicked = (function alert() {
		console.log("Button is clicked")
    }),
    readLabel = (function readLabel() {
    console.log(this.innerHTML)
    }),
    changeLabel = function changeLabel() {
      var element = document.getElementById("b3"),
      inputText = document.getElementById("input-field").value;
      
      element.innerHTML = inputText;
      console.log("Изменился текст");
    },
    readInput = function (){
      var inputText = document.getElementById("input-field").value
      console.log(inputText);
          
    }
;

document.getElementById("b3").addEventListener("click", changeLabel);
document.getElementById("b4").addEventListener("click", readInput);

document.getElementById("ok").addEventListener("click", btnIsClicked);
document.getElementById("b2").addEventListener("click", readLabel);
