import React, { Component } from "react";
import './todo.css'
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
            done: false
        }

        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    markAsDone() {
        this.setState({ done: true })
    }

    removeTodo() {
        this.props.removeTodo(this.state.description);
    }

    cssClasses() {
        let classes = ['Todo'];
        if (this.state.done) {
            classes = [...classes, 'Done'];
        }
        return classes.join(' ');
        }

        

    render() {
        return (
            <div className={this.cssClasses()}>{this.state.description}
                <br />
                <br />
                <Stack direction='row'>
                    <CheckIcon alignContent="right" color="green.300" onClick={this.markAsDone} />
                    <DeleteIcon alignContent="right" color="red.700" onClick={this.removeTodo} />
                </Stack>
            </div>
        );
    }
}


export default Todo;