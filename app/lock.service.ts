import { Injectable }     from 'angular2/core';

export const ACQUIRED      = '-1001';
export const NON_EXISTENT  = '-2001';
export const DONE          = '-3001';

export class Lock {
  constructor( public id: string, public code: string ) {
  }
}

var locks = [
  new Lock( '1', '1947' ),
  new Lock( '2', '1951' )
];

@Injectable()
export class LockService {

  constructor() {
    // Setup the acquired locks if it doesn't exist
    if( localStorage.getItem( 'locks' ) === null )
      localStorage.setItem( 'locks', JSON.stringify( [ ] ) );
  }

  get acquiredLocks() {
    return JSON.parse( localStorage.getItem( 'locks' ) );
  }

  set acquiredLocks( lockList ) {
    console.log( lockList );
    localStorage.setItem( 'locks', JSON.stringify( lockList ) );
  }

  checkLock( lockID: string ) {
    // See if the lock has been acquired or not
    let acquiredLocks = this.acquiredLocks;
    if( acquiredLocks.find( l => l === lockID  ) )
      return true;
    else
      return false;
  }

  removeLock( lockID: string ) {
    let acquiredLocks = this.acquiredLocks;
    let index = acquiredLocks.indexOf( lockID );
    console.log( index );
    if( index > -1 ) {
      acquiredLocks.splice( index, 1 );
      this.acquiredLocks = acquiredLocks;
      return DONE;
    } else {
      return NON_EXISTENT;
    }
  }

  getCode( lockID: string ) {
    // Make sure that the lock is not taken by anyone
    if( this.checkLock( lockID ) )
      return ACQUIRED;
    else {
      // Return the code of the lock if it exists
      let lock = locks.find( l => l.id === lockID );

      if( lock ) {
        let acquiredLocks = this.acquiredLocks;
        acquiredLocks.push( lock.id );
        this.acquiredLocks = acquiredLocks;
        return lock.code;
      } else
        return NON_EXISTENT;
    }
  }
}
