import { Component, ElementRef }                         from 'angular2/core';
import { AuthenticationService }                         from './authentication.service';
import { HistoryService }                                from './history.service';
import { Router }                                        from 'angular2/router';

@Component( {
    selector: 'login-form',
    providers: [ AuthenticationService, HistoryService ],
    template: `
            <div class="container" >
                <div class="content">
                    <table>
                        <thead>
                           <tr>
                              <th data-field="id"> Lock ID </th>
                              <th data-field="user"> User </th>
                              <th data-field="Time"> Time </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr *ngFor="#item of history" >
                              <td>{{ item[0] }}</td>
                              <td>{{ item[1] }}</td>
                              <td>{{ item[2] }}</td>
                           </tr>
                        </tbody>
                    </table>

                    <br />
                    <button (click)="back()" class="btn waves-effect waves-light" name="back">Back</button>
                    <button (click)="logout()" class="btn waves-effect waves-light" type="submit" name="logout">Logout</button>
                </div>
            </div>
   `
} )

export class HistoryComponent {
    private history;

    constructor( private _authService: AuthenticationService,
                 private _historyService: HistoryService,
                 private _router: Router
               ) { }

    ngOnInit() {
        this._authService.checkCredentials();
        this.history = this._historyService.load();
    }

    back() {
        this._router.navigate( [ 'Home' ] );
    }
}
