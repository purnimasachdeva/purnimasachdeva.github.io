import { Component }                        from 'angular2/core';
import { LoginComponent }                   from './login.component';
import { PrivateComponent }                 from './private.component';
import { HistoryComponent }                 from './history.component';
import { RouteConfig, ROUTER_DIRECTIVES }   from 'angular2/router';

@Component( {
    selector: 'my-app',
    directives: [ LoginComponent, ROUTER_DIRECTIVES ],
    template: `
            <router-outlet></router-outlet>
        `
} )

@RouteConfig( [
    { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/history', name: 'History', component: HistoryComponent }
] )

export class AppComponent {}
