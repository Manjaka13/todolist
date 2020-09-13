<?php
	function connect() {
		$db=NULL;
		try {
			$db=new PDO("mysql:host=localhost;dbname=todolist_database", "root", "");
		} catch(Exception $e) {
			die($e->getMessage());
		}
		return $db;
	}
?>