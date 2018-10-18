// добавляю онклик ивент
var btn = document.getElementById('btn'); // обозначаю кнопку
var clickCounter = 1; // каунтер для прятания кнопки
var div = document.getElementById('container'); // обозначаю дивку
function renderHtml(data) {
  for(i = 0; i < data.length; i++){ // Формирую собственно строку с инфой
    var infaForDiv = ("<p>" + data[i].name + " is a " + data[i].species + " and he likes ");
    for(ii = 0; ii < data[i].foods.likes.length; ii++){ // Добавляю проперти объекта любимая еда
      infaForDiv += (data[i].foods.likes[ii]);
      if (ii < (data[i].foods.likes.length - 1)){ // Добавляю and после непоследней проперти объекта
          infaForDiv += " and ";
          };
    };
    infaForDiv += (" while dislikes " );
    for(ii = 0; ii < data[i].foods.dislikes.length; ii++){ // Добавляю проперти объекта любимая еда
      infaForDiv += (data[i].foods.dislikes[ii]);
      if (ii < (data[i].foods.dislikes.length - 1)){ // Добавляю and после непоследней проперти объекта
          infaForDiv += " and ";
          };
    };  
    infaForDiv += ".</p>" // закрываю тег
    div.insertAdjacentHTML("beforebegin", infaForDiv);
  };
  
  
};
btn.addEventListener('click', function() { // Кликаю на кнопку
       // По клику стягиваю инфу по урлу, вывожу объекты в дивку.
    
    var getAnimals = new XMLHttpRequest(); 
    getAnimals.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + clickCounter + '.json'); // вставил переменную прямо в урлу
    getAnimals.onload = function() {var obj = JSON.parse(getAnimals.responseText)
      renderHtml(obj); 
      };
    getAnimals.send();
    clickCounter++;
  if (clickCounter > 3){ // Скрываю кнопку
    btn.style.display = "none"; // Прячу кнопку после 3х кликов
  }
});