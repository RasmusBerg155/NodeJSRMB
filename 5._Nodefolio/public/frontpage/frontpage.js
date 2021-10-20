$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
     $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.navbar i').toggleClass("active");
     });
 
     // Work in progress counter, missing dependencies
    /* $('.counter').counterUp({
         delay: 10,
         time: 1000
     }); */
 
 
     // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                 items: 1,
                 nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            },
        }
    });
 });