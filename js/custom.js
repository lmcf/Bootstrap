/*
Esta función esconde el menu en los primeros 80px de la pagina y luego lo muestra
Cuando se muestra cambia el color de fondo para que se vean las letras en toda la pagina
*/
$(document).ready(function(){

	'use strict';

	$(window).scroll(function(){

		'use strict';

		if($(window).scrollTop() < 80){

			$('.navbar').css ({
				'margin-top':'-100px',
				'opacity':'0'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0)'
			});

		}else{

			$('.navbar').css ({
				'margin-top':'0px',
				'opacity':'1'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0.7)',
				'border-color':'#444'
			});

			$('.navbar-brand img').css({
				'height':'35px',
				'padding-top':'0px'
			});

			$('.navbar-brand > li > a').css({
				'padding-top':'15px'
			});

		}

	});

});

/*
Al usar la barra de navegación cada item te lleva a la sección con un delay.
*/
$(document).ready(function(){
	'use strict';

	$('.nav-item, #scroll-to-top').click(function(){
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname ==
			this.hostname) {
			var target = $(this.hash);
			if(target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				},750);
				return false;
			}
		}
	});

})


/*
Depende el item de la nav que estes usando esta funcion lo pondra de color azul
*/
$(document).ready(function(){
	'use strict';

	$('.navbar-nav li a').click(function(){
		'use strict';

		$('.navbar-nav li a').parent().removeClass("active");

		$(this).parent().addClass('active');
	});
});


/*
Esta funcion actua de igual manera que la anterior, pero sin pulsar es decir a medida que vas haciendo scroll
hacia abajo te marca de azul en el menu la seccion en la que te encuentras
*/
$(document).ready(function(){
	'use strict';

	$(window).scroll( function(){
		'use strict';

		$("section").each(function(){

 			var bb = $(this).attr("id"); // about, contac, download ...

 			var hei = $(this).outerHeight();

 			var grttop = $(this).offset().top -70;

 			if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

 				$(".navbar-nav li [href='#" + bb + "']").parent().addClass("active");

 			}else{

 				$(".navbar-nav li [href='#" + bb + "']").parent().removeClass("active");
 			}

		});

	});
});

/*
Auto padding en el header
*/
/*
$(document).ready(function() { 
	'use strict';

	setInterval( function() {
		'use strict';

		var windowHeight = $(window).height();

		var containerHeight = $(".header-container").height();	

		var padTop = windowHeight - containerHeight;

		$(".header-container").css({

			'padding-top':Math.round(padTop / 2 ) + 'px',
			'padding-bottom':Math.round(padTop / 2 ) + 'px';
		});

	},10)

});*/

