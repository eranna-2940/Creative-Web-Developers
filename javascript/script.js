$(window).on('load',function(){
    $('#pre-loader_status').fadeOut();
     $('#pre-loader').delay(350).fadeOut();
   
});
$(function (){
    $('#karthik').responsiveTabs({
        startCollapsed: 'accordion'
    });
});

$(window).on('load',function(){
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.portfolio-buttons').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
    $('.portfolio-buttons').find('.active').removeClass('active');
    $(this).addClass('active');
    
    
});
});
$(function(){
      $(window).scroll(function(){
          showHideWhiteNav()
   }); 
    
     
      function showHideWhiteNav(){
      if($(window).scrollTop() > 50){  
          
          $("nav").addClass("white-nav-top"); 
          
          $("#back-to-top").fadeIn();

          
      }else{
          $("nav").removeClass("white-nav-top");
          
          $("#back-to-top").fadeOut();
          
      }    
        
    }   

});
 
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        var section_id=$(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 85
            
        }, 1000, "easInOutQuint");
    }); 
    
    
    
  });

