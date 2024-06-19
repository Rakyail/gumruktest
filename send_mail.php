<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al ve temizle
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $reservation_date = htmlspecialchars(trim($_POST['reservation_date']));
    $reservation_time = htmlspecialchars(trim($_POST['reservation_time']));
    $party_size = htmlspecialchars(trim($_POST['party_size']));

    // E-posta bilgiler
    $to = "enginozdemir190505@gmail.com";  // Buraya e-postaların gideceği adresi girin
    $subject = "New Reservation from $name";
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Reservation Date: $reservation_date\n";
    $message .= "Reservation Time: $reservation_time\n";
    $message .= "Party Size: $party_size\n";

    $headers = "From: noreply@yourdomain.com\r\n";  // Buraya gönderici e-posta adresini girin
    $headers .= "Reply-To: $email\r\n";

    // E-posta gönderimi
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
