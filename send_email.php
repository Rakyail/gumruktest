<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reservation_date = $_POST['reservation_date'];
    $reservation_time = $_POST['reservation_time'];
    $party_size = $_POST['party_size'];

    $to = "enginozdemir190505@gmail.com"; // Buraya kendi e-posta adresinizi yazın
    $subject = "New Reservation";
    $message = "Reservation Details:\n\nName: $name\nPhone: $phone\nEmail: $email\nDate: $reservation_date\nTime: $reservation_time\nParty Size: $party_size";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Reservation successfully sent.";
    } else {
        echo "Failed to send reservation.";
        error_log("Mail failed to send. Check your server configuration.");
    }
} else {
    echo "Invalid request method.";
}
?>
