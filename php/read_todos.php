<?php
	$date=NULL;
	$todo_list="[]";
	include("database.php");

	function read_todos($date) {
		$first_element=true;
		$todo_list="[";
		$db=connect();
		$db->query("SET NAMES utf8");
		$req=$db->prepare("SELECT * FROM todo WHERE _date=:date");
		$req->execute(array(
			"date" => $date
		));
		while($todo=$req->fetch()) {
			if(!$first_element)
				$todo_list.=",";
			else
				$first_element=false;
			$todo_list.="{
				\"id\": ".$todo["id"].",
				\"task\": \"".$todo["task"]."\",
				\"date\": \"".$todo["_date"]."\",
				\"done\": ".$todo["done"]
			."}";
		}
		$req->closeCursor();
		$todo_list.="]";
		return $todo_list;
	}

	if(isset($_POST["date"]))
		$date=htmlspecialchars($_POST["date"]);
	else if(isset($_GET["date"]))
		$date=htmlspecialchars($_GET["date"]);

	if($date!=NULL)
		$todo_list=read_todos($date);
	echo($todo_list);
?>
