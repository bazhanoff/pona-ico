//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/jquery.countdown/dist/jquery.countdown.js
//= ../../bower_components/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js

$(document).ready(function () {
	$('.timer').countdown('2018/08/30').on('update.countdown', function (event) {
		$(this).html(event.strftime(
			'<div class="timer__item">' +
			'<span class="timer__number">%D</span>' +
			'<span class="timer__measure">days</span>' +
			'</div>' +
			'<div class="timer__item">' +
			'<span class="timer__number">%H</span>' +
			'<span class="timer__measure">hours</span>' +
			'</div>' +
			'<div class="timer__item">' +
			'<span class="timer__number">%M</span>' +
			'<span class="timer__measure">min</span>' +
			'</div>' +
			'<div class="timer__item">' +
			'<span class="timer__number">%S</span>' +
			'<span class="timer__measure">sec</span>' +
			'</div>'
			)
		);
	});

	var menu_selector = ".menu";
	function onScroll() {
		var scroll_top = $(document).scrollTop();
		$(menu_selector + " a").each(function () {
			var hash = $(this).attr("href");
			var target = $(hash);
			if (target.length) {
				if (target.position().top <= scroll_top && target.position().top - 150 + target.outerHeight() > scroll_top) {
					$(menu_selector + " a.active").removeClass("active");
					$(this).addClass("active");
				} else {
					$(this).removeClass("active");
				}
			}
		});
	}

	$(document).on("scroll", onScroll);
	$(".menu a").click(function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$('.js-menu').toggleClass("js-menu--activated");
		$("html, body").animate({
			scrollTop: target.offset().top
		}, 1500, function () {
			// window.location.hash = hash;
			$(document).on("scroll", onScroll);
			$(".menu a").blur();
		});
	});

	$('.hamburger').click(function () {
		$('.js-menu').toggleClass("js-menu--activated");
	});

	(function(s) {
		var n;
		s(".work__tabs").on("click", "button:not(.work__button--active)", function() {
			n = s(this).parents(".work"), s(this).dmtabs(n)
		}), s.fn.dmtabs = function(n) {
			s(this).addClass("work__button--active").siblings().removeClass("work__button--active"), n.find(".work__info").eq(s(this).index()).show(1, function() {
				s(this).addClass("work__info--active")
			}).siblings(".work__info").hide(1, function() {
				s(this).removeClass("work__info--active")
			})
		}
	})(jQuery);

	var HeaderTop = $('.preview__inner').offset().top;

	$(window).scroll(function () {
		if ($(window).scrollTop() > HeaderTop) {
			$('.preview__inner').addClass("preview__inner--fixed");
		} else {
			$('.preview__inner').removeClass("preview__inner--fixed");
		}
	});

	if ($(window).width() >= 901) {
		$('.about__content').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 100
		});

		$('.work').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInUp',
			offset: 200
		});

		$('.js-distribution-token .distribution__diagram').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInLeft',
			offset: 100
		});

		$('.js-distribution-token .distribution__info').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInRight',
			offset: 100
		});

		$('.js-distribution-invest .distribution__diagram').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInRight',
			offset: 100
		});

		$('.js-distribution-invest .distribution__info').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInLeft',
			offset: 100
		});

		$('.roadmap__content').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 100
		});

		$('.team__members').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInLeft',
			offset: 50
		});

		$('.consultants__member').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInLeft',
			offset: 25
		});

		$('.post').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated bounceInRight',
			offset: 50
		});

		$('.aside-info__container').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			offset: 150
		});
	}
});
