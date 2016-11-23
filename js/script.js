'use strict';

$(document).ready(function(){
  $('.title, .emailRedirect').delay(800).addClass('animated fadeIn').fadeIn(900);
// email call
  $("input#submit").click(function(){
        $.ajax({
            type: "POST",
            url: "process.php", //process to mail
            data: $('form.contact').serialize(),
            success: function(msg){
                $("#thanks").html(msg) //hide button and show thank you
                $("#form-content").modal('hide'); //hide popup
            },
            error: function(){
                alert("failure");
            }
        });
    });

});

var $animationElements = $('.animationElements');
var $window = $(window);

function check_if_in_view() {
  var windowHeight = $window.height();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);

  $.each($animationElements, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);


  // check to see if this current container is within viewport
    if ((elementBottomPosition >= windowTopPosition) &&
      (elementTopPosition <= windowBottomPosition)) {
      $element.addClass('in-view');

    } else {
      $element.removeClass('in-view');
    }
  });
};


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
