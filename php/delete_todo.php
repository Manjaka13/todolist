<?php
	include("database.php");

	function delete_todo($id) {
		$db=connect();
		$db->query("SET NAMES utf8");
		$req=$db->prepare("DELETE FROM todo WHERE id=:id");
		$req->execute(array(
			"id" => $id
		));
		$req->closeCursor();
	}

	if(isset($_POST["id"]))
		delete_todo((int)$_POST["id"]);

	echo("[]");
?>
