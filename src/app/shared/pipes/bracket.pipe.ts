import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bracket'
})
export class BracketPipe implements PipeTransform {
  transform(value: string): string {
    return '[' + value.replace(/^[[{(]|[\]})]/g, '') + ']'
  }
}
