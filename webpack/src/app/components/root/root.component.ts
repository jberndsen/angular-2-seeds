import {Component} from 'angular2/core';
import {Store} from "../../store/Store";
import {RootActionCreator} from "../../store/actions/root.actions";

@Component({
    selector: 'root',
    styles: [require('./root.scss')],
    template: require('./root.html')
})
export class RootComponent {
    state = {};

    constructor(private store: Store, private actionCreator: RootActionCreator) {
        // I'm interested in state updates, so I subscribe to them
        store.subscribe(newState => {
            this.state = newState.root.toJS();
        });
    }
}