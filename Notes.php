<?php

@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){
  echo<<<END
  <html>
  <head>
      <link rel='stylesheet' type='text/css' href='calendar.css'>
      <meta charset="utf-8">
      <title>Kalendarz</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <link href='http://fonts.googleapis.com/css?family=Imprima&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script type='application/javascript' src='calendar.js'></script>
  </head>
  <body onLoad='setup()'>
    <div id='wrapper'>
      <nav id='navBar'>
          <div class='logo'> <a href='#'>NAX.</a> </div>
          <div class='navList'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Report Bug</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class='logout'><a href='#'><i class='material-icons'>person</i> Log Out </a></div>

      </nav>
      <div class='notification'>
        <div class='messageBox'></div>
      </div>
      <article id='addNoteForm'>
      <form action="index.php">

        <span class='formExit'><i class='material-icons' style='font-size:2.5em'>clear</i></span>
        <label class='label'>
            <span class='letter_count header_count'>0/70</span>
            <textarea rows="1" cols="76" class='label_input headerField' placeholder='(Max 70 letters)'></textarea>
            <span class="field_label-wrap">
              <span class="field_label">Note Title</span>
            </span>
         </label>

         <label class='label'>
            <span class='letter_count content_count'>0/300</span>
             <textarea rows="1" cols="76" class='label_input contentField' placeholder='(Max 300 letters)'></textarea>
             <span class="field_label-wrap">
               <span class="field_label">Note description</span>
             </span>
          </label>

        <span id="sendQuery">SUBMIT &nbsp; <i class="material-icons">send</i></span>
      </form>





      </article>
      <article id='main-calendar'>





      </article>
      <foother>  Created by Nax. All Rights Reserved 2018.  </foother>
    </div>

  </body>
  </html>
END;
}
?>
