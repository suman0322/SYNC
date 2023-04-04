<?php
$login = false;
$showError = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     include 'database/dbConnection.php';
     $address = $_POST["checkAddress"];
     $key = $_POST["checkKey"];

     $sql = "Select * from allBox where address='$address'";
     $result = mysqli_query($conn, $sql);
     $num = mysqli_num_rows($result);

     if ($num == 1) {
          while ($row = mysqli_fetch_assoc($result)) {
               if (password_verify($key, $row['addkey'])) {
                    $login = true;
                    session_start();
                    $_SESSION['loggedin'] = true;
                    $_SESSION['address'] = $address;
                    header("location: userpages/mailBox.php");
               } else {
                    $showError = "Incorrect Key";
               }
          }
     } else {
          $showError = "Invalid Credentials .";
     }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" href="./images/icon.png">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/bootstrap.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Address</title>
</head>

<body class="bg-light">
  <!-- Navbar -->
  <nav class="navbar navbar-light" style="background-color:teal; position:fixed; width:100%; top:0;">
    <a class="text-light navbar-brand mx-auto themeFont" href="./index.php">
      True Feedback
    </a>
  </nav>

  <!-- Hero -->
  <div class="p-5 text-center" style="margin-top: 9vh;">
    <h1 id="heading" class="mb-3 font-weight-bold themeFont">Check Your Feedback Address</h1>
    <h6 class="mb-3">Don't have Feedback Address ?</h6>
    <a class="btn btn-outline-primary" href="createAddress.php" role="button">Create Address</a>
  </div>

  <!-- Form -->
  <div class="col-10 col-md-4 mx-auto">
    <div class="border shadow-lg p-3 rounded-3 p-md-4 bg-light bg-gradient mb-3">
      <h6 class="text-center">Check Your Address</h6>
      <form action="checkAddress.php" method="post">
        <div class="form-group">
          <input type="text" class="form-control mb-3" required name="checkAddress" placeholder="Enter Address">
        </div>
        <div class="form-group">
          <input type="password" class="form-control mb-3" required name="checkKey" placeholder="Enter Key">
        </div>
        <div class="form-group text-center">
          <input type="submit" class="mx-auto btn col-4" style="background-color:teal; color:aliceblue;" value="Check">
        </div>
      </form>
    </div>
    
    <!-- Alert Box -->
    <?php
    if ($login) {
      echo ' <div class="text-center alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Logged-IN .
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

</body>

</html>