System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HistoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HistoryService = (function () {
                function HistoryService() {
                }
                HistoryService.prototype.store = function (cycle, email) {
                    var exisiting = this.history;
                    exisiting.push([cycle, email, Date().toString()]);
                    this.history = exisiting;
                };
                HistoryService.prototype.load = function () {
                    return this.history;
                };
                Object.defineProperty(HistoryService.prototype, "history", {
                    get: function () {
                        var previousHistory = localStorage.getItem('history');
                        if (previousHistory === null)
                            return [];
                        else
                            return JSON.parse(previousHistory);
                    },
                    set: function (newHistory) {
                        localStorage.setItem('history', JSON.stringify(newHistory));
                    },
                    enumerable: true,
                    configurable: true
                });
                HistoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HistoryService);
                return HistoryService;
            }());
            exports_1("HistoryService", HistoryService);
        }
    }
});
//# sourceMappingURL=history.service.js.map