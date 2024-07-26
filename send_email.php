<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create a PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // SMTP server address
        $mail->SMTPAuth   = true;
        $mail->Username   = 'SMTP_USERNAME'; // SMTP username
        $mail->Password   = 'SMTP_PASSWORD'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587; // TCP port to connect to

    // Recipients
    $mail->setFrom('SMTP_USERNAME', '');
    $mail->addAddress('kenkenu758@gmail.com', ''); // Add a recipient

    // Content
    $mail->isHTML(false); // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nEmail: $email\n\nMesage:\n $message";

    // Send email
    $mail->send();
    http_response_code(200); // OK status code
} catch (Exception $e) {
    http_response_code(500); // Internal Server Error status code
}
?>
