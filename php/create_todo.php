<?php
	include("database.php");

	function create_todo($task, $date) {
		$db=connect();
		$db->query("SET NAMES utf8");
		$req=$db->prepare("INSERT INTO todo(task, _date, done) VALUES (:task, :date, 0)");
		$req->execute(array(
			"task" => $task,
			"date" => $date
		));
		$req->closeCursor();
	}

	if(isset($_POST["task"]) && isset($_POST["date"]))
		create_todo(htmlspecialchars($_POST["task"]), htmlspecialchars($_POST["date"]));
	echo("[]");
?>
