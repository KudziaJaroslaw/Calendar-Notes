<!DOCTYPE>
<html>
<head>
	<title>Notepad Online - Logowanie</title>
	<link rel="stylesheet" type="text/css" href="general.css">
		<!-- Set the name of the default CSS style sheet -->
	<meta http-equiv="default-style" content="default stylesheet title" />
	<!-- Defines a time interval in seconds for the document to refresh itself -->
	<meta http-equiv="refresh" content="300" />
	<!-- Specify a legacy document mode that Internet Explorer should use to display a webpage -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<!-- Alternative form of setting the charset attribute. A document must not contain both a meta element with an http-equiv attribute in the encoding declaration state and a meta element with the charset attribute present. -->
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<!-- Control the behavior of search engine crawling and indexing. -->
	<meta name="http-equiv" content="X-Robots-Tag : noindex, follow" />
	<!-- The name of the Web application that the page represents -->
	<meta name="application-name" content="Sample Application Name" />
	<!-- Name of the author of the document -->
	<meta name="author" content="John Doe"/>
	<!-- Specifies the software package used to generate the document -->
	<meta name="generator" content="SomeWebPageGenerator 4.0"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script type="text/javascript" src="javascript.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="height=device-height, initial-scale=1.0">
</head>
<body>
	<div id='wrapper'>
		  <article id='login-page'>

					<section id='main-page'><span id='main-page-header'><a href='index.php'>NAX.</span><br><span id='main-page-content'>Powrót do głównej strony.</a></span></section>

          <section id='login-form'>

            <form action='login.php' method="post">
							<fieldset id='fieldset-login'>
								<div id='fieldset-position-login'>

											<h2>Logowanie</h2>
											 <textarea name='login' placeholder="Login" cols="1" rows="1"></textarea>	<br>
											 <input type='password' name='passwrd' placeholder="Hasło"><br>
											<span id='align'> <span><a href='#'>Zapomniałem hasła</a><br><a href='register.php'>Nie mam konta</a></span><input type='submit' name='loguj' value='Zaloguj'></span></br>

		<?php
					$adres = 'localhost';
					$user = 'root';
					$pass = '';
					$db_name = 'notepad';

					if(isset($_REQUEST['loguj'])){
						$mysqli = mysqli_connect($adres, $user, $pass, $db_name) or die ("Not connected");
						mysqli_query($mysqli, "SET NAMES utf8");
						mysqli_query($mysqli, "CHARACTER_SET utf8_polish_ci");
						$open = mysqli_select_db($mysqli, $db_name) or die ("Not Openned");
						$user = $_REQUEST['login'];
						$psw = md5($_REQUEST['passwrd']);

						$query = "SELECT * FROM `users` WHERE `Login` = '".$user."' AND `Password` = '".$psw."'";
						$wykon = mysqli_query($mysqli, $query);
						if($wykon){
							$key = mysqli_fetch_assoc($wykon) or die ("Nie wykonano");
							$id = $key['User_Id'];
							$czas = time();
							setcookie("User_Id", "$id", $czas+3600);
							setcookie("Logowanie", "OK", $czas+3600);
							header("Location:/PROJEKTY/Notes/Notes.php");
						}
						else{
							echo "Nieprawidłowe dane.";
						}
					}




		?>

							 </div>

							</fieldset>


            </form>

          </section>

      </article>
	</div>


</body>
</html>
