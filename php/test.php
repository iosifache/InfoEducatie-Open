<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];

	// Generate page
	$query = "SELECT * FROM teste WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo '<div class="center">';
		echo '<h3>Sa scriem corect</h3>';
		echo '</div>';
		echo '<div class="detalii">';
		echo '<div class="grid">';
		echo '<p class="title">' . $row["titlu"] . '</p>';
		echo '<p class="rank"><i class="fa fa-trophy"></i> ' . $row["rank"] . ' </p>';
		echo '<p class="mentor"><i class="fa fa-user"></i> ' . $row["mentor"] . ' </p>';
		echo '</div>';
		echo '</div>';
		echo '<div class="grid">';
		// echo '<div id="quiz"></div>';
  		// echo '<button id="button">Urmatorul</button>';
		echo '<div class="page-mentor">';
		echo '<img src="image/' . $row["image"] . '.png">';
		echo '<div class="tooltip blue">' . $row["dialog"] . '</div>';
		echo '</div>';
	}

	// Disconnect
	mysqli_close($conn);

?>