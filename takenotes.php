
<?php
@ $logowanie = $_COOKIE['Logowanie'];
if($logowanie == "OK"){
  $con = mysqli_connect('localhost','root','','notepad');
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

  mysqli_select_db($con,"notes");
  $sql="SELECT * FROM `notes` WHERE `user_id`='".$_COOKIE['User_Id']."'";
  $result = mysqli_query($con,$sql);

  while($row = mysqli_fetch_array($result)) {
                        $arr[] = array(
                               'title' => $row['header'],
                               'content' => $row['content'],
                               'date' => $row['date']
                           );
                       }
                       echo json_encode($arr);

}













?>
