<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ST. PATRICKS</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="design.css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

</head>

<body>
    <div class="big_wrapper">
        <div id="contacts" class="contacts">
            <div class="logo">
                <img src="img/logop.jpg" alt="logo" width="100%" height="100%" id="img" />
            </div>
            <div class="contactstext">
                <p class="phone">PHONE: +2348132180216</p>
                <p class="hour">OPEN HOUR: 7:00am - 2:00am</p>
                <p id="days" class="days">DAYS: Mondays-Fridays</p>
            </div>
            <p class="motto"><span style="color:yellow">Motto:<span><span style="color:#ffffff"> Knowledge, Skill and Character</span></p>

        </div>
        <div id="navpanel" class="navpanel">
            <div class="toggle" id="toggle" onclick="openButton()">
                <span class="firstspan"></span>
                <span class="secondspan"></span>
                <span></span>
            </div>

            <nav id="nav">
                <a href="index.php">HOME</a>
                <a href="about_us.php">ABOUT US</a>
                <a href="contact_us.php">CONTACT US</a>
            </nav>
            <div id="closebutton" class="closebutton" onclick="closeButton()">&times;</div>
        </div>