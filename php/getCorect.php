<?php

	// Connect
	require 'connect.php';

	// GET data
	$id = $_GET["id"];

	// Generate page
	$query = "SELECT * FROM teste WHERE id='$id'";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		$corect = array($row["intrebare_1"], $row["intrebare_2"], $row["intrebare_3"], $row["intrebare_4"], $row["intrebare_5"], $row["intrebare_6"], $row["intrebare_7"], $row["intrebare_8"]);
	}

	// Export
	echo json_encode($corect);

	// Disconnect
	mysqli_close($conn);

?>
