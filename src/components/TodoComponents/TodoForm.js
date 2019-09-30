import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			item: ""
		};
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitTodo = e => {
		e.preventDefault();
		this.props.addTodo(this.state.item);
	};

	render() {
		return (
			<form onSubmit={this.submitTodo}>
				<input
					type="text"
					value={this.item}
					name="item"
					onChange={this.handleChanges}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
