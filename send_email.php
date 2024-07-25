<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include PHPMailer files
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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
        $mail->Host       = 'smtp.gmail.com'; // SMTP server address
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dacc06404@gmail.com'; // SMTP username
        $mail->Password   = 'bhahvdgrxerbowmv'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587; // TCP port to connect to

        // Recipients
        $mail->setFrom('dacc06404@gmail.com', 'Your Name');
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
} else {
    http_response_code(405); // Method Not Allowed
    echo 'Method Not Allowed';
}
?>
