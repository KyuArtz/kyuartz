<?php
    $username = $_POST['username'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'shichiartz@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $username.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "shichiartz@gmail.com";
    
    $headers = "From: $email_from \r\n";

    $headers = "Reply-to: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Contact.html");
?>