function createInput() {
  var input = document.createElement("input"),
      inputLabel = document.createTextNode("Сколько кнопок создать?");
      
  
  input.setAttribute("id", "2");
  
  document.body.appendChild(input);
  document.body.appendChild(inputLabel);
  
    var iField = document.getElementById("2");
    iField.oninput = function(){
      var t = iField.value
      console.log("введено " + t);
      input.setAttribute("value", t);
      };
};

function createXButtons(p) { 
  for(i=0;i < p;i++) {
      var btn = document.createElement("button"),
          btnName = document.createTextNode("Button");
      btn.appendChild(btnName);
      btn.setAttribute("class", "blank");
      document.body.appendChild(btn);
      
  }
};

function Button() { 
  
      var btn1 = document.createElement("button"),
          btnName = document.createTextNode("Create buttons");
      btn1.setAttribute("id","1");
      btn1.appendChild(btnName);
      
      document.body.appendChild(btn1);
  btn1.addEventListener("click", function(){createXButtons(document.getElementById("2").value)});
};

function checkValue(){
  console.log(document.getElementById("2").value);
};

function checkButton() { 
  
      var btn2 = document.createElement("button"),
          btnName = document.createTextNode("CheckValue(itWorks)");
      btn2.setAttribute("id","3");
      btn2.appendChild(btnName);
      
      document.body.appendChild(btn2);
  btn2.addEventListener("click", checkValue);
};
function removeButton() { 
  
      var btn4 = document.createElement("button"),
          btnName = document.createTextNode("Remove blank button");
      btn4.setAttribute("id","4");
      btn4.appendChild(btnName);
      
      document.body.appendChild(btn4);
  btn4.addEventListener("click", removeBlanks);
};
function removeBlanks() {
  var blanks = document.body.querySelectorAll(".blank");
  console.log(blanks.length);
  //blanks[0].remove(); // удаляю новым методом
  document.body.removeChild(blanks[0]); // удаляю старым методом.
   
};

createInput();
checkButton();
Button();
removeButton();