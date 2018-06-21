$(function() {


	// Замена буквы в логотипе
	$('.logo-litera').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'));
	});

	// Форма поиска
	

	$('.search').on('click', () => {
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').val('').focus();
	});

	// Закрытие формы по ESC
	$(document).keyup(function (e) { 
		if (e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	});
	
	// Мобильное меню
	$('.top-line').after('<div class="mobile-menu d-lg-none"></div>');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').on('click', () => {
		$('.mobile-menu').stop().slideToggle();
	});

	// Обработчик для col-item
	$('.col-item').hover(function () {
			ths = $(this);
			lnk = ths.closest('.col-item').find('h4 a');
			lnk.addClass('hover');
			
		}, function () {
			lnk.removeClass('hover');
		}
	);

	// плагин prognroll

	$("body").prognroll({
		height: 3,
		color: "#ec1c1c",
		custom: false
	});
		
});
