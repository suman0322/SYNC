<?php
$showAlert = false;
$showError = false;

function getUserIP()
{
  // Get IP Address
  if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') > 0) {
      $addr = explode(",", $_SERVER['HTTP_X_FORWARDED_FOR']);
      return trim($addr[0]);
    } else {
      return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
  } else {
    return $_SERVER['REMOTE_ADDR'];
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include 'database/dbConnection.php';

  $address = $_POST["addressToSend"];
  $message = $_POST["msgToSend"];

  $existSql = "SELECT * FROM `allBox` WHERE address = '$address'";

  $result = mysqli_query($conn, $existSql);

  $numExistRows = mysqli_num_rows($result);

  if ($numExistRows == 0) {
    $showError = "Address does not Exist";
  } else {
    $user_ip = getUserIP();
    $sql = "INSERT INTO `messages` ( `msgfrom`, `msgto`,`message`,`timestamp`) VALUES ('$user_ip', '$address', '$message' ,current_timestamp())";
    $result = mysqli_query($conn, $sql);
    if ($result) {
      $showAlert = true;
    }
  }
}

?>








<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" href="./images/icon.png">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/bootstrap.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>True Feedback</title>
</head>

<body class="bg-light">


  <!-- Navbar -->
  <nav class="navbar navbar-light" style="background-color:teal; position:fixed; width:100%; top:0;">
    <a class="text-light navbar-brand mx-auto themeFont" href="index.php">
      True Feedback
    </a>
  </nav>


  <!-- Hero -->
  <div class="p-5 text-center" style="margin-top: 8vh;">
    <h1 id="heading" class="mb-3 font-weight-bold themeFont">Welcome to True Feedback</h1>
    <h6 class="mb-3">Send messages Anonymously</h6>
    <a class="btn btn-outline-primary" href="createAddress.php" role="button">Sign-Up</a>
    <a class="btn btn-outline-success" href="checkAddress.php" role="button">Log-In</a>
  </div>


  <!-- Messege Form -->
  <div class="col-10 col-md-4 mx-auto">
    <div class="border shadow-lg p-3 rounded-3 p-md-4 bg-light bg-gradient mb-3">
      <h6 class="text-center">Send Feedback</h6>
      <form action="index.php" method="post">
        <div class="form-group">
          <input type="text" class="form-control mb-3" required name="addressToSend" placeholder="Enter Address">
        </div>
        <div class="form-group">
          <textarea minlength="20" maxlength="100" class="form-control mb-3" required placeholder="Enter Feedback" name="msgToSend" rows="3"></textarea>
        </div>

        <!--Submit-->
        <div class="form-group text-center">
          <input type="submit" class="mx-auto btn col-4" style="background-color:teal; color:aliceblue;" value="Send">
        </div>
      </form>
    </div>
    <!-- Alert Box -->
    <?php
    if ($showAlert) {
      echo ' <div class="text-center alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Feedback has been Delivered .
        </button>
    </div> ';
    }
    if ($showError) {
      echo ' <div class="text-center alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> ' . $showError . '
                        </div> ';
    }
    ?>
  </div>
  <div class="mx-auto d-flex p-4">
    <a href="https://snskar125.site/" target="_blank" class="btn text-light" style="background-color:teal; position:fixed; bottom:10px; right:10px;">Created by Suman</a>
  </div>

</body>

</html>