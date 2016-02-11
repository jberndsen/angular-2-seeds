import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'todolist',
    template: `<div *ngFor="#todo of todos">{{todo.title}}</div>`,
    directives: [NgFor]
})

export class TodoList {
    @Input() todos;
    
    constructor() { }
}