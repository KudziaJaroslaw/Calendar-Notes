<!DOCTYPE>
<html>
<head>
	<title>Notepad Online - Rejestracja</title>
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
  <script src='https://www.google.com/recaptcha/api.js'></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="height=device-height, initial-scale=1.0">
</head>
<body>
	<div id='wrapper'>
		  <article id='register-page'>

					<section id='main-page'><span id='main-page-header'><a href='index.php'>NAX.</span><br><span id='main-page-content'>Powrót do głównej strony.</a></span></section>

          <section id='register-form'>

            <form action='register.php' method="post">
							<fieldset id='fieldset-register'>
								<div id='fieldset-position-register'>

											<h2>Rejestracja</h2>
											 <textarea name='login' placeholder="Login" cols="1" rows="1"></textarea><br>
                       <input type='email' name='email' placeholder="Email"><br>
											 <input type='password' name='passwrd' placeholder="Hasło"><br>
                       <input type='password' name='passwrd2' placeholder="Powtórz hasło"><br>
                       <span>Pytanie pomocnicze: <textarea name='question' placeholder="Imię twojego pierwszego zwierzaka"></textarea></span><br>
											 <span id='align'><span><input type="checkbox" name='accept'> Akceptuje Warunki Umowy.</span>
                       <input type='submit' name='rejestruj' value='Zarejestruj'></span></br>

							 </div>

							</fieldset>


            </form>

          </section>
					<?php


					$adres = 'localhost';
					$user = 'root';
					$pass = '';
					$db_name = 'notepad';

					$mysqli = mysqli_connect($adres, $user, $pass, $db_name) or die ("Not connected");
					mysqli_query($mysqli, "SET NAMES utf8");
					mysqli_query($mysqli, "CHARACTER_SET utf8_polish_ci");
					$open = mysqli_select_db($mysqli, $db_name) or die ("Not Openned");

					if(isset($_REQUEST['rejestruj'])){
						$login = $_REQUEST['login'];
						$email = $_REQUEST['email'];
						$passwd = $_REQUEST['passwrd'];
						$passwd2 = $_REQUEST['passwrd2'];
						$question = $_REQUEST['question'];

						if($passwd == $passwd2){
							if((!empty($login))&&(!empty($email))&&(!empty($passwd))&&(!empty($passwd2))&&(!empty($question))){
								$query = 'INSERT INTO `users`(`User_Id`, `Login`, `Password`, `Email`) VALUES ("","'.$login.'","'.md5($passwd).'","'.$email.'")';
								$wykon = mysqli_query($mysqli, $query);
								header('Location:/PROJEKTY/Notes/login.php');
							}
							else{
								echo "dupa nie działa";
							}

						}
						else{
							echo "Niepoprawne hasło!";
						}



					}


?>
      </article>
	</div>


</body>
</html>
