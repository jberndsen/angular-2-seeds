import {Injectable} from 'angular2/core';

@Injectable()
export class RootActionCreator {
    constructor() {}
    
    addTodo(title: string) {
        return {
            type: "ADD_TODO",
            title: title
        }
    }
}