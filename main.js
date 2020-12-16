$(".carousel").carousel({
  interval: 12000
});

if ($("#1" ).hasClass( "active" )) {
    $('.navbar-brand').addClass("red");
}


$("#bg").on("slide.bs.carousel", function(ev) {
  var id = ev.relatedTarget.id;
  switch (id) {
    case "1":
      if ($(".navbar-brand").is(".pinkbar")) {
        $(".navbar-brand").removeClass("pinkbar");
      }
      if ($(".navbar-brand").is(".redbar")) {
        $(".navbar-brand").removeClass("redbar");
      }
      $(".navbar-brand").addClass("greenbar");
      break;
    case "2":
      if ($(".navbar-brand").is(".greenbar")) {
        $(".navbar-brand").removeClass("greenbar");
      }
      if ($(".navbar-brand").is(".bluebar")) {
        $(".navbar-brand").removeClass("bluebar");
      }
      $(".navbar-brand").addClass("pinkbar");
      break;
    case "3":
      if ($(".navbar-brand").is(".pinkbar")) {
        $(".navbar-brand").removeClass("pinkbar");
      }
      if ($(".navbar-brand").is(".navybar")) {
        $(".navbar-brand").removeClass("navybar");
      }
      $(".navbar-brand").addClass("bluebar");
      break;
    case "4":
      if ($(".navbar-brand").is(".bluebar")) {
        $(".navbar-brand").removeClass("bluebar");
      }
      if ($(".navbar-brand").is(".redbar")) {
        $(".navbar-brand").removeClass("redbar");
      }
      $(".navbar-brand").addClass("navybar");
      break;
    case "5":
      if ($(".navbar-brand").is(".navybar")) {
        $(".navbar-brand").removeClass("navybar");
      }
      if ($(".navbar-brand").is(".greenbar")) {
        $(".navbar-brand").removeClass("greenbar");
      }
      $(".navbar-brand").addClass("redbar");
      break;
    // default:
    //   $(".navbar-brand").addClass("greenbar");
  }
});

/*
Notes
- Square around name for brand?
- Trans/light white navbar
- Circle gradient, top darker?
*/

/*#pinkmodel {
	background-image: linear-gradient(to bottom left, $transparent 0, $pink 80% ), url(https://s17.postimg.org/50lqy22bj/do-sharp.jpg);
	background-size: cover;
	height: 100%;
	position: relative;
}
*/

/* BG and BTN UX */
/*
  Bootstrap Carousel Fade Transition (for Bootstrap 3.3.x)
  CSS from:       http://codepen.io/transportedman/pen/NPWRGq
  and:            http://stackoverflow.com/questions/18548731/bootstrap-3-carousel-fading-to-new-slide-instead-of-sliding-to-new-slide
  Inspired from:  http://codepen.io/Rowno/pen/Afykb 
*/
/*
  WHAT IS NEW IN 3.3: "Added transforms to improve carousel performance in modern browsers."
  Need to override the 3.3 new styles for modern browsers & apply opacity
*/
/* Making Everything Responsive */

  .navbar {
    z-index: -1 !important;
    opacity: 0;
  }
  */

  .navbar {
    z-index: -1 !important;
  }
  */

  margin-left: -120px !important;
  margin-top: -300px !important;*/

/* Code Graveyard */
/*
Project Details


<div class="modal fade" id="sailormoontv" tabindex="-1" role="dialog" aria-labelledby="smtvLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
*/

/*

.visible {
   animation: appear .5s;
   animation-fill-mode: both;
}

.hidden {
   animation: disappear .5s;
   animation-fill-mode: both
} 

@keyframes appear {
    from {
        opacity: 0;
    }
    to {
      opacity: 1;  
      z-index: 4;
    }
}

@keyframes disappear {
    from {
      opacity: 1;  
      z-index: 4;
  }
    to {
      opacity: 0;  
      z-index: -2;
    }
}

*/

// On Click Modal

$('#sailormoontv').on('shown.bs.modal', function (e) {
	$('#pinkmodel').addClass("visible");
  $("#bg").carousel('pause');
});                     
$('#sailormoontv').on('hidden.bs.modal', function (e) {
	$('#pinkmodel').removeClass("visible");
  $('#pinkmodel').addClass("hidden");
  $("#bg").carousel('cycle');
});  


/*
.red {
  margin-bottom: 200px !important;
  transition-duration: 1s;
}

*/

/*
$('#bg').bind('mousewheel', function(e) {
     if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('next');
    } else {
        $(this).carousel('prev');
    }
});
*/

/*https://s17.postimg.org/ndn7o0t31/Screen_Shot_2018-01-03_at_9.27.44_PM.png*/
