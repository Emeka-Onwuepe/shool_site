<?php
function check($data){
	$data= trim($data);
	$data= stripslashes($data);
    $data= htmlspecialchars($data);
    $data=str_replace("\n.","\n..",$data);
	return $data;  
};
if (isset($_POST["submit"])) {
    $fullName=check($_POST["full_name"]);
					$email=check($_POST["email"]);
					$phoneNumber=check($_POST["phone_number"]);
					$subject=check($_POST["subject"]);
					$message=check($_POST["message"]);
$text="My Phone No:$phoneNumber"."\r\n\n".$message;
$headers= "From:$fullName" ."\r\n" . "Reply-To:$email" ;
$malito="pascalemy2010@gmail.com";
if ( mail($malito,$subject,$text,$headers)) {
	header("location: contact_us.php?mail=sent");
	
}else {
    header("location: contact_us.php?mail=notsent");
  
}
}

							






