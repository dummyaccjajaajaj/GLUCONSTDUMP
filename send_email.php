<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

echo 'SMTP_USERNAME: ' . getenv('SMTP_USERNAME') . '<br>';
echo 'SMTP_PASSWORD: ' . getenv('SMTP_PASSWORD') . '<br>';

// Create a PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // SMTP server address
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USERNAME'); // SMTP username
    $mail->Password   = getenv('SMTP_PASSWORD'); // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587; // TCP port to connect to

    // Recipients
    $mail->setFrom(getenv('SMTP_USERNAME'), 'Contact Form');
    $mail->addAddress('kenkenu758@gmail.com', 'Recipient Name');

    // Content
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $mail->send();
    http_response_code(200);
} catch (Exception $e) {
    http_response_code(500);
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}





    
?>
