System.register(['angular2/core', './authentication.service', './history.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1, history_service_1, router_1;
    var HistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (history_service_1_1) {
                history_service_1 = history_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent(_authService, _historyService, _router) {
                    this._authService = _authService;
                    this._historyService = _historyService;
                    this._router = _router;
                }
                HistoryComponent.prototype.ngOnInit = function () {
                    this._authService.checkCredentials();
                    this.history = this._historyService.load();
                };
                HistoryComponent.prototype.back = function () {
                    this._router.navigate(['Home']);
                };
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        providers: [authentication_service_1.AuthenticationService, history_service_1.HistoryService],
                        template: "\n            <div class=\"container\" >\n                <div class=\"content\">\n                    <table>\n                        <thead>\n                           <tr>\n                              <th data-field=\"id\"> Lock ID </th>\n                              <th data-field=\"user\"> User </th>\n                              <th data-field=\"Time\"> Time </th>\n                           </tr>\n                        </thead>\n                        <tbody>\n                           <tr *ngFor=\"#item of history\" >\n                              <td>{{ item[0] }}</td>\n                              <td>{{ item[1] }}</td>\n                              <td>{{ item[2] }}</td>\n                           </tr>\n                        </tbody>\n                    </table>\n\n                    <br />\n                    <button (click)=\"back()\" class=\"btn waves-effect waves-light\" name=\"back\">Back</button>\n                    <button (click)=\"logout()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"logout\">Logout</button>\n                </div>\n            </div>\n   "
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, history_service_1.HistoryService, router_1.Router])
                ], HistoryComponent);
                return HistoryComponent;
            }());
            exports_1("HistoryComponent", HistoryComponent);
        }
    }
});
//# sourceMappingURL=history.component.js.map