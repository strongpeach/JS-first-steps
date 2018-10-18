function createTable() {
  var table = document.createElement("table"),
      tBody = document.createElement("tbody");
      
      
  table.setAttribute("border", "9px");
  table.setAttribute("width", "1002px");
  for (i = 0; i < 3; i++) { // количество ТР
  var tr = document.createElement("tr"); 
           for (d = 0; d < 3; d++) { // количество ТД для каждого ТР
           var td = document.createElement("td");
           tr.appendChild(td);
      
           }
  tBody.appendChild(tr);   
  }
table.appendChild(tBody);
document.body.appendChild(table); // Добавляю таблицу
  
};
createTable();

function ch(){
  var t = document.body.getElementsByTagName("table"),
      tr = document.body.getElementsByTagName("tr"),
      td = document.body.getElementsByTagName("td");
  console.log("Создано: " + t.length + " таблица " + tr.length + " ряд " + td.length + " столбик");
}
ch();