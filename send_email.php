<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Validate form data
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400); // Bad Request
    echo 'All form fields are required.';
    exit;
}

// Create a PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST']; // SMTP server address
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USERNAME']; // SMTP username
    $mail->Password   = $_ENV['SMTP_PASSWORD']; // SMTP password
    $mail->SMTPSecure = $_ENV['SMTP_SECURE']; // Enable TLS or SSL encryption
    $mail->Port       = $_ENV['SMTP_PORT']; // TCP port to connect to

    // Recipients
    $mail->setFrom($_ENV['SMTP_USERNAME'], 'Your Name');
    $mail->addAddress('kenkenu758@gmail.com', 'Recipient Name'); // Add a recipient

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = "<h2>Contact Request</h2><p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Message:</strong><br>$message</p>";

    // Send email
    $mail->send();
    http_response_code(200); // OK status code
    echo 'Message has been sent';
} catch (Exception $e) {
    http_response_code(500); // Internal Server Error status code
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
