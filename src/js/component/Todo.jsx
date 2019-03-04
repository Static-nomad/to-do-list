import React from "react";
import ReactDOM from "react-dom";

//create your first component
export class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: ["Code"],
			input: ""
		};
	}

	whatever = e => {
		if (e.key === "Enter") {
			let x = this.state.todos;
			let y = this.state.input;
			if (y == "" || y == " ") {
				this.setState({ todos: x, input: "" });
			} else {
				x.push(this.state.input);
				this.setState({ todos: x, input: "" });
			}
		}
	};

	frank = e => {
		this.setState({ input: e.target.value });
	};

	jersey = index => {
		var x = this.state.todos;
		x.splice(index, 1);
		this.setState({ todos: x });
	};

	render() {
		return (
			<div className="container text-center">
				<h1>To-Do List!</h1>
				<div className="body flex-start">
					<input
						onKeyPress={this.whatever}
						onChange={this.frank}
						value={this.state.input}
					/>

					{this.state.todos.map((coco, index) => {
						return (
							<li className="kit" key={index}>
								{coco}
								<a
									href="#"
									className="text-center"
									onClick={() => this.jersey(index)}>
									[x]
								</a>
							</li>
						);
					})}
				</div>
			</div>
		);
	}
}
