<!-- Author: Manjaka13 <manjaka.rajaonson@gmail.com> -->
<!DOCTYPE HTML>
<HTML lang="en">
	<HEAD>
		<title>Todo list</title>
		<meta charset="UTF-8">
		<meta name="robots" content="index, follow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="author" content="Manjaka13 <manjaka.rajaonson@gmail.com>"/>
		<meta name="description" content="Add/check/delete Todos"/>
		<link rel="shortcut icon" type="image/x-icon" href="img/logo_harijaona_rajaonson.png"/>
		<link rel="icon" type="image/x-icon" href="img/logo_harijaona_rajaonson.png"/>

		<!-- Import our styles -->
		<link rel="stylesheet" href="css/general.css">
		<link rel="stylesheet" href="css/fontawesome.css">
		<link rel="stylesheet" href="css/style.css">
	</HEAD>
	<BODY>
		<div id="root">

			<div id="todo">
				<!-- Head of the window -->
				<div class="head">
					<div class="date">
						<p class="icon"><span class="fa fa-calendar"></span></p>
						<form name="date">
							<input type="date" name="input">
						</form>
					</div>
					<form class="create" name="create">
						<input class="input" type="text" placeholder="Task name" name="input" required>
						<button class="submit"><span class="fa fa-plus-circle"></span><span class="text"> Add task</span></button>
					</form>
				</div>
				<div class="separator"></div>

				<!-- List of todo items appears here -->
				<div id="list">
					<div class="loading">
						<img src="img/loading.gif" alt="...">
						<p>Loading...</p>
					</div>
				</div>
			</div>

			<!-- Author -->
			<div id="copyright">
				<p>Made with <span class="fa fa-heart"></span> by <a class="link" href="https://www.namanagasycar.com/portfolio" title="The developer of this app.">Manjaka13</a></p>
			</div>

		</div>

		


		<!-- Import our JS -->
		<script src="js/date.js"></script>
		<script src="js/todo.js"></script>
		<script src="js/ajax.js"></script>

		<script src="js/model.js"></script>
		<script src="js/view.js"></script>
		<script src="js/controller.js"></script>

		<script src="js/app.js"></script>

	</BODY>
</HTML>