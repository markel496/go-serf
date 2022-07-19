$(document).ready(function(){
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
		asNavFor: '.slider-dotshead'
	});

	$('.slider-dotshead').slick({
		asNavFor: '.header__slider',
		slidesToShow: 4
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
		asNavFor: '.slider-map',
		responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 721,
      settings: {
        slidesToShow: 2,
        variableWidth: true
      }
    },
    {
    	breakpoint: 351,
      settings: {
      	slidesToShow: 1,
        	variableWidth: false
     	}
    }
  ]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 3
      }
    },
    {
    	breakpoint: 921,
      settings: {
      	slidesToShow: 3,
        	variableWidth: true
     	}
    },
    {
    	breakpoint: 351,
      settings: {
      	slidesToShow: 1,
        	variableWidth: false
     	}
    }
  ]
	});

	$('.holder__slider, .shop__slider').slick({
		slidesToShow: 1,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">'
	});

	$('<div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div>').insertAfter('.quantity input');
   $('.quantity').each(function() {
      var spinner = $(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');

      btnUp.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
           var newVal = oldValue;
         } else {
           var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });
   });

   // let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
   // $('.summ').html('$' + summ);

   // $('.quantity-button').on('click', function(){
   // 	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
   // 	$('.summ').html('$' + summ);
   // });

   $('.quantity').each(function() { //рассчитывает сумму с исходными значениями
		var parents = $(this).parents('.holder-slider__info');
		let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + ($('.guests', parents).val() - 1) * $('.summ', parents).data('guests');
 		$('.summ', parents).html('$' + summ);
	}); 

	$('.quantity-button').on('click', function() {
		var parents = $(this).parents('.holder-slider__info');
 		let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + ($('.guests', parents).val() - 1) * $('.summ', parents).data('guests');
 		$('.summ', parents).html('$' + summ);
	});


   $('.surfboard-box-circle').on('click', function(){
   	$(this).toggleClass('active');
   });


   $('.menu__btn').on('click', function(){
   	$('.menu').toggleClass('active');
   	$('.menu__btn').toggleClass('close');
   });

   new WOW().init();

});