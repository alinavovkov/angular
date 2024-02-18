import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrPersons: Person[], field: string): Person[] {
    if(!arrPersons) return [];
    if(!field) return arrPersons;
    return arrPersons.filter(person =>
      person.last.toLowerCase().includes(field.toLowerCase()) ||
      person.first.toLowerCase().includes(field.toLowerCase()) ||
      person.phone.includes(field)
    );
  }

}
