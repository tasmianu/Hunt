$(function(){
    // fixed menu
    $(window).scroll(function(){
      let scrolling =$(this).scrollTop();
      if(scrolling > 0){
        $(".navbar").addClass("fixed");
      }
      else{
        $(".navbar").removeClass("fixed");
      }
    })
    // banner slider js
    $('#banner').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        prevArrow: '<i class="fa fa-arrow-left icon left"></i>',
        nextArrow: '<i class="fa fa-arrow-right icon right"></i>',
      });

    
      // venobox js
      $('.Venobox').venobox();

          // service slider js

    $('.service-main-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      verticalSwiping: true,
      vertical: true,
      centerMode: true,
      centerPadding: '0',
      autoplay: true,
      prevArrow: '<i class="fa fa-chevron-up icon-left"></i>',
      nextArrow: '<i class="fa fa-chevron-down icon-right"></i>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });





    // counter js
    $('.counter').counterUp({
      delay: 10,
      time: 10000
  });

     // sponsor slider js
      $('.sponsor-main').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      autoplay: true,
  });

    // feed person slider js
    $('.feed-person-main').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      autoplay: true,
      verticalSwiping: true,
      vertical:true,
      // prevArrow: '<i class="fa fa-chevron-up icon left"></i>',
      // nextArrow: '<i class="fa fa-chevron-down icon right"></i>',
      asNavFor: '.feed-details-main',
  });


  // feed details slider js
  $('.feed-details-main').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.feed-person-main',
  })

})