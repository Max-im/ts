import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, deleteTodo  } from '../actions'

interface TodoProps {
    todo: Todo;
    deleteTodo: typeof deleteTodo;
}

export class _Todo extends Component<TodoProps> {
  render() {
    return (
      <div onClick={() => this.props.deleteTodo(this.props.todo.id)}>
          {this.props.todo.title}
      </div>
    )
  }
}

export const TodoComponent =  connect(() => ({}), {deleteTodo})(_Todo)