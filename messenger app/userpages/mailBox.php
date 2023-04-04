<?php
session_start();
include "../database/dbConnection.php";
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] != true) {
  header("location: ../createAddress.php");
  exit;
}

$notempty = false;
$currAddress = $_SESSION['address'];
$display = "SELECT * FROM messages WHERE `msgto` = '$currAddress' ORDER BY timestamp DESC";
$result = mysqli_query($conn, $display);
$num = mysqli_num_rows($result);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" href="../images/icon.png">
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <script src="../js/bootstrap.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>True Feedback</title>
</head>

<body class="bg-light">
  <!-- Navbar -->
  <nav class="navbar navbar-light" style="z-index:10; background-color:teal; position:fixed; width:100%; top:0;">
    <a class="text-light navbar-brand mx-auto themeFont" href="mailBox.php">
      True Feedback
    </a>
  </nav>

  <!-- Hero -->
  <div class="p-3 text-center mb-3" style="margin-top: 10vh;">
    <h6 class="mb-3 text-success"><?php echo $currAddress ?>  Logged-IN</h6>
    <a class="btn btn-outline-danger" href="logout.php" role="button">Log-Out</a>
  </div>

  <div class="row col-10 col-md-6 mx-auto">
    <?php
    if ($num > 0) {
      echo "<h6 class='text-center' style='color:teal;'>Feedbacks Recieved</h6>";
      while ($row = mysqli_fetch_array($result)) {
        echo "<div class='card mb-3 col-12 col-md-7 mx-auto'>
                              <div class='card-body p-3'>
                              <p class='card-text text-center'>",
        $row['message'], "</p>
                                   <p class='card-text text-center'><small class='card-text text-success text-end'>",
        $row['timestamp'], "</small></p>
                              </div>
                              </div>";
      }
    }
    else {
      echo "<h6 class='text-center text-danger'>Empty Feedback Box</h6>";
    }

    ?>

  </div>
</body>

</html>