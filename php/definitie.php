<?php

	// Connect
	require 'connect.php';

	// Generate page
	$query = "SELECT * FROM cuvinte ORDER BY RAND() LIMIT 1";
	$result = mysqli_query($conn, $query);
	while ($row = mysqli_fetch_array($result)){
		$export[0] = $row["explicatie"];
		$export[1] = $row["cuvant"];
	}
	echo json_encode($export);

	// Disconnect
	mysqli_close($conn);
?>