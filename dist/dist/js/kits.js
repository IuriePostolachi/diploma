$('#tab_cm1').click(function() {
    // Табы
    $('#tab_cm1').addClass('active');
    $('#tab_cm2').removeClass('active');
    $('#tab_cm3').removeClass('active');
    // Содержание
    document.getElementById('cont_tabcm1').style.display = 'block';
    document.getElementById('cont_tabcm2').style.display = 'none';
    document.getElementById('cont_tabcm3').style.display = 'none';
});
$('#tab_cm2').click(function() {
    // Табы
    $('#tab_cm1').removeClass('active');
    $('#tab_cm2').addClass('active');
    $('#tab_cm3').removeClass('active');
    // Содержание
    document.getElementById('cont_tabcm1').style.display = 'none';
    document.getElementById('cont_tabcm2').style.display = 'block';
    document.getElementById('cont_tabcm3').style.display = 'none';
});
$('#tab_cm3').click(function() {
    // Табы
    $('#tab_cm1').removeClass('active');
    $('#tab_cm2').removeClass('active');
    $('#tab_cm3').addClass('active');
    // Содержание
    document.getElementById('cont_tabcm1').style.display = 'none';
    document.getElementById('cont_tabcm2').style.display = 'none';
    document.getElementById('cont_tabcm3').style.display = 'block';
});