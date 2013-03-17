<?PHP 

$to = "tplberzbay@gmail.com; roelmargarejo@gmail.com";
//$to = "giselle.saldaga@gmail.com";
$subject = "ARROW";
$headers = "From: Form Mailer";
$location = "index.html?confirm=yes";

$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$school = $_POST['school'];
$address = $_POST['address'];
$msg = $_POST['message'];

if ($subject_sender != '')
	$subject = $subject_sender;
	
$body = 
"Below is the result of your feedback form.
It was submitted on $date at $time.\n
Name: $name\n
Email: $email\n
Contact us.: $number\n
Company : $school\n
Message: $msg
	";

mail($to, $subject, $body, $headers);
header ("Location: $location"); 


?>

