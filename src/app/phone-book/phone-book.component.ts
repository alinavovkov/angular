import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrl: './phone-book.component.scss'
})
export class PhoneBookComponent {
  public persons: Person[] = [
    {
      first: 'Petya',
      last: 'Zhuk',
      phone: '063111111'
    },
    {
      first: 'Alexandro',
      last: 'Lolik',
      phone: '098222222'
    },
    {
      first: 'Vova',
      last: 'Bondar',
      phone: '06833333'
    },
    {
      first: 'Lukyan',
      last: 'Alison',
      phone: '06833333'
    }
  ];

  public field = '';
  public sortState: { column: string, type: 'asc' | 'desc' } = { column: '', type: 'asc' };
  clikedStatus!: boolean;
  showTemplate1: boolean = true;
  editingPerson: Person | null = null;
  formControls: { [key: string]: { touched: boolean; invalid: boolean } } = {};
  inputFirst: string = '';
  inputLast: string = '';
  inputPhone: string = '';
  templateAddUser: any;

  constructor() { }

  ngOnInit(): void {
  }

  checkData(): void {
    console.log('persons = ', this.persons);
  }

  deleteBtn(person: Person): void {
    const index = this.persons.indexOf(person);
    if (index !== -1) {
      this.persons.splice(index, 1);
    }
  }

  changeSort(column: string): void {
    if (this.sortState.column === column) {
      this.sortState.type = this.sortState.type === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortState.column = column;
      this.sortState.type = 'asc';
    }
  }

  changeSortOrder(): void {
    this.sortState.type = this.sortState.type === 'asc' ? 'desc' : 'asc';
  }

  toggleTemplates() {
    this.showTemplate1 = !this.showTemplate1;
  }

  closeAddUser() {
    console.log('Closing template');
    console.log(this.showTemplate1);
    this.showTemplate1 = false; 
  }

  saveBtn() {
    if (this.clikedStatus) {
      const editedPersonIndex = this.persons.findIndex(p => p === this.editingPerson);
      if (editedPersonIndex !== -1) {
        this.persons[editedPersonIndex] = {
          first: this.inputFirst,
          last: this.inputLast,
          phone: this.inputPhone
        };
      }
    } else {
      const newPerson: Person = {
        first: this.inputFirst,
        last: this.inputLast,
        phone: this.inputPhone
      };
      this.persons.push(newPerson);
    }
    this.resetFormAndToggleTemplate();
  }

  editBtn(person: Person): void {
    this.showTemplate1 = !this.showTemplate1;
    this.clikedStatus = true;
    this.editingPerson = person;
    this.inputFirst = person.first;
    this.inputLast = person.last;
    this.inputPhone = person.phone;
  }

  private resetFormAndToggleTemplate() {
    this.showTemplate1 = !this.showTemplate1;
    this.clikedStatus = false;
    this.editingPerson = null;
    this.inputFirst = '';
    this.inputLast = '';
    this.inputPhone = '';
  }

  isInvalid(controlName: string): boolean {
    const control = this.formControls[controlName];
    return control && control.touched && control.invalid;
  }

  isFormInvalid(): boolean {
    return !this.inputFirst || !this.inputLast || !this.inputPhone;
  }
}

export interface Person {
  first: string;
  last: string;
  phone: string;
}