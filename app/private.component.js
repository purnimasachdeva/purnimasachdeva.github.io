System.register(['angular2/core', './authentication.service', './lock.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1, lock_service_1;
    var PrivateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (lock_service_1_1) {
                lock_service_1 = lock_service_1_1;
            }],
        execute: function() {
            PrivateComponent = (function () {
                function PrivateComponent(_authService, _lockService) {
                    this._authService = _authService;
                    this._lockService = _lockService;
                    this.lockID = '';
                    this.errorMsg = '';
                }
                PrivateComponent.prototype.ngOnInit = function () {
                    this._authService.checkCredentials();
                };
                PrivateComponent.prototype.rent = function () {
                    var code = this._lockService.getCode(this.lockID);
                    if (code === lock_service_1.ACQUIRED) {
                        this.errorMsg = 'This lock has already been rented';
                    }
                    else if (code === lock_service_1.NON_EXISTENT) {
                        this.errorMsg = 'No such lock exists';
                    }
                    else {
                        this.errorMsg = code;
                    }
                };
                PrivateComponent.prototype.giveup = function () {
                    var returnCode = this._lockService.removeLock(this.lockID);
                    if (returnCode === lock_service_1.DONE)
                        this.errorMsg = 'Returned lock!';
                    else
                        this.errorMsg = '';
                };
                PrivateComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                PrivateComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        providers: [authentication_service_1.AuthenticationService, lock_service_1.LockService],
                        template: "\n            <div class=\"container\" >\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                           <input [(ngModel)]=\"lockID\" id=\"lockID\" type=\"text\" >\n                           <label for=\"lockID\">Lock ID</label>\n                        </div>\n                    </div>\n                    <div>{{errorMsg}}</div>\n                    <br />\n                    <button (click)=\"rent()\" class=\"btn waves-effect waves-light\" name=\"rent\">Rent</button>\n                    <button (click)=\"giveup()\" class=\"btn waves-effect waves-light\" name=\"return\">Return</button>\n                    <button (click)=\"logout()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"logout\">Logout</button>\n                </div>\n            </div>\n   "
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, lock_service_1.LockService])
                ], PrivateComponent);
                return PrivateComponent;
            }());
            exports_1("PrivateComponent", PrivateComponent);
        }
    }
});
//# sourceMappingURL=private.component.js.map