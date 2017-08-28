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


// function imgMax() {
//   var picture1 = this.classList.toggle("image");
//   this.classList.toggle("img_onClick");
// }
// document.querySelector("#resize").addEventListener("click", imgMax);
