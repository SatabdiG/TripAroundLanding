/**
 * Created by tasu on 24/11/16.
 */


function landingpagecontroller() {
    console.log("In JS");
    
    $(document).ready(function () {        
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

