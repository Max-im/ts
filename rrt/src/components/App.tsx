import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from '../reducers';
import { TodoComponent } from './Todo';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
}

interface AppState {
    loading: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            loading: false
        }
    }

    onFetch() {
        this.setState({loading: true});
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({loading: false});
        }
    }

    render() {
        return <div>
            <button onClick={this.onFetch.bind(this)}>Fetch</button>
            {this.state.loading && 'LOADING...'}
            {this.props.todos.map(t => <TodoComponent key={t.id} todo={t} />)}
        </div>
    }
}

const mapStateToProps = ({ todos }: StoreState): {todos: Todo[]} => ({ todos });

export const App = connect(mapStateToProps, { fetchTodos })(_App);

