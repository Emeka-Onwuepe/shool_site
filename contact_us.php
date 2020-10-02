<?php
require_once 'header.php';
?>
<div id="formDiv">
<p class="p" style="color:white; width:50%;text-indent:0px;
 margin:0px auto;text-align:center;padding:5px;"><?php  
$Echeck="http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	if(strpos($Echeck,"mail=sent")==true){
		echo "Mail sent successfully.";
	}else if(strpos($Echeck,"mail=notsent")==true){
        echo "There was an error. Please,resend.";
    }
?></p>
<fieldset>
    <legend>SEND US A MESSAGE</legend>
    <form action="processdata.php" method="post">
        <label for="full_name">Full Name</label>
        <input type="text" name="full_name" class="full_name" id="full_name" placeholder="please enter your full name" required>
        <p id="full_nameer"></p>
        <label for="email">Email</label>
        <input type="email" name="email" class="email" id="email" placeholder="please enter your email address"  required>
        <p id="emailer"></p>
        <label for="phone_number">Phone Number</label>
        <input type="text" name="phone_number" class="phone_number" id="phone_number" placeholder="please enter your phone number"  required>
        <p id="phone_numberer"></p>
        <label for="subject">Subject</label>
        <input type="text" name="subject" class="subject" id="subject" placeholder="Subject"  required>
        <p id="subjecter"></p>
        <label for="message">Message</label>
        <p id="messageer"></p>
        <textarea name="message" class="message"id="message" cols="" rows="10" placeholder="Let's hear from you" required></textarea>
        <button type="submit" name="submit" id="submit">SEND</button>
        <p class="forminfo">The above button will only be clickable when there is no empty field and no error in any field. </p>
    </form>
</fieldset>
</div>


    
    <?php
require_once 'footer.php';
?>
 <script src="contact.js" async defer></script>

</body>

</html>