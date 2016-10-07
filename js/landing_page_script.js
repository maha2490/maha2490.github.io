// landing_page_script.js

//typed effect
$(function(){
    $(".element").typed({
        strings: ["rachel mahan"],
        typeSpeed: 200

    });
});

//fade in on scroll down
$(function() {
    $(window).scroll( function(){
    
       
        $('.fade_in_block').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
        }); 
    
    });
});