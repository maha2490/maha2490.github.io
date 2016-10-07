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
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 400;  

            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},1000);                   
            }
        });    
    });
});