var students = {
  "zahirZavad": {"name":"Zahir", "lastName":"Zavad", "friends":["Amir", "Zurab"]},
  "MamedLoh": {"name":"Mamed", "lastName":"Loh", "hobbies":["read","write"], "height":"180cm"}
}, jready = JSON.stringify(students);
console.log(jready);
console.log(students);



(function forgottenButton() {
  var x = document.createElement("button"),
      y = document.createTextNode("JS Забыл зачем делал эту кнопку");
  x.setAttribute("id", "1");
  x.appendChild(y);  
  document.body.appendChild(x);
    if (document.getElementById("1")) {
    console.log("Элемент с айди 1 существует");
    document.getElementById("1").onclick = function() {console.log("нажал на кнопку")};    
    }
    else {console.log("Кнопки с ID=1 НЕТУ")};  
  
}());
(function events() {
  document.getElementById("2").onclick = function() {console.log(students)};
  document.getElementById("3").onclick = function() {console.log(students.zahirZavad)};
  document.getElementById("4").onclick = function() {console.log("zahirZavad name is: " + students.zahirZavad.name)};
  document.getElementById("5").onclick = function() {
    var newHttp = new XMLHttpRequest();

    newHttp.onload = function() { console.log(newHttp.response);};
    newHttp.open("GET", "http://localhost:3000/posts/1", true);
    newHttp.send();
    var RRespone = newHttp.response;
    students.push.RResponse;
  };
})();

