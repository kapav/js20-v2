import {Injectable} from '@angular/core';

// Декораторы @Component, @Pipe, @Directive производные от Injectable.

@Injectable()
export class EvidenceService {

  getData() {
    let items: string[] = [];
    for (let i = 0; i < 10; i++) {
      items[i] = 'Пункт ' + i;
    }
    return items;
  }

}
