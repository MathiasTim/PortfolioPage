jQuery(document).ready(function($) {
    'use strict';
    var home = {
        init: function(){
            this.eventListeners();
            console.log('Wanna check out the code? No problem, since this here is minified, visit https://github.com/MathiasTim/PortfolioPage');
        },
        eventListeners: function(){
            $('#toggle_nav').on('click', function(){
                $(this).siblings('ul').toggleClass('active');
            });
            $('.main_nav').on('click', 'a', function(){
                $('.main_nav ul').toggleClass('active');
                $('.main_nav li').removeClass('pure-menu-selected');
                $(this).parent('li').addClass('pure-menu-selected');
            });
            $('.project').on('mouseover', function(){
                $('.project').removeClass('active');
                $(this).addClass('active');
            });
        }
    };

    home.init();
});