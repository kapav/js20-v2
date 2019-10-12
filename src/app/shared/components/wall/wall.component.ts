import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {EvidenceService} from './../../services/evidence.service';

export class User {
  constructor(
    public id: number,
    public name: string,
    public role: string,
    public age?: number)
  {}
}

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit, AfterViewInit {

  public itemsSource: string[]

  messageFromTextbox: string
  messageKeypress: string
  messageTwoEvents: string
  fillingList: string[] = []

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']
  model: User = new User(0, '', '', 0)
  submitted: boolean = false

  data = 'Проверочная строка'

  modelFewErrors: User = new User(0, '', '', 0)
  submittedFewErrors = false

  modelEf: User = new User(0, '', '', 0)
  submittedEf = false
  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    name: '',
    age: ''
  }
  // Объект с сообщениями ошибок
  validationMessages = {
    name: {
      required: 'Поле имя обязательное для заполнения',
      minlength: 'Значение должно быть не менее 4-х символов'
    },
    age: {
      required: 'Поле возраст обязательное для заполнения'
    }
  }
  // ViewChild - используется для получения доступа к указанному компоненту и его методам
  @ViewChild('userformEf', { static: true }) userformEf: NgForm

  // private evidenceService: EvidenceService внедрение зависимости через конструктор
  constructor(private evidenceService: EvidenceService) {}

  ngOnInit() {
    this.itemsSource = this.evidenceService.getData();
  }

  ngAfterViewInit() {
    this.userformEf.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onKeyup(data) {
    this.messageFromTextbox = data;
  }

  onKeyupKeypress(data) {
    this.messageKeypress = data;
  }

  onKeyupTwoEvents(data) {
    this.messageTwoEvents = data;
  }

  addListItem(item: string) {
    this.fillingList.push(item);
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmitFewErrors() {
    this.submittedFewErrors = true;
    console.log('Отправлено.');
  }

  get diagnosticFewErrors() { return JSON.stringify(this.modelFewErrors); }

  onSubmitEf() {
    this.submittedEf = true;
    console.log('Отправлено. Все ошибки формы одним объектом.');
  }

  get diagnosticEf() { return JSON.stringify(this.modelEf); }

  onValueChanged(data?: any) {
    if (!this.userformEf) { return; }
    const form = this.userformEf.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      // form.get - получение элемента управления
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

}
