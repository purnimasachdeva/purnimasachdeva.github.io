import { Component, ElementRef }                         from 'angular2/core';
import { AuthenticationService }                         from './authentication.service';
import { LockService, ACQUIRED, NON_EXISTENT, DONE }     from './lock.service';

@Component( {
    selector: 'login-form',
    providers: [ AuthenticationService, LockService ],
    template: `
            <div class="container" >
                <div class="content">
                    <div class="row">
                        <div class="input-field col s12">
                           <input [(ngModel)]="lockID" id="lockID" type="text" >
                           <label for="lockID">Lock ID</label>
                        </div>
                    </div>
                    <div>{{errorMsg}}</div>
                    <br />
                    <button (click)="rent()" class="btn waves-effect waves-light" name="rent">Rent</button>
                    <button (click)="giveup()" class="btn waves-effect waves-light" name="return">Return</button>
                    <button (click)="logout()" class="btn waves-effect waves-light" type="submit" name="logout">Logout</button>
                </div>
            </div>
   `
} )

export class PrivateComponent {
    public lockID = '';
    public errorMsg = '';

    constructor( private _authService: AuthenticationService, private _lockService: LockService ) { }

    ngOnInit() {
        this._authService.checkCredentials();
    }

    rent() {
       let code =  this._lockService.getCode( this.lockID );

       if ( code === ACQUIRED ) {
          this.errorMsg = 'This lock has already been rented';
       } else if( code === NON_EXISTENT ){
          this.errorMsg = 'No such lock exists';
       } else {
          this.errorMsg = code;
       }
    }

    giveup() {
       let returnCode = this._lockService.removeLock( this.lockID );
       if ( returnCode === DONE )
          this.errorMsg = 'Returned lock!';
       else
          this.errorMsg = '';
    }

    logout() {
        this._authService.logout();
    }
}
