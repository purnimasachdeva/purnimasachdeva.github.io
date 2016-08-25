import { Injectable }     from 'angular2/core';

@Injectable()
export class HistoryService {

  store( cycle: string, email: string ) {
    let exisiting = this.history;
    exisiting.push( [ cycle, email, Date().toString() ] );
    this.history = exisiting;
  }

  load() {
    return this.history;
  }

  get history() {
    let previousHistory = localStorage.getItem( 'history' );
    if ( previousHistory === null )
      return [];
    else
      return JSON.parse( previousHistory );
  }

  set history( newHistory ) {
    localStorage.setItem( 'history', JSON.stringify( newHistory ) );
  }
}
