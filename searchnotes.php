
<?php
@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){

  $q = $_POST["q"];


  $con = mysqli_connect('localhost','root','','notepad');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

  mysqli_select_db($con,"notes");
  $sql="SELECT * FROM `notes` WHERE `date` = '".$q."' AND `user_id`='".$_COOKIE['User_Id']."'";
  $result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
    $arr[] = array(
           'header' => $row['header'],
           'content' => $row['content'],
           'date' => $row['date'],
           'note_id' => $row['note_id']
       );
   }


   echo json_encode($arr);


   }




?>
