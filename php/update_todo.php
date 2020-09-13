<?php
	include("database.php");

	function update_todo($id, $done) {
		$db=connect();
		$db->query("SET NAMES utf8");
		$req=$db->prepare("UPDATE todo SET done=:done WHERE id=:id");
		$req->execute(array(
			"done" => $done,
			"id" => $id
		));
		$req->closeCursor();
	}

	if(isset($_POST["id"]) && isset($_POST["done"]))
		update_todo((int)$_POST["id"], (int)$_POST["done"]);
	echo("[]");
?>
