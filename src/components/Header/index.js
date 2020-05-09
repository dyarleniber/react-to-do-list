import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { input } = this.state;
        const { addTodo } = this.props;

        if (input) {
            addTodo(input);
            this.setState({ input: '' });
        }
    }

    handleInput = (event) => {
        const { value: input } = event.target;

        this.setState({ input });
    }

    render() {
        const { input } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={input} onChange={this.handleInput} />
                <button type='submit'>ADD</button>
            </form>
        );
    }
}
