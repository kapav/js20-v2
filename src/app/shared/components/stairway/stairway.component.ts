import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserCo} from '../../interfaces/user';

@Component({
  selector: 'stairway',
  templateUrl: './stairway.component.html',
  styleUrls: ['./stairway.component.scss']
})
export class StairwayComponent implements OnInit {

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  userForm: FormGroup
  user: UserCo = new UserCo()

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
  formErrors = {
    name: '',
    age: '',
    email: '',
    role: ''
  }

  // Объект с сообщениями ошибок
  validationMessages = {
    name: {
      required: 'Обязательное поле имени',
      minlength: 'Значение должно быть не менее 4-х символов',
      maxlength: 'Значение не должно быть больше 15-и символов'
    },
    age: {
      required: 'Обязательное поле возраста',
      pattern: 'Значение должно быть натуральным числом'
    },
    email: {
      required: 'Обязательное поле почты',
      pattern: 'Неправильный формат адреса почты'
    },
    role: {
      required: 'Обязательное поле роли'
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: [this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]],
      age: [this.user.age, [
        Validators.required,
        Validators.pattern('\\d+')
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
      ]],
      role: [this.user.role, [
        Validators.required
      ]]
    })

    this.userForm.valueChanges
      .subscribe(data => this.onValueChange(data))

    this.onValueChange()

  }

  onValueChange(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm

    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      // form.get - получение элемента управления
      const control = form.get(field)

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' '
        }
      }
    }
  }

  onSubmit() {
    console.log('Отправлено. Сообщения об ошибках из кода компонента.')
    console.log(this.userForm.value)
  }

}
