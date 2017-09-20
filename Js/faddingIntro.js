
  $(document).ready(function () {

    //fading intro
    $('.faddingIntr p').fadeIn(2000).removeClass("hidden1");
    $('.faddingIntr .logoIntr').fadeIn(2000, function() {

      $('.faddingIntr .faddingIntr').removeClass("hidden1");

      $(".faddingIntr").fadeOut(1500, function() {

          $(this).removeClass("faddingIntr");
        });
    });
});
