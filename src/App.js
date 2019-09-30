import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
	{
		name: "Get to bed",
		id: 1,
		done: false
	},
	{
		name: "Brush teeth",
		id: 2,
		done: false
	},
	{
		name: "Feed the hog",
		id: 3,
		done: false
	},
	{
		name: "Homework",
		id: 4,
		done: false
	},
	{
		name: "Laundry",
		id: 5,
		done: false
	},
	{
		name: "Wash car",
		id: 6,
		done: false
	},
	{
		name: "Pay bills",
		id: 7,
		done: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todo: todoData
		};
	}

	toggleItem = id => {
		console.log(id);

		this.setState({
			todo: this.state.todo.map(item => {
				if (item.id === id) {
					return {
						...item,
						done: !item.done
					};
				} else {
					return item;
				}
			})
		});
	};

	addTodo = todoName => {
		const newTodo = {
			name: todoName,
			id: Date.now(),
			done: false
		};
		this.setState({
			todo: [...this.state.todo, newTodo]
		});
	};

	clearTodo = () => {
		this.setState({
			todo: this.state.todo.filter(item => !item.done)
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo List!</h2>
				<TodoList
					todo={this.state.todo}
					toggleItem={this.toggleItem}
					clearTodo={this.clearTodo}
				/>
				<TodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
