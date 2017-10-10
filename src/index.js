// @flow

let clickLi = document.getElementById('todos');
clickLi.addEventListener(
	'click',
	function(e) {
		e.target.classList.toggle('done');
	},
	false
);

fetch('https://api.myjson.com/bins/9l2ez')
	.then(resp => resp.json())
	.then(function(data) {
		const ul = document.getElementById('todos');
		let todos = data.todos;
		return todos.map(function(todo) {
			let li = document.createElement('li');
			li.innerHTML = `${todo.label}`;
			ul.appendChild(li);
			if (todo.complete) {
				li.classList.add('done');
			}
		});
	});

