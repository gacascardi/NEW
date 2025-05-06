// Formulário - Contato

/*Whatsapp*/
function abrirWhatsapp() {
	var nome = document.getElementById("nome").value;
	var telefone = document.getElementById("telefone").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("mensagem").value; // Updated to match the input name
	var bairro = document.getElementById("bairro").value;
	var url = "https://wa.me/5511975581033?text=" // Seu numero
		+ "*Formulário de Contato*" + "%0a" // Mensagem personalizada
		+ "%0a" // Quebra de linha
		+ "*Nome*: " + nome + "%0a" // Dados do formulário
		+ "*Telefone*: " + telefone + "%0a"
		+ "*Bairro*: " + bairro + "%0a"
		+ "*E-mail*: " + email + "%0a"
		+ "*Mensagem*: " + msg;
	window.open(url, '_blank').focus();
}
/* Plugin Slide */

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

$(".rslides2").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

/* Menu Mobile */

$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.target-mobile').toggleClass('ativo');
});

$('.target-mobile').on('click', function(modal) {
	if(modal.target == this){
		$('.mobile-btn').removeClass('active');
		$(this).removeClass('ativo');
	}
});

/* Modal Slide - Portfólio */

$('.portfolio .itens li:first-child() a').on('click', function(e) {
	e.preventDefault();
	$('.modal .info .setaE').removeClass('ativo');
});

$('.portfolio .itens li:last-child() a').on('click', function(e) {
	e.preventDefault();
	$('.modal .info .setaD').removeClass('ativo');
});

$('.portfolio .itens li a').on('click', function(e) {
	e.preventDefault();
	$('.modal').addClass('modal-ativo');

	$('.modal').on('click', function(modal) {
		if(modal.target == this){
			$(this).removeClass('modal-ativo');
			$('.modal .info .setaE, .modal .info .setaD').addClass('ativo');
		}
	});

	$('.modal .modal-wrapper .info .fechar').on('click', function(e) {
		e.preventDefault();
		$('.modal').removeClass('modal-ativo');
		$('.modal .info .setaE, .modal .info .setaD').addClass('ativo');
	});

	imagem = $(this).parent().prev().find('img');
	tImagem = imagem[0].naturalWidth + 100;
	imagemSrc = imagem.attr('src');
	tituloImagem = $(this).prev().text();
	$('.modal .modal-wrapper').css("width",'' + tImagem + '');
	$('.modal .modal-wrapper .imagem img').attr("src",'' + imagemSrc + '');
	$('.modal .modal-wrapper p').html(tituloImagem);
	$('.modal .modal-wrapper .imagem img').addClass('atual');
	setTimeout(function(){
    $('.modal .modal-wrapper .imagem img').removeClass('atual');
  }, 600);
});

$('.modal .info .setaE').on('click', function(e) {
	e.preventDefault();
	$('.modal .info .setaE, .modal .info .setaD').addClass('ativo');

	$('.modal .modal-wrapper .imagem img').addClass('atual');
	setTimeout(function(){
    $('.modal .modal-wrapper .imagem img').removeClass('atual');
  }, 600);

	prevImagem = imagem.parent().parent().prev().find('div:first-child').find('img');
	tImagem = prevImagem[0].naturalWidth + 100;
	prevVerificarImagem = prevImagem.parent().parent().prev().find('div:first-child').find('img');

	if(prevVerificarImagem.length == 0) {
		$(this).removeClass('ativo');
	} else if(prevVerificarImagem.length != 0){
		$(this).addClass('ativo');
	}

	prevImagemSrc = prevImagem.attr('src');
	tituloImagem = prevImagem.parent().next().find('p').text(); 
	$('.modal .modal-wrapper').css("width",'' + tImagem + '');
	$('.modal .modal-wrapper .imagem img').attr("src",'' + prevImagemSrc + '');
	$('.modal .modal-wrapper p').html(tituloImagem);
	imagem = prevImagem;
});

$('.modal .info .setaD').on('click', function(e) {
	e.preventDefault();
	$('.modal .info .setaE, .modal .info .setaD').addClass('ativo');

	$('.modal .modal-wrapper .imagem img').addClass('atual');
	setTimeout(function(){
    $('.modal .modal-wrapper .imagem img').removeClass('atual');
  }, 700);

	nextImagem = imagem.parent().parent().next().find('div:first-child').find('img');
	tImagem = nextImagem[0].naturalWidth + 100;
	nextVerificarImagem = nextImagem.parent().parent().next().find('div:first-child').find('img');

	if(nextVerificarImagem.length == 0) {
		$(this).removeClass('ativo');
	} else if(nextVerificarImagem.length != 0){
		$(this).addClass('ativo');
	}

	nextImagemSrc = nextImagem.attr('src');
	tituloImagem = nextImagem.parent().next().find('p').text();
	$('.modal .modal-wrapper').css("width",'' + tImagem + '');
	$('.modal .modal-wrapper .imagem img').attr("src",'' + nextImagemSrc + '');
	$('.modal .modal-wrapper p').html(tituloImagem);
	imagem = nextImagem;
});

/* Ver mais | Modal Slide - Portfólio */

$(document).ready(function(){

qIt = $('.portfolio > .cc.ativo a.dc').parent().prev().find('li').length;
if(qIt <= 12) {
	$('.portfolio > .cc.ativo a.dc').addClass('dst');
}

qIs = $('.portfolio > .cc.ativo a.uc').parent().prev().find('li').length;
if(qIs <= 6) {
	$('.portfolio > .cc.ativo a.uc').addClass('dst');
}

});

var cont = 1;

$('.portfolio > .cc.ativo a.dc').click(function(e){
	e.preventDefault();

	qI = $(this).parent().prev().find('li').length;
	qVm = Math.floor(qI/12);
	qVmU = qI % 12;
	qVmF = Math.ceil(qVmU/2) * 320;
	imgV = $('.portfolio .itens.ativo').innerHeight();
	if(qVmU == 0 && cont == qVm - 1) {
		$('.portfolio > .cc.ativo a.dc').addClass('dst');
	}

	if(cont < qVm) {
		imgVPlus = imgV + 1920;
		$(".portfolio .itens.ativo").css("max-height", "none");
		$(".portfolio .itens.ativo").css("height",'' + imgVPlus + '');
		cont = cont + 1;
	} else if(cont == qVm) {
		imgVPlus = imgV + qVmF;
		$(".portfolio .itens.ativo").css("max-height", "none");
		$(".portfolio .itens.ativo").css("height",'' + imgVPlus + '');
		cont = cont + 1;
		$('.portfolio > .cc.ativo a.dc').addClass('dst');
	}
});

$('.portfolio > .cc.ativo a.uc').click(function(e){
	e.preventDefault();

	qI = $(this).parent().prev().find('li').length;
	qVm = Math.floor(qI/6);
	qVmU = qI % 6;
	qVmF = qVmU * 320;
	imgV = $('.portfolio .itens.ativo').innerHeight();
	if(qVmU == 0 && cont == qVm - 1) {
		$('.portfolio > .cc.ativo a.uc').addClass('dst');
	}

	if(cont < qVm) {
		imgVPlus = imgV + 1920;
		$(".portfolio .itens.ativo").css("max-height", "none");
		$(".portfolio .itens.ativo").css("height",'' + imgVPlus + '');
		cont = cont + 1;
	} else if(cont == qVm) {
		imgVPlus = imgV + qVmF;
		$(".portfolio .itens.ativo").css("max-height", "none");
		$(".portfolio .itens.ativo").css("height",'' + imgVPlus + '');
		cont = cont + 1;
		$('.portfolio > .cc.ativo a.uc').addClass('dst');
	}
});

/* Mudar ao Clique - Cardápio */

$('[data-grupo]').each(function(){
  var $allClique = $(this).find('[data-clique]'),
      $allInfo = $(this).find('[data-info]'),
      activeClass = 'ativo';

  $allClique.first().addClass(activeClass);
  $allInfo.first().addClass(activeClass);

  $allClique.click(function(e){
    e.preventDefault();

    setTimeout(function(){
	    qIt = $('.portfolio > .cc.ativo a.dc').parent().prev().find('li').length;
			if(qIt <= 12) {
				$('.portfolio > .cc.ativo a.dc').addClass('dst');
			}

			qIs = $('.portfolio > .cc.ativo a.uc').parent().prev().find('li').length;
			if(qIs <= 6) {
				$('.portfolio > .cc.ativo a.uc').addClass('dst');
			}
	  }, 1);

    var id = $(this).data('clique'),
        $info = $('[data-info="' + id + '"]');

    $allClique.removeClass(activeClass);
    $allInfo.removeClass(activeClass);

    $(this).addClass(activeClass);
    $info.addClass(activeClass);

    $('.portfolio > a.dc').removeClass('dst');
		$('.portfolio > a.uc').removeClass('dst');
		cont = 0;
  });
});

$('[data-grupo]').each(function(){
  var $allClique = $(this).find('[data-click]'),
      $allInfo = $(this).find('[data-info]'),
      activeClass = 'on';

  $allClique.first().addClass(activeClass);
  $allInfo.first().addClass(activeClass);

  $allClique.click(function(e){
    e.preventDefault();

    var id = $(this).data('click'),
        $info = $('[data-info="' + id + '"]');

    $allClique.removeClass(activeClass);
    $allInfo.removeClass(activeClass);

    $(this).addClass(activeClass);
    $info.addClass(activeClass);
  });
});

$('[data-grupo]').each(function(){
  var $allClique = $(this).find('[data-click2]'),
      $allInfo = $(this).find('[data-info2]'),
      activeClass = 'on';

  $allClique.first().addClass(activeClass);
  $allInfo.first().addClass(activeClass);

  $allClique.click(function(e){
    e.preventDefault();

    var id = $(this).data('click2'),
        $info = $('[data-info2="' + id + '"]');

    $allClique.removeClass(activeClass);
    $allInfo.removeClass(activeClass);

    $(this).addClass(activeClass);
    $info.addClass(activeClass);
  });
});

$('[data-grupo]').each(function(){
  var $allClique = $(this).find('[data-click3]'),
      $allInfo = $(this).find('[data-info3]'),
      activeClass = 'ativo';

  $allClique.first().addClass(activeClass);
  $allInfo.first().addClass(activeClass);

  $allClique.click(function(e){
    e.preventDefault();

    var id = $(this).data('click3'),
        $info = $('[data-info3="' + id + '"]');

    $allClique.removeClass(activeClass);
    $allInfo.removeClass(activeClass);

    $(this).addClass(activeClass);
    $info.addClass(activeClass);
  });
});

/* Animações */

Visibility.onVisible(function(){
  setTimeout(function(){
    $(".animar1").addClass("animated fadeInDown");
  }, 400);
  setTimeout(function(){
    $(".animar2").addClass("animated fadeInDown");
  }, 800);
  setTimeout(function(){
    $(".animar3").addClass("animated fadeInDown");
  }, 1200);
  setTimeout(function(){
    $(".animar4").addClass("animated fadeInDown");
  }, 1600);
  setTimeout(function(){
    $(".animar5").addClass("animated fadeInDown");
  }, 2000);
});

// Formulário Orçamento

$('.formphp').on('submit', function() {
	var emailContato = "gacacardi@outlook.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve entraremos em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});