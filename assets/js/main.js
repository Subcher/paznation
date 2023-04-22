/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
				particlesJS("particles-js1", {
					"particles": {
					  "number": {
						"value": 20,
						"density": {
						  "enable": false,
						  "value_area": 3000
						}
					  },
					  "color": {
						"value": "#009385"
					  },
					  "shape": {
						"type": "polygon",
						"stroke": {
						  "width": 0,
						  "color": "#000000"
						},
						"polygon": {
						  "nb_sides": 8
						},
						"image": {
						  "src": "img/github.svg",
						  "width": 100,
						  "height": 100
						}
					  },
					  "opacity": {
						"value": 0.45,
						"random": false,
						"anim": {
						  "enable": false,
						  "speed": 1,
						  "opacity_min": 0.1,
						  "sync": false
						}
					  },
					  "size": {
						"value": 2.75,
						"random": true,
						"anim": {
						  "enable": true,
						  "speed": 13,
						  "size_min": 0.8,
						  "sync": false
						}
					  },
					  "line_linked": {
						"enable": true,
						"distance": 350,
						"color": "#4eded0",
						"opacity": 0.15,
						"width": 1.2626561550541748
					  },
					  "move": {
						"enable": true,
						"speed": 6.5,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "bounce",
						"bounce": false,
						"attract": {
						  "enable": true,
						  "rotateX": 600,
						  "rotateY": 1200
						}
					  }
					},
					"interactivity": {
					  "detect_on": "window",
					  "events": {
						"onhover": {
						  "enable": true,
						  "mode": "grab"
						},
						"onclick": {
						  "enable": true,
						  "mode": "repulse"
						},
						"resize": true
					  },
					  "modes": {
						"grab": {
						  "distance": 152.02702702702692,
						  "line_linked": {
							"opacity": 1
						  }
						},
						"bubble": {
						  "distance": 400,
						  "size": 40,
						  "duration": 2,
						  "opacity": 8,
						  "speed": 3
						},
						"repulse": {
						  "distance": 200,
						  "duration": 0.4
						},
						"push": {
						  "particles_nb": 4
						},
						"remove": {
						  "particles_nb": 2
						}
					  }
					},
					"retina_detect": false
				  });
				  particlesJS("particles-js2", {
					"particles": {
					  "number": {
						"value": 20,
						"density": {
						  "enable": false,
						  "value_area": 3000
						}
					  },
					  "color": {
						"value": "#009385"
					  },
					  "shape": {
						"type": "polygon",
						"stroke": {
						  "width": 0,
						  "color": "#000000"
						},
						"polygon": {
						  "nb_sides": 8
						},
						"image": {
						  "src": "img/github.svg",
						  "width": 100,
						  "height": 100
						}
					  },
					  "opacity": {
						"value": 0.45,
						"random": false,
						"anim": {
						  "enable": false,
						  "speed": 1,
						  "opacity_min": 0.1,
						  "sync": false
						}
					  },
					  "size": {
						"value": 2.75,
						"random": true,
						"anim": {
						  "enable": true,
						  "speed": 13,
						  "size_min": 0.8,
						  "sync": false
						}
					  },
					  "line_linked": {
						"enable": true,
						"distance": 350,
						"color": "#4eded0",
						"opacity": 0.15,
						"width": 1.2626561550541748
					  },
					  "move": {
						"enable": true,
						"speed": 6.5,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "bounce",
						"bounce": false,
						"attract": {
						  "enable": true,
						  "rotateX": 600,
						  "rotateY": 1200
						}
					  }
					},
					"interactivity": {
					  "detect_on": "window",
					  "events": {
						"onhover": {
						  "enable": true,
						  "mode": "grab"
						},
						"onclick": {
						  "enable": true,
						  "mode": "repulse"
						},
						"resize": true
					  },
					  "modes": {
						"grab": {
						  "distance": 152.02702702702692,
						  "line_linked": {
							"opacity": 1
						  }
						},
						"bubble": {
						  "distance": 400,
						  "size": 40,
						  "duration": 2,
						  "opacity": 8,
						  "speed": 3
						},
						"repulse": {
						  "distance": 200,
						  "duration": 0.4
						},
						"push": {
						  "particles_nb": 4
						},
						"remove": {
						  "particles_nb": 2
						}
					  }
					},
					"retina_detect": false
				  });
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);