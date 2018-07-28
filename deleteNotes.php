<?php
@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){

  $con = mysqli_connect('localhost','root','','notepad');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }
  $note_id = $_POST['noteId'];
  mysqli_select_db($con,"notes");
  $sql="DELETE FROM `notes` WHERE `note_id` = '".$note_id."'";
  $wykon = mysqli_query($con,$sql);


   $res="Data Inserted Successfully:";
   echo json_encode($res);

}




?>
