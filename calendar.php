
<?php
@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){
if($_POST["decyzja"] == '2'){
  $q = $_POST["q"];

  $con = mysqli_connect('localhost','root','','notepad');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

  mysqli_select_db($con,"notes");
  $sql="SELECT * FROM `notes` WHERE (`date` = '".$q."' AND `user_id='".$_COOKIE['User_Id']."'`)";
  $result = mysqli_query($con,$sql);

  while($row = mysqli_fetch_array($result)) {
      echo $row['date'];
  }


}
else if($_POST["decyzja"] == '1'){
  echo "dupa";
}
}



?>
