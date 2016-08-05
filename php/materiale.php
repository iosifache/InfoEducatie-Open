<?php

	// Connect
	require 'connect.php';

	// Generate page
	$query = "SELECT * FROM lectii";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo '<a href="lectie.html?id=' . $row["id"] . '">';
		echo '<div class="material grid">';
		echo '<div class="col-1-2">';
		echo '<p class="title">Lectie: ' . $row["titlu"] . '</p>';
		echo '<p class="offer"><i class="fa fa-trophy"></i> ' . $row["rank"] . '</p>';
		echo '<p class="offer"><i class="fa fa-user"></i> Mentor: ' . $row["mentor"] . '</p>';
		echo '</div>';
		echo '<div class="col-1-2 right">';
		echo '<img src="image/' . $row["image"] .'.png"></div>';
		echo '</div>';
		echo '</a>';
	}
	$query = "SELECT * FROM teste";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		echo '<a href="test.html?id=' . $row["id"] . '">';
		echo '<div class="material grid">';
		echo '<div class="col-1-2">';
		echo '<p class="title">Test: ' . $row["titlu"] . '</p>';
		echo '<p class="offer"><i class="fa fa-trophy"></i> ' . $row["rank"] . '</p>';
		echo '<p class="offer"><i class="fa fa-user"></i> Mentor: ' . $row["mentor"] . '</p>';
		echo '</div>';
		echo '<div class="col-1-2 right">';
		echo '<img src="image/' . $row["image"] .'.png"></div>';
		echo '</div>';
		echo '</a>';
	}
	echo '<a href="index.html"><button>Inapoi</button></a>';

	// Disconnect
	mysqli_close($conn);
	
?>