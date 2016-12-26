'use strict';

$(document).ready(function(){
  $('.title, .emailRedirect').delay(800).addClass('animated fadeIn').fadeIn(900);

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

function initMap() {
        var uluru = {lat: 30.307, lng: -97.755};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
