import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app/app';
import {Store} from "./app/store/Store";
import {RootActionCreator} from "./app/store/actions/root.actions";

// include for production builds
// import {enableProdMode} from 'angular2/core';
// enableProdMode() 

document.addEventListener('DOMContentLoaded', main);

function main() {
    return bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, Store, RootActionCreator]).catch(err => console.error(err));
}