

function classToggle() {
    var picture = this.classList.toggle('insertPicture');
    this.classList.toggle('insertPicture2');
}
document.querySelector('#fade').addEventListener('click', classToggle);

//gallery
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



  $(document).ready(function () {

    //fading intro
    $('.faddingIntr p').fadeIn(2000).removeClass("hidden1");
    $('.faddingIntr .logoIntr').fadeIn(2000, function() {

      $('.faddingIntr .logoIntr').removeClass("hidden1");

      $(".faddingIntr").fadeOut(1500, function() {

          $(this).removeClass("faddingIntr");
        });
    });




        /* Every time the window is scrolled ... */
        $(window).scroll( function(){

            /* Check the location of each desired element */
            $('.hiddeMe').each( function(i){

                var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){

                    $(this).animate({'opacity':'1'},1000);

                }

            });

        });

            $(".burger-container").on('click', function(){
                $(this).toggleClass("open");
                $('.ul-nav').toggle(function () {
                  $(".ul-nav").removeClass("hidden2");
                }, function () {
                    $(".ul-nav").addClass("hidden2");
                });
            });

});
