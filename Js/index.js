// var x = document.getElementById("fade").style.background;
// console.log(x);

// var img = document.getElementById('fade'),
// style = img.currentStyle || window.getComputedStyle(img, false);
// bi = style.backgroundImage.slice(4, -1);
// console.log(bi);

function classToggle() {
    var picture = this.classList.toggle('insertPicture');
    this.classList.toggle('insertPicture2');
}
document.querySelector('#fade').addEventListener('click', classToggle);



var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu", "Sveikinu radus darbą"];

function long(text) {
    var longist = "";
    var funny = [];
    var final = " ";

    for (var i = 0; i < posts.length;i++) {

      var line = text[i].split(" ");
      var current = 0;
      var max = 0;

      for (var j = 0; j < line.length; j++) {

         var prev = max;
          current = line[j].length;

          if (current > prev) {

            max = current;

            if( max == line[j].length) {
              longist = line[j];
            }
          }
      }
      funny.push(longist);
    }
    for (var k = 0; k <funny.length; k++) {
      final = final + funny[k] + " ";
    }
    console.log(final);

}
// long(posts);

function universal(text1) {

  var longist = "";
  var line = text1.split(" ");
  var current = 0;
  var max = 0;

  for (var j = 0; j < line.length; j++) {

     var prev = max;
      current = line[j].length;

      if (current > prev) {

        max = current;

        if( max == line[j].length) {
          longist = line[j];
        }
      }
  } return longist;
}

  var final = [];
  var finaly = "";

for (var i = 0; i < posts.length;i++) {
     var simple =universal(posts[i]);
     final.push(simple);
}

for (var k = 0; k <final.length; k++) {
  finaly = finaly + final[k] + " ";
}

console.log(finaly);



// Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
// 1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
// 2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
// 3. Išvedant žodžius panaudoti tarpą tarp žodžių
// 4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
// 5. Rezultatą išvesti konsolėje
//
// // Masyvas
// var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
//
//
