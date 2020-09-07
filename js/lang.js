var langCode = localStorage._encoder_lang_code;

if (langCode == 'ru') {
    $('title').text('EncoderPD - RU');
    $('.back-text').text('< Назад');
    $('.enc-btn').text('Зашифровать');
    $('.decd-btn').text('Разшифровать');
    $('.history-btn').text('История сборки');
    $('.news-btn').text('Новости');
    $('.faq-btn').text('Вопросы и Ответы');
    $('.feedback-btn').text('Обратное связь');
    $('.about-btn').text('О Приложение');
    $('.encrypt-type').text('Тип:');
    $('#main-settings .title-settings p').text('Настройки');
    $('.edit-apperance p').text('Оформления');
    $('.edit-language p').text('Язык');
    $('.select-a-lang').text('Выберите Язык:');
    $('.verify-update p').text('Обновление');
    $('.help-btn p').text('Помощь');
    $('.version-txt p').text('EncoderPD (Web) Бета верси v1.4 (15067)');
    $('.decode-error').text('MD5, SHA1, SHA3 и SHA256 не разшифруется!');
}

else if (langCode == 'uz') {
    $('title').text('EncoderPD - UZ');
    $('.back-text').text('< Ortga');
    $('.enc-btn').text('Shifrlash');
    $('.decd-btn').text('Shfrni yechish');
    $('.history-btn').text('Versiyalar tarihi');
    $('.news-btn').text('Yangiliklar');
    $('.faq-btn, .faqset-btn p').text('Savol va Javoblar');
    $('.feedback-btn').text('Qayta aloqa');
    $('.about-btn').text('Dastur haqida');
    $('.encrypt-type').text('Turi:');
    $('#encryptBtn').attr('value', 'Shifrlash');
    $('#descryptBtn').attr('value', 'Shfrni yechish');
    $('#main-settings .title-settings p').text('Sozlanmalar');
    $('.edit-apperance p').text('Ko\'rinish');
    $('.edit-language p').text('Til');
    $('.select-a-lang').text('Tilni Tanlang:');
    $('.verify-update p').text('Yngilanish');
    $('.help-btn p').text('Yordam');
    $('.version-txt p').text('EncoderPD (Web) Beta versiya v1.4 (15067)');
    $('.decode-error').text('MD5, SHA1, SHA3 va SHA256 shifrdan yechilmaydi!');
} else {
    $('title').text('EncoderPD - EN');;
    $('.back-text').text('< Back');
    $('.enc-btn').text('Encrypt');
    $('.decd-btn').text('Descrypt');
    $('.history-btn').text('Version History');
    $('.news-btn').text('News');
    $('.faq-btn').text('FAQ');
    $('.feedback-btn').text('Feedback');
    $('.about-btn').text('About App');
    $('.encrypt-type').text('Type:');
    $('#encryptBtn').attr('value', 'Encrypt');
    $('#descryptBtn').attr('value', 'Descrypt');
    $('#main-settings .title-settings p').text('Settings');
    $('.edit-apperance p').text('Apperance');
    $('.edit-language p').text('Language');
    $('.select-a-lang').text('Select a Language:');
    $('.verify-update p').text('Update');
    $('.help-btn p').text('Help');
    $('.version-txt').text('EncoderPD (Web) Beta Version v1.4 (15067)');
    $('.decode-error').text('MD5, SHA1, SHA 3, and SHA256 are not decrypted!');
}