<?php
$showAlert = false;
$showError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include 'database/dbConnection.php';

  $address = $_POST["createAddress"];
  $key = $_POST["createKeyM"];
  $ckey = $_POST["createKeyC"];

  $existSql = "SELECT * FROM `allBox` WHERE address = '$address'";

  $result = mysqli_query($conn, $existSql);

  $numExistRows = mysqli_num_rows($result);

  if ($numExistRows > 0) {
    $showError = "Address Already Registered";
  } else {
    if (($key == $ckey)) {
      $hash = password_hash($key, PASSWORD_DEFAULT);
      $sql = "INSERT INTO `allBox` ( `address`, `addkey`,`timestamp`) VALUES ('$address', '$hash', current_timestamp())";
      $result = mysqli_query($conn, $sql);
      if ($result) {
        $showAlert = true;
      }
    } else {
      $showError = "Keys do not Match";
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
    <a class="text-light navbar-brand mx-auto themeFont" href="index.php">
      True Feedback
    </a>
  </nav>

  <!-- Hero -->
  <div class="p-5 text-center" style="margin-top: 9vh;">
    <h1 id="heading" class="mb-3 font-weight-bold themeFont">Create Feedback Address</h1>
    <h6 class="mb-3">Already Registered ?</h6>
    <a class="btn btn-outline-success" href="checkAddress.php" role="button">Check Address</a>
  </div>

  <!-- Form -->
  <div class="col-10 col-md-4 mx-auto">
    <div class="border shadow-lg p-3 rounded-3 p-md-4 bg-light bg-gradient mb-3">
      <h6 class="text-center">Create Address</h6>
      <form action="createAddress.php" method="post">
        <div class="form-group">
          <input type="text" minlength="6" maxlength="50" class="form-control mb-3" required name="createAddress" placeholder="Create Address">
        </div>
        <div class="form-group">
          <input type="password" minlength="6" maxlength="50" class="form-control mb-3" required name="createKeyM" placeholder="Create Key">
        </div>
        <div class="form-group">
          <input type="password" minlength="6" maxlength="50" class="form-control mb-3" required name="createKeyC" placeholder="Confirm Key">
        </div>
        <div class="form-group text-center">
          <input type="submit" class="mx-auto btn col-4" style="background-color:teal; color:aliceblue;" value="Create">
        </div>
      </form>
    </div>

    <!-- Alert Box -->
    <?php
    if ($showAlert) {
      echo ' <div class="text-center alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Feedback Address has been Created .
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