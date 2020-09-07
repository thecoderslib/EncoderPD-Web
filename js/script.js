

$(document).ready(function() {
	/*if (navigator.onLine) {
	  $(".error-status").attr("id", "dne-status");
	  $(".main-form").attr("id", "main-form");
	} else {
	  $(".error-status").attr("id", "dbe-status");
	  $(".main-form").attr("id", "form-dn");
	}*/
	$("#header-top-form").on("click", ".settings", function() {
		$("#settings").removeClass("default");
		$("#settings").addClass("active");
	});
	$("#settings").on("click", ".back-text", function() {
		$("#settings").removeClass("active");
		$("#settings").addClass("default");
	});
	$('#navbar').on("click", ".enc-btn", function() {
		$('#codecrypt').addClass('active');
		$('#codecrypt').removeClass('default');
		$('[data-type="codecrypt"]').attr('id', 'main-encrypt');
		if (langCode == 'ru') {$('#main-encrypt .title p').text('Зашифровать даные:');$('#encryptBtn').attr('value', 'Зашифровать');}
		else if (langCode == 'uz') {$('#main-encrypt .title p').text('Malumotlarni shifrlash');$('#encryptBtn').attr('value', 'Shifrlash');}
		else {$('#main-encrypt .title p').text('Encrypt base');$('#encryptBtn').attr('value', 'Encrypt');}
		$('[data-type="md5"]').attr('disabled', false);
		$('[data-type="sha1"]').attr('disabled', false);
		$('[data-type="sha3"]').attr('disabled', false);
		$('[data-type="sha256"]').attr('disabled', false);
		$('#encryptBtn').attr('display', 'block');
		$('#descryptBtn').attr('display', 'none');
	});;
	$('#navbar').on("click", ".decd-btn", function() {
		$('#codecrypt').addClass('active');
		$('#codecrypt').removeClass('default');
		$('[data-type="codecrypt"]').attr('id', 'main-descrypt');
		if (langCode == 'ru') {$('#main-descrypt .title p').text('Разшифровать даные:');$('#descryptBtn').attr('value', 'Разшифровать');}
		else if (langCode == 'uz') {$('#main-descrypt .title p').text('Malumotlarni shfrni yechish:');$('#descryptBtn').attr('value', 'Shifrni yechish');}
		else {$('#main-descrypt .title p').text('Descrypt base');$('#descryptBtn').attr('value', 'Descrypt');}
		$('[data-type="md5"]').attr('disabled', true);
		$('[data-type="sha1"]').attr('disabled', true);
		$('[data-type="sha3"]').attr('disabled', true);
		$('[data-type="sha256"]').attr('disabled', true);
		$('#encryptBtn').attr('display', 'none');
		$('#descryptBtn').attr('display', 'block');
	});
	$('#codecrypt').on("click", ".back-text", function() {
		$('#codecrypt').removeClass('active');
		$('#codecrypt').addClass('default');
		$('[data-type="codecrypt"]').attr('id', false);
		$('[type="submit"]').attr('display', 'none');
	});

	$('#encryptBtn').click( function() {
		var type = $('#codetype').val();
		var textLine = $('#codecrypt-text-input').val();
		switch (type) {
			case "base64":
				$('#codecrypt-text-input').val(btoa(textLine));
				break;
			case "md5":
				$('#codecrypt-text-input').val(CryptoJS.MD5(textLine));
				break;
			case "sha1":
				$('#codecrypt-text-input').val(CryptoJS.SHA1(textLine));
				break;
			case "sha3":
				$('#codecrypt-text-input').val(CryptoJS.SHA3(textLine));
				break;
			case "sha256":
				$('#codecrypt-text-input').val(CryptoJS.SHA256(textLine));
				break;
			default:
				$('#codecrypt-text-input').val('Not selector types');
				break;
		}
	});

	$('.btn.edit-apperance').click(function() {
		$("#apperance").removeClass("default");
		$("#apperance").addClass("active");
	});

	$('#apperance').on("click", '.back-text', function() {
		$("#apperance").removeClass("active");
		$("#apperance").addClass("default");
	});

	$('.btn.edit-language').click(function() {
		$("#language").removeClass("default");
		$("#language").addClass("active");
	});

	$('#language').on("click", '.back-text', function() {
		$("#language").removeClass("active");
		$("#language").addClass("default");
	});

	$('#language-select').change(function () {
		var selectCodeLang = $(this).val();
		localStorage._encoder_lang_code = selectCodeLang;
		location.reload();
	})

	$('[pdk-btn="edit-apperance"]').click(function() {
		var apperCode = $(this).attr('pdk-apperance');
		switch (apperCode) {
			case "light":
				lStorage._pdk_app_activate_apperance = light;
				$("html").attr("app-pdk-apperance","light");
				break;
			case "dark":
				lStorage._pdk_app_activate_apperance = dark;
				$("html").attr("app-pdk-apperance","dark");
				break;
		}
	});

	$('#descryptBtn').click(function () {
		var type = $('#codetype').val();
		var decodeLine = $('#codecrypt-text-input').val();
		switch (type) {
			case "base64":
				$('#codecrypt-text-input').val(atob(decodeLine));
				break;
			default:
				$('pdk-window.window').addClass('active');
				$('.error-content').addClass('window-active');
				break;
		}
	});
	$('.version-content').on("click", '.close', function() {
		$('.window.active').removeClass('active');
		$('.error-content').removeClass('window-active');
		$('.version-content').removeClass('window-active');
	});
	$('.error-content').on("click", '.close', function() {
		$('.window.active').removeClass('active');
		$('.version-content').removeClass('window-active');
		$('.error-content').removeClass('window-active');
	});
});

$(document).keyup(function(e) {
	if (e.which == 27) {
		$("#settings").removeClass("active");
		$('#codecrypt').removeClass('active');
		$("#settings").addClass("default");
		$('#codecrypt').addClass('default');
		$('.window.active').removeClass('active');
		$('.version-content').removeClass('window-active');
		$('.error-content').removeClass('window-active');
	}
});
