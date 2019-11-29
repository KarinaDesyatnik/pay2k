$(function(){
  // ------ start mobil menu---
$('.btn_menu').click(function(){
		$('.menu ul').toggleClass('active');
		$('.btn_menu').toggleClass('active');
    $('.top-header').toggleClass('active');
	})
  // ------end mobil menu---

  $('.slider').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
slidesToShow: 3,
centerMode: true,
centerPadding: '40px',

responsive: [
   {
    breakpoint: 690,
    settings: {
      slidesToShow: 2,
      centerPadding: '125px'
    }
  },
 {
    breakpoint: 626,
    settings: {
      slidesToShow: 2,
      centerPadding: '100px'
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 2,
      centerPadding: '70px'
    }
  },
  {
    breakpoint: 520,
    settings: {
    slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
    	slidesToShow: 1,
    	centerPadding: '125px'
     
    }
  },
   {
    breakpoint: 450,
    settings: {
      slidesToShow: 1,
      centerPadding: '220px'
     
    }
  },
   {
    breakpoint: 430,
    settings: {
      slidesToShow: 1,
      centerPadding: '200px'
     
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      centerPadding: '150px'
     
    }
  },
   {
    breakpoint: 350,
    settings: {
      slidesToShow: 1,
      centerPadding: '105px'
     
    }
  },


  ]

});
$('.slider').slick("setPosition");


$(window).scroll(function() 
{
     if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
     {
          $('.download__button-wrapper').removeClass('fixed');
     } else {
      $('.download__button-wrapper').addClass('fixed');
     }

});




});


$(function(){
	$('.question-item').click(function(){
		$(this).toggleClass('active');
		$(this).find('p').slideToggle();
		$(this).find('.btn-close').toggleClass('active');
		


	});
});

var ignored_first_lang_select = false;
$('#leng-select').ddslick({
onSelected: function(data){

if (!ignored_first_lang_select) {
ignored_first_lang_select = true;
return;
}
document.getElementById('language').value = data.selectedData.value;
document.getElementById('redirect').value = '/' + data.selectedData.value + location.pathname.substr(3);
document.getElementById('lang-form').submit();
}
});
