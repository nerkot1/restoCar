document.addEventListener('DOMContentLoaded', function() {

    const text = document.querySelectorAll('.text')

    for(const taxts of text){
        taxts.addEventListener('click', function(){
            cle();
            taxts.classList.add('text__active')
        })
    }
    function cle(){
        text.forEach((taxts) => {
            taxts.classList.remove('text__active')
        })
    }

    function toggleMenu() {
		$('.menu-toggle').toggleClass('menu-toggle__active')
		$('.text_link').toggleClass('text_link__active')
        $('.navbar_link').toggleClass('text_link__active')
	}
	$('.menu-toggle').click(function() { toggleMenu() });

    new Swiper ('.swiper-slider', {
        speed: 800,
        effect: 'fade',
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
    });
  
   
        
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime : 800,
        // Размер шага в пикселях
        stepSize : 75,
        // Ускорение
        accelerationDelta : 2,
        // Максимальное ускорение
        accelerationMax : 1,
        // Поддержка клавиатуры
        keyboardSupport : true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll : 50,
        // Поддержка тачпада
        touchpadSupport : true,
        })

})

