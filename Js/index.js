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



var pcs = [
	{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
	{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
	{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
	{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

// var obj = [];
// var arr = [ { modelis: [] } ];
// var arrP = arr[0].modelis;
// for (var i = 0; i < pcs.length;i++) {
//     if (pcs[i].kaina * 2 <= 1600) {
//       var Spalva = Object.keys(pcs[i].spalva);
//
//       for (var b = 0; b < Spalva.length; b++) {
//         if ((Spalva[b] == "balta") || (Spalva[b] == "juoda") && (pcs[i].spalva[Spalva[b]] >= 2) ) {
//             if (arr != pcs[i].modelis) {
//             arrP.push(pcs[i].modelis);
//             // for (var c = 0;c<arrP.length;c++) {
//             //   if (arrP[c] == pcs[i].modelis) {
//                 obj.push(pcs[i].modelis);
//             //   }
//             // }
//
//           }
//
//             }
//         }
//       }
//     }
//     console.log(arrP.length);
// console.log(obj);


for (var i = 0; i < pcs.length;i++) {

   if (pcs[i].kaina * 2 <= 1600) {

     var Spalva = Object.keys(pcs[i].spalva);


     var temp = 0;

     for (var b = 0; b < Spalva.length; b++) {

       if ((Spalva[b] == "balta") || (Spalva[b] == "juoda") && (pcs[i].spalva[Spalva[b]] >= 2) ) {

         if (!temp >= 1 ) {

           var modelis = "Modelis: " + pcs[i].modelis + " \n " + "Kaina: " + pcs[i].kaina * 2 + " \n " + "Spalva:" + Spalva[b];
           temp++;

         } else {
            modelis = modelis + " ir " + Spalva[b] + " \n ";
         }
       }
     }
     console.log(modelis);
    }
   }
