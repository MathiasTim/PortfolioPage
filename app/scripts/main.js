jQuery(document).ready(function($) {
    'use strict';
    var home = {
        init: function(){
            this.eventListeners();
            this.resize();
        },
        eventListeners: function(){
            $(window).resize(function(){
            });
            $('#toggle_nav').on('click', function(){
                $(this).siblings('ul').toggleClass('active');
            });
        },

        menu: function(){

        }
    };

    home.init();
});