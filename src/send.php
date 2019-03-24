<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['field'];
$email = $_POST['email'];                             

$mail->isSMTP();                                     
$mail->Host = 'mail.iuriepostolachi.pro';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               
$mail->Username = 'admin@iuriepostolachi.pro'; 
$mail->Password = 'nikron14'; 
$mail->SMTPSecure = 'ssl';                           
$mail->Port = 465; 
$mail->setFrom('admin@iuriepostolachi.pro'); 
$mail->addAddress('martolod14@gmail.com');    

$mail->isHTML(true);                                

$mail->Subject = 'Заявка с тестового сайта " Мастерская Макетов " студента Постолаки Юрий';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>