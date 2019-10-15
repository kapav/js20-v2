import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {EvidenceService} from './../../services/evidence.service';
import {UserTe} from '../../interfaces/user';

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit, AfterViewInit {

  public itemsSource: string[]

  messageIncontinently: string
  messageKeypress: string
  messageTwoEvents: string

  fillingList: string[] = []

  dataTestingInput = 'Изменение классов инпута при действиях'

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']
  
  modelOe: UserTe = new UserTe(0, '', '', 0)
  submittedOe: boolean = false
  
  modelFewErrors: UserTe = new UserTe(0, '', '', 0)
  submittedFewErrors = false

  modelEf: UserTe = new UserTe(0, '', '', 0)
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

  onKeyupIncontinently(data) {
    this.messageIncontinently = data;
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

  onSubmitOe() {
    this.submittedOe = true;
    console.log('Отправлено. По одной ошибке на контрол.')
  }

  get diagnosticOe() { return JSON.stringify(this.modelOe); }

  onSubmitFewErrors() {
    this.submittedFewErrors = true;
    console.log('Отправлено. Несколько ошибок на контрол.');
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
