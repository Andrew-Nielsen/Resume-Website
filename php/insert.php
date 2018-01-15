<?php
#Mysql Database Insert
#try this action
try{
$connString ="mysql:host=localhost;dbname=CONTACT FORM"; //database connection
$user = "root"; //Username
$pass = "root"; //Password

$pdo = new PDO($connString, $user, $pass); //Establish an object for the connection
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //add exceptions

#Pull Details from the contact form
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $number = $_POST['number'];
  $email = $_POST['email'];
  $comment = $_POST['comments'];

#Insert the data into the mysql Engine
  $sql = "INSERT INTO Contact (FirstName, LastName, PhoneNumber, Email, Comments)
    VALUES('$firstName', '$lastName', '$number', '$email', '$comment')";

#execute the sql query
  $count = $pdo->exec($sql);
}
  # catch the exceptions from the action
  catch (PDOException $e){
    die($e->getMessage());
}
?>
