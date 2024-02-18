$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.frame-parent24').addClass("sticky");
        }else{
            $('.frame-parent24').removeClass("sticky");
        }
