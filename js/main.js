$(document).ready(function(){ 
	$('body').bootstrapMaterialDesign();
	$(window).on('scroll',function(){
	if ($(window).scrollTop()){
		$('#nav').addClass('bg-dark-color');
		$('#ocultar-b').removeClass('ocultar');
	}else{
		$('#nav').removeClass('bg-dark-color');
		$('#ocultar-b').addClass('ocultar');
		
	}
})
});

$('.fijo').carousel({
	interval: false
})

;(function(){
	let stickey =false

	$(window).scroll(function(){
		const scrollTrue = menuScroll();

		if (scrollTrue && !stickey) {
			stickey=scrollTrue
			mostrarMenu()
		}
		if (!scrollTrue && stickey) {
			stickey =false
			ocultarMenu()
		}
	})

	function mostrarMenu(){
		$("#menu-fijo").addClass("fixed").removeClass("absolute")
		$("#ocultar").removeClass("hidden")
		
	}

	function ocultarMenu(){
		$("#menu-fijo").removeClass("fixed").addClass("absolute")
		$("#ocultar").addClass("hidden")
	}

	function menuScroll(){
		const $mostrar = $("#ocultar")
		const mostrarHeight = $mostrar.height()

		return $(window).scrollTop() > $(window).height() - (mostrarHeight *1.5)
	}
})()

