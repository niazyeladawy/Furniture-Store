$(function (){
    'use strict';
   

    // deal with tabs
    $('.bullets li').click(function(){
        // add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');

        //hide all divs
        $('.events .event-content > div ').hide();
        
        //show connected div
        $('.' + $(this).data('class')).show();
        
    });

    $('#sda').click(function(){
        $('#sda i').toggleClass('fa-minus-square').toggleClass('fa-plus-square');
    });

    // showing user
    $(".fa-user").on("click",function(){
        $(".login .user").slideToggle(600);
    });


    // scroll top
    // show button on scroll
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $(".scrolltops .scrolltop").fadeIn();
        }
        else{
            $(".scrolltops .scrolltop").fadeOut();
        }
        
    });

    // scroll to top
    $(".scrolltops .scrolltop").on("click" ,function(){
        $("html,body").animate({scrollTop:0},1000);
    });
    
    
})