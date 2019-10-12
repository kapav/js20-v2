import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'stairwell',
  templateUrl: './stairwell.component.html',
  styleUrls: ['./stairwell.component.scss']
})
export class StairwellComponent implements OnInit  {

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  loginForm: FormGroup

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      // Validators - класс со статическими методами для валидации.
      // При вызове конструктора FormControl первый параметр - значение поля ввода,
      // второй параметр - валидатор или массив валидаторов.
      login: new FormControl('user1', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    })
  }

  onSubmit(form) {
    console.log(form.valid)
    console.log(form.value)
  }

}
