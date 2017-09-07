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



  $(document).ready(function () {

    $('.faddingIntr p').fadeIn(2000).removeClass("hidden1");
    $('.faddingIntr .logoIntr').fadeIn(2000, function() {
      $('.faddingIntr .logoIntr').removeClass("hidden1");
      $(".faddingIntr").fadeOut(1500, function() {
          $(this).removeClass("faddingIntr");
        });
    });

  //   $('.faddingIntr p').fadeIn(1500).removeClass("hidden1");
  //   $('.faddingIntr .logoIntr').fadeIn(1500).removeClass("hidden1");
  //
  // $('.faddingIntr').on("click", function() {
  //
  //   $(".everything").removeClass('everything');
  //
  //   $(".faddingIntr").fadeOut(1500, function() {
  //     $(this).removeClass("faddingIntr");
  //   });
  // });
});
