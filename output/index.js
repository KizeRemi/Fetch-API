'use strict';

var clickLi = document.getElementById('todos');
clickLi.addEventListener(
	'click',
	function(e) {
		e.target.classList.toggle('done');
	},
	false
);

fetch('https://api.myjson.com/bins/9l2ez')
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		var ul = document.getElementById('todos');
		var todos = data.todos;
		return todos.map(function(todo) {
			var li = document.createElement('li');
			li.innerHTML = '' + todo.label;
			ul.appendChild(li);
			if (todo.complete) {
				li.classList.add('done');
			}
		});
	});
