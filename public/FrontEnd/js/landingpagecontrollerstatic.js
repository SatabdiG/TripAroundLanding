/**
 * Created by tasu on 24/11/16.
 */


function landingpagecontroller() {
    alert("In JS");
    
    $(document).ready(function () {
      
         $('.dropdown-toggle').dropdown();
        $('#viewall').on('click', function()
        {
           window.location.href="#searchtours";        });

        console.log("Welcome to the trip Around -- landing page");
        $('#login').on('click', function () {
            window.location.href = "#login";

        });

        $('#SearchTour').on('click', function(evt)
        {
            console.log("Search tour has been clicked");
            window.location.href="#searchtours";
            //window.location.reload();

        });

        $('#SaveTour').on('click', function(evt){
            console.log("The Save button has been clicked");
            window.location.href="#login";
        });

        $('#langdropdown').on('click', function(evt){
            console.log("trans has been clicked");
        });

     
        var arraynull=[];
        if(lang === "")
        {
        if($("#eng").text()===""){
            lang = "Deutsch";
            sessionStorage.setItem("lang", lang);
        }
        }
        //translateFunction(arraynull,translateLanding);
        // Initialize Masonry
        initializeGrid();

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


landingpagecontroller();

