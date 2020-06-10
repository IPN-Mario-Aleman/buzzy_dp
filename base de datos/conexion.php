<?php
  $conn = new mysqli('localhost','root','root','buzzydb');

  if ($conn->connect_error) {
    echo $error -> $conn->connect_error; 
  }

?>
