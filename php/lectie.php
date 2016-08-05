<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];

	// Generate page
	$query = "SELECT * FROM lectii WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo '<div class="detalii">';
		echo '<div class="grid">';
		echo '<p class="title">' . $row["titlu"] . '</p>';
		echo '<p class="rank"><i class="fa fa-trophy"></i> ' . $row["rank"] . ' </p>';
		echo '<p class="mentor"><i class="fa fa-user"></i> Mentor: ' . $row["mentor"] . ' </p>';
		echo '</div>';
		echo '</div>';
		echo '<div class="grid">';
		echo $row["teorie"];
		echo '<a href="materiale.html"><button class="corect-button blue">Inapoi</button></a>';
		echo '<div class="page-mentor">';
		echo '<img src="image/' . $row["image"] . '.png">';
		echo '<div class="tooltip blue">' . $row["dialog"] . '</div>';
		echo '</div>';
	}

	// Disconnect
	mysqli_close($conn);
?>