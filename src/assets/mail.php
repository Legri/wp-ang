<?php

function test_input($data) {
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
return $data;
}

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
// the message


$user = json_decode(file_get_contents('php://input'), true);
$msg = test_input($user['username']);
$msg2 = test_input($user['usermail']);
$msg3 = test_input($user['usertext']);

// use wordwrap() if lines are longer than 70 characters
//$msg = wordwrap($msg,70);

// send email
//echo $_POST['username'];
mail("kusmirchuk@ukr.net","My subject",$msg."\r\n".$msg2."\r\n".$msg3);
?>