import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './phone-book.component';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrPersons: Person[], sort: string, column: string): Person[] {
    if (!arrPersons) return [];
    if (!sort) return arrPersons;
    switch (column) {
      case 'firstName':
        return (sort === 'asc') ?
          arrPersons.sort((a, b) => a.first.localeCompare(b.first)) :
          arrPersons.sort((a, b) => b.first.localeCompare(a.first));
      case 'lastName':
        return (sort === 'asc') ?
          arrPersons.sort((a, b) => a.last.localeCompare(b.last)) :
          arrPersons.sort((a, b) => b.last.localeCompare(a.last));
      case 'number':
        return (sort === 'asc') ?
          arrPersons.sort((a, b) => a.phone.localeCompare(b.phone)) :
          arrPersons.sort((a, b) => b.phone.localeCompare(a.phone));
      default:
        return arrPersons;
    }
  }
}