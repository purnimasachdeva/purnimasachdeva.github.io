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
    var ACQUIRED, NON_EXISTENT, DONE, Lock, locks, LockService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("ACQUIRED", ACQUIRED = '-1001');
            exports_1("NON_EXISTENT", NON_EXISTENT = '-2001');
            exports_1("DONE", DONE = '-3001');
            Lock = (function () {
                function Lock(id, code) {
                    this.id = id;
                    this.code = code;
                }
                return Lock;
            }());
            exports_1("Lock", Lock);
            locks = [
                new Lock('1', '1947'),
                new Lock('2', '1951')
            ];
            LockService = (function () {
                function LockService() {
                    // Setup the acquired locks if it doesn't exist
                    if (localStorage.getItem('locks') === null)
                        localStorage.setItem('locks', JSON.stringify([]));
                }
                Object.defineProperty(LockService.prototype, "acquiredLocks", {
                    get: function () {
                        return JSON.parse(localStorage.getItem('locks'));
                    },
                    set: function (lockList) {
                        console.log(lockList);
                        localStorage.setItem('locks', JSON.stringify(lockList));
                    },
                    enumerable: true,
                    configurable: true
                });
                LockService.prototype.checkLock = function (lockID) {
                    // See if the lock has been acquired or not
                    var acquiredLocks = this.acquiredLocks;
                    if (acquiredLocks.find(function (l) { return l === lockID; }))
                        return true;
                    else
                        return false;
                };
                LockService.prototype.removeLock = function (lockID) {
                    var acquiredLocks = this.acquiredLocks;
                    var index = acquiredLocks.indexOf(lockID);
                    console.log(index);
                    if (index > -1) {
                        acquiredLocks.splice(index, 1);
                        this.acquiredLocks = acquiredLocks;
                        return DONE;
                    }
                    else {
                        return NON_EXISTENT;
                    }
                };
                LockService.prototype.getCode = function (lockID) {
                    // Make sure that the lock is not taken by anyone
                    if (this.checkLock(lockID))
                        return ACQUIRED;
                    else {
                        // Return the code of the lock if it exists
                        var lock = locks.find(function (l) { return l.id === lockID; });
                        if (lock) {
                            var acquiredLocks = this.acquiredLocks;
                            acquiredLocks.push(lock.id);
                            this.acquiredLocks = acquiredLocks;
                            return lock.code;
                        }
                        else
                            return NON_EXISTENT;
                    }
                };
                LockService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LockService);
                return LockService;
            }());
            exports_1("LockService", LockService);
        }
    }
});
//# sourceMappingURL=lock.service.js.map