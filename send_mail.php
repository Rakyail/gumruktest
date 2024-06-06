<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini al
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $reservation_date = $_POST['reservation_date'];
    $reservation_time = $_POST['reservation_time'];
    $party_size = $_POST['party_size'];

    // Hedef e-posta adresi
    $to = "target_email@example.com"; // Burada alıcı e-posta adresini belirtin

    // E-posta başlığı
    $subject = "New Reservation";

    // E-posta içeriği
    $message = "
    <html>
    <head>
    <title>New Reservation</title>
    </head>
    <body>
    <h2>Reservation Details</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Date:</strong> {$reservation_date}</p>
    <p><strong>Time:</strong> {$reservation_time}</p>
    <p><strong>Party Size:</strong> {$party_size}</p>
    </body>
    </html>
    ";

    // E-posta başlıkları
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Ek başlıklar
    $headers .= "From: <{$email}>" . "\r\n";

    // E-postayı gönder
    if (mail($to, $subject, $message, $headers)) {
        echo "Reservation sent successfully.";
    } else {
        echo "Failed to send reservation.";
    }
} else {
    echo "Invalid request method.";
}
?>
