/*
Template: Portfolio - Personal Portfolio HTML Template
Author: RRDevs
*/

(function($) {
    "use strict";

    $(document).ready( function() {

		/*** Sticky header */
        $(window).scroll(function(){
            if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $("header").addClass("stop");
            } else {
                $("header").removeClass("stop");
            }
        });

		/*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });

		/*** mobile menu  */
		 $("#hamburger").on("click", function () {
			$(".mobile-nav").addClass("show");
			$(".offcanvas-overlay").addClass("overlay-open");
		});
        $(".close-nav").on("click", function () {
			$(".mobile-nav").removeClass("show");
			$(".offcanvas-overlay").removeClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".mobile-nav").removeClass("show");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});

		/** Sidr submenu */
        function portfolioMobileMenu() {
			/*** Dropdown Need class added Added */
			$(".portfolio-mobile-nav ul li ul").addClass("dropdown-menu");
			$(".portfolio-mobile-nav ul li ul").parent().addClass("dropdown");
			
			$(".main-menu ul li ul").parent().addClass("dropdown");
			$('.main-menu li.dropdown > a').append("<i class='fa-solid fa-angle-down'></i>");
            
			// sidebar menu
			$('.portfolio-mobile-nav ul')[0].classList.add("portfolio-navbar-mobile");

            var $nav = $(".portfolio-navbar-mobile"),
                $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back d-flex flex-wrap align-items-center justify-content-between'><div class='control ml-auto d-flex align-items-center' style='white-space: nowrap'>Back<i style='font-size: 20px; font-weight: 500; margin-left: 5px;' class='fal fa-long-arrow-left'></i></div></li>");


            // For Title
            $('.portfolio-navbar-mobile li.dropdown > a').each(function(){
                $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a style='color: #000'>" + $(this).text() +"</a></div>");
            });

            // open sub-level
            $('.portfolio-navbar-mobile li.dropdown > a').append("<span class='dropdown-toggle' data-toggle='dropdown'></span>");
            $('.portfolio-navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();

                $(this).parent().parent().addClass("is-open");
                $(this).parents().find( '.portfolio-navbar-mobile' ).addClass("is-parent");


                var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
                    gutter = $('.portfolio-mobile-nav');

                if ( gutter ) 
                {
                    gutter.height(header+15);
                }
            });

            // go back
            $back_btn.on("click", ".dropdown-back", function(e) {
                e.stopPropagation();
                $(this)
                .parents(".is-open")
                .first()
                .removeClass("is-open");

                var header = $(this).parents(".is-parent").first().height();

                $(this)
                .parents(".is-parent")
                .first()
                .removeClass("is-parent");

                var gutter = $('.portfolio-mobile-nav');

                setTimeout(function() {
                    if (gutter) {
                        gutter.height(header);
                    } 
                }, 200);
            });
        }
		if(document.querySelector(".portfolio-mobile-nav")) {
        	portfolioMobileMenu();
		}

		/*** Scroll Nav */
		const scrollOnePageMenu=  ()=>  {
			const link = $('#header-nav ul li a');

			link.on('click', function(e) {
				const target = $($(this).attr('href'));
				$('html, body').animate({
					scrollTop: target.offset().top - 76
				}, 600);
				$(this).parent().addClass('active');
				e.preventDefault();
			});

			$(window).on('scroll', function(){
				scrNav();
			});

			function scrNav() {
				const sTop = $(window).scrollTop();
				$('section').each(function() {
					const id = $(this).attr('id'),
						offset = $(this).offset().top-1,
						height = $(this).height();
					if(sTop >= offset && sTop < offset + height) {
						link.parent().removeClass('active');
						$('#header-nav').find('[href="#' + id + '"]').parent().addClass('active');
					}
				});
			}
			scrNav();
		}
		scrollOnePageMenu();

		/*** testimonial-slider  */
		$('.testimonial-slider').slick({
			dots: false,
			arrows: true,
			autoplay: true,
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .testimonial-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"fa-regular fa-arrow-left\"></i></button>",
			nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"fa-regular fa-arrow-right\"></i></button>",
		});

		/*** testimonial-slider__home-3  */
		$('.testimonial-slider__home-3').slick({
			dots: false,
			arrows: true,
			autoplay: true,
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .testimonial-slider__home-3-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left theme-btn btn-gradient'><i class=\"fa-regular fa-arrow-left\"></i></button>",
			nextArrow:"<button type='button' class='slick-next pull-right theme-btn btn-gradient'><i class=\"fa-regular fa-arrow-right\"></i></button>",
		});

		/*** Number Counter */
		$('.counter').counterUp({
			delay: 10,
			time: 500
		});

		// gallery-popup
		$('.gallery-popup').magnificPopup({
			delegate: 'a.popup',
			type: 'image',
			midClick: true,
			preloader: false,
			fixedBgPos: true,
			removalDelay: 500,
			fixedContentPos: true,
			closeBtnInside: false,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			callbacks: {
				beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				},
				buildControls: function() {
					// re-appends controls inside the main container
					this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
				}
			},
			closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Close</button>',
		});

		/*======================
		Enable Masonry
		========================*/
		if(document.querySelector(".masonry")) {
			let $grid = $('.masonry').masonry({
				itemSelector: '.col',
				columnWidth: '.col',
				horizontalOrder: true,
			});
		}

		/*** slick slider  */
		$('.our-client-slider').slick({
			dots: false,
			autoplay: true,
			speed: 5000,
			arrows: false,
			infinite: true,
			slidesToShow: 5,
			autoplaySpeed: 0,
			cssEase: 'linear',
			centerMode: true,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		/*** our-partners-slider  */
		$('.our-partners-slider').slick({
			dots: false,
			autoplay: true,
			speed: 5000,
			arrows: false,
			infinite: true,
			slidesToShow: 4,
			autoplaySpeed: 0,
			cssEase: 'linear',
			centerMode: true,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		/*** portfolio_slider_home-3  */
		$('.portfolio_slider_home-3').slick({
			gap: 30,
			dots: false,
			arrows: true,
			autoplay: true,
			slidesToShow: 3,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .portfolio_slider_home-3-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left theme-btn btn-gradient border-red'><i class=\"fa-regular fa-arrow-left\"></i></button>",
			nextArrow:"<button type='button' class='slick-next pull-right theme-btn btn-gradient border-red'><i class=\"fa-regular fa-arrow-right\"></i></button>",
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		/*** banner-home__banner-slider  */
		$('.banner-home__banner-slider').slick({
			gap: 30,
			dots: false,
			arrows: true,
			autoplay: true,
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 5000,
			appendArrows: $('.slider-controls .banner-home__banner-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left theme-btn'><i class=\"fa-regular fa-arrow-left\"></i></button>",
			nextArrow:"<button type='button' class='slick-next pull-right theme-btn'><i class=\"fa-regular fa-arrow-right\"></i></button>",
		});

		/*** Animation */
		$('.banner-home__banner-slider').on('init', function(e, slick) {
			var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});

		$('.banner-home__banner-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		};

		function page_ah_cursor() {
			document.body.append(...["cursor-outer", "cursor-inner"].map(className => Object.assign(document.createElement("div"), { className: `mouse-cursor ${className}` })));

			const myCursor = jQuery(".mouse-cursor");

			if (myCursor.length) {
				const cursorInner = document.querySelector(".cursor-inner");
				const cursorOuter = document.querySelector(".cursor-outer");
				let mouseY, mouseX = 0;
				let isHovering = false;

				window.onmousemove = function (event) {
					if (!isHovering) {
						cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
						cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
						mouseY = event.clientY;
						mouseX = event.clientX;
					}
				};

				$("body").on(
					"mouseenter",
					"a, button, .cursor-pointer",
					function () {
						cursorInner.classList.add("cursor-hover");
						cursorOuter.classList.add("cursor-hover");
					}
				);

				$("body").on(
					"mouseleave",
					"a, button, .cursor-pointer",
					function () {
						if ($(this).is("a") || $(this).is("button") && $(this).closest(".cursor-pointer").length === 0) {
							cursorInner.classList.remove("cursor-hover");
							cursorOuter.classList.remove("cursor-hover");
						}
					}
				);

				cursorInner.style.visibility = "visible";
				cursorOuter.style.visibility = "visible";
			}
		}
		page_ah_cursor()

		// Animation Heading
		heading_animation()
		function heading_animation() {
			var animationDelay = 2500,
				//loading bar effect
				barAnimationDelay = 3800,
				barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
				//letters effect
				lettersDelay = 50,
				//type effect
				typeLettersDelay = 150,
				selectionDuration = 500,
				typeAnimationDelay = selectionDuration + 800,
				//clip effect
				revealDuration = 1500,
				revealAnimationDelay = 1500;

			initHeadline();

			function initHeadline() {
				//insert <i> element for each letter of a changing word
				singleLetters($(".cd-headline.letters").find("b"));
				//initialise headline animation
				animateHeadline($(".cd-headline"));
			}

			function singleLetters($words) {
				$words.each(function () {
					var word = $(this),
						letters = word.text().split(""),
						selected = word.hasClass("is-visible");
					for (i in letters) {
						if (word.parents(".rotate-2").length > 0)
							letters[i] = "<em>" + letters[i] + "</em>";
						letters[i] = selected
							? '<i class="in">' + letters[i] + "</i>"
							: "<i>" + letters[i] + "</i>";
					}
					var newLetters = letters.join("");
					word.html(newLetters).css("opacity", 1);
				});
			}

			function animateHeadline($headlines) {
				var duration = animationDelay;
				$headlines.each(function () {
					var headline = $(this);

					if (headline.hasClass("loading-bar")) {
						duration = barAnimationDelay;
						setTimeout(function () {
							headline.find(".cd-words-wrapper").addClass("is-loading");
						}, barWaiting);
					} else if (headline.hasClass("clip")) {
						var spanWrapper = headline.find(".cd-words-wrapper"),
							newWidth = spanWrapper.width() + 10;
						spanWrapper.css("width", newWidth);
					} else if (!headline.hasClass("type")) {
						//assign to .cd-words-wrapper the width of its longest word
						var words = headline.find(".cd-words-wrapper b"),
							width = 0;
						words.each(function () {
							var wordWidth = $(this).width();
							if (wordWidth > width) width = wordWidth;
						});
						headline.find(".cd-words-wrapper").css("width", width);
					}

					//trigger animation
					setTimeout(function () {
						hideWord(headline.find(".is-visible").eq(0));
					}, duration);
				});
			}

			function hideWord($word) {
				var nextWord = takeNext($word);

				if ($word.parents(".cd-headline").hasClass("type")) {
					var parentSpan = $word.parent(".cd-words-wrapper");
					parentSpan.addClass("selected").removeClass("waiting");
					setTimeout(function () {
						parentSpan.removeClass("selected");
						$word
							.removeClass("is-visible")
							.addClass("is-hidden")
							.children("i")
							.removeClass("in")
							.addClass("out");
					}, selectionDuration);
					setTimeout(function () {
						showWord(nextWord, typeLettersDelay);
					}, typeAnimationDelay);
				} else if ($word.parents(".cd-headline").hasClass("letters")) {
					var bool =
						$word.children("i").length >= nextWord.children("i").length
							? true
							: false;
					hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
					showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
				} else if ($word.parents(".cd-headline").hasClass("clip")) {
					$word
						.parents(".cd-words-wrapper")
						.animate({ width: "2px" }, revealDuration, function () {
							switchWord($word, nextWord);
							showWord(nextWord);
						});
				} else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
					$word.parents(".cd-words-wrapper").removeClass("is-loading");
					switchWord($word, nextWord);
					setTimeout(function () {
						hideWord(nextWord);
					}, barAnimationDelay);
					setTimeout(function () {
						$word.parents(".cd-words-wrapper").addClass("is-loading");
					}, barWaiting);
				} else {
					switchWord($word, nextWord);
					setTimeout(function () {
						hideWord(nextWord);
					}, animationDelay);
				}
			}

			function showWord($word, $duration) {
				if ($word.parents(".cd-headline").hasClass("type")) {
					showLetter($word.find("i").eq(0), $word, false, $duration);
					$word.addClass("is-visible").removeClass("is-hidden");
				} else if ($word.parents(".cd-headline").hasClass("clip")) {
					$word
						.parents(".cd-words-wrapper")
						.animate(
							{ width: $word.width() + 10 },
							revealDuration,
							function () {
								setTimeout(function () {
									hideWord($word);
								}, revealAnimationDelay);
							}
						);
				}
			}

			function hideLetter($letter, $word, $bool, $duration) {
				$letter.removeClass("in").addClass("out");

				if (!$letter.is(":last-child")) {
					setTimeout(function () {
						hideLetter($letter.next(), $word, $bool, $duration);
					}, $duration);
				} else if ($bool) {
					setTimeout(function () {
						hideWord(takeNext($word));
					}, animationDelay);
				}

				if (
					$letter.is(":last-child") &&
					$("html").hasClass("no-csstransitions")
				) {
					var nextWord = takeNext($word);
					switchWord($word, nextWord);
				}
			}

			function showLetter($letter, $word, $bool, $duration) {
				$letter.addClass("in").removeClass("out");

				if (!$letter.is(":last-child")) {
					setTimeout(function () {
						showLetter($letter.next(), $word, $bool, $duration);
					}, $duration);
				} else {
					if ($word.parents(".cd-headline").hasClass("type")) {
						setTimeout(function () {
							$word.parents(".cd-words-wrapper").addClass("waiting");
						}, 200);
					}
					if (!$bool) {
						setTimeout(function () {
							hideWord($word);
						}, animationDelay);
					}
				}
			}

			function takeNext($word) {
				return !$word.is(":last-child")
					? $word.next()
					: $word.parent().children().eq(0);
			}

			function takePrev($word) {
				return !$word.is(":first-child")
					? $word.prev()
					: $word.parent().children().last();
			}

			function switchWord($oldWord, $newWord) {
				$oldWord.removeClass("is-visible").addClass("is-hidden");
				$newWord.removeClass("is-hidden").addClass("is-visible");
			}
		}
		/*==========================
      		Scroll To Up Init
    	============================*/
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			// topDistance: '1110', // Distance from top before showing element (px)
			topDistance: '1700', // Distance from top before showing element (px)
			topSpeed: 2000, // Speed back to top (ms)
			animation: 'slide', // Fade, slide, none
			animationInSpeed: 300, // Animation in speed (ms)
			animationOutSpeed: 300, // Animation out speed (ms)
			scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});

    }); // end document ready function

	$(window).on('load', function() {
		// Animate loader off screen
		const preloader = $(".preloader");
		preloader.addClass('loaded');
		preloader.delay(600).fadeOut();
	});

	/*** customFileInput  */
	const customFileInput = ()=> {
		const $file = $('#file-input'),
			$label = $file.next('label'),
			$labelText = $label.find('span'),
			$labelRemove = $('i.remove'),
			labelDefault = $labelText.text();

		// on file change
		$file.on('change', function(event){
			const fileName = $file.val().split( '\\' ).pop();
			if( fileName ){
				console.log($file)
				$labelText.text(fileName);
				$labelRemove.show();
			}else{
				$labelText.text(labelDefault);
				$labelRemove.hide();
			}
		});

		// Remove file
		$labelRemove.on('click', function(event){
			$file.val("");
			$labelText.text(labelDefault);
			$labelRemove.hide();
			console.log($file)
		});
	}
	customFileInput();

	/*** Image to SVG */
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var mainImage = $img.attr('data-custom-img');

		var imgURL = $img.attr('src');
		var textContent = $img.attr('text');

		console.log(mainImage)

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}


			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, else we gonna set it if we can.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			$svg.find('image').attr('xlink:href', mainImage);

			$svg.find('tspan').each(function() {
				$(this).text(textContent);
			});


			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});



})(jQuery); // End jQuery