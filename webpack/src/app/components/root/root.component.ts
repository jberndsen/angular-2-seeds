import {Component} from 'angular2/core';
import {TodoList} from '../todolist/todolist.component';
import {Store} from "../../store/Store";
import {RootActionCreator} from "../../store/actions/root.actions";

@Component({
    selector: 'root',
    styles: [require('./root.scss')],
    template: require('./root.html'),
    directives: [TodoList]
})
export class RootComponent {
    state = {};

    constructor(private store: Store, private actionCreator: RootActionCreator) {
        // I'm interested in state updates, so I subscribe to them
        store.subscribe(newState => {
            this.state = newState.root;
        });
    }
    
    addTodo(value) {
        let action  = this.actionCreator.addTodo(value);
        this.store.dispatch(action);
    }
}