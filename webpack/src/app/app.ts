import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {RootComponent} from './components/root/root.component';

@Component({
    selector: 'app',
    styles: [require('./app.scss')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html'),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: RootComponent, as: 'RootComponent' }
])
export class App { }