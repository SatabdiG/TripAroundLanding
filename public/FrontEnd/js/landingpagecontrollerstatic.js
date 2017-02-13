/**
 * Created by tasu on 24/11/16.
 */


function landingpagecontroller() {
    console.log("In JS");
    
    $(document).ready(function () {        
        // Initialize Masonry
        initializeGrid();
        document.addEventListener("mousewheel", MouseWheelHandler, false);
        document.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
        document.addEventListener("scroll", MouseWheelHandler, false);
        //Initialize the parallax scrolling
        $('a[href*=#]').each(function(){
           if(location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,""))
           {

               var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
               var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
               if ($target) {
                   var targetOffset = $target.offset().top;
                   var dis=targetOffset;
                   $(this).click(function(event) {
                       var currselection=$(event.target).text();
                       if(currselection !== "Top")
                       {
                           console.log("In target");
                           $('#nav').removeClass('navbar-transparent');

                       }else
                       {
                           $('#nav').addClass('navbar-transparent');
                       }
                       $("#nav li a").removeClass("active");
                       $(this).addClass('active');
                       $('html, body').animate({scrollTop: dis}, 1000);
                       return false;
                   });
               }
           }




        });

    });
}

// Masonry grid
function initializeGrid() {
  $('.tiles-grid').masonry({
      itemSelector: '.tiles-single-container',
      columnWidth: '.tiles-grid-sizer',
      gutter: 30,
      isFitWidth: true,
      transitionDuration: 0
  });
}

function MouseWheelHandler(e)
{
   
    //Remove class from navbar
    var e= window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
   var pos=document.documentElement.scrollTop || document.body.scrollTop;
   if(pos<56)
        $("#nav").addClass("navbar-transparent");
   else
       $("#nav").removeClass("navbar-transparent");

}



landingpagecontroller();

