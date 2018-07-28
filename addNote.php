
<?php
@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){

  $con = mysqli_connect('localhost','root','','notepad');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }
  mysqli_select_db($con,"notes");
  $date = $_POST['date'];
  $header = $_POST['header'];
  $content = $_POST['content'];
  $sql= "INSERT INTO `notes`(`note_id`, `user_id`, `header`, `content`, `date`) VALUES ('','".$_COOKIE['User_Id']."','".$header."','".$content."','".$date."')";
  $wykon = mysqli_query($con,$sql);

   $res="Data Inserted Successfully:";
   echo json_encode($res);


   }
?>
