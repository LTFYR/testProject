
window.addEventListener("load",window.addEventListener("scroll",function(){
    var head = document.querySelector(".mainhead__main");
    head.classList.toggle("sticky",window.scrollY>120);
    
})  )

///grid and list view in shop//
$(".second").click(function () {
    $(".shop-wrapper__product__all").css({ display: "none" });
    $(".shop-wrapper__product__listview").css({ display: "block" });
  });
  
  const listItem = $(".second");
  
  listItem.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $(".active").click(function () {
    $(".shop-wrapper__product__all").css({ display: "none" });
    $(".shop-wrapper__product__listview").css({ display: "block" });
    
  });

  const listItem2 = $(".active");
  listItem.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });



$(document).ready(function(){

    $(".productdetails-main__top__bottomimages img").click(function(){
        console.log("clicked")
        var image = $(this).attr("src");
        $(".productdetails-main__top__mainimage img").attr("src",image);
    })
})


// single product image js ends
//scroll for all pagws starts
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.scrolling').removeClass('hide');
    } else {
        $('.scrolling').addClass('hide');
    }
});
$('.scrolling').on('click', function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 0);
});
//scroll for all pagws ends

$(function(){
    var tab = $(".productdetails-main__bottom__comments__nav__btn"),
    content = $(".productdetails-main__bottom__comments__content__tab");

    tab.filter(':first').addClass('active');

    content.filter(':not(:first)').hide();

    tab.click(function(){
        var indeks = $(this).index();
        tab.removeClass('active').eq(indeks).addClass('active');
        content.hide().eq(indeks).fadeIn(500);
        return false;
    })
})