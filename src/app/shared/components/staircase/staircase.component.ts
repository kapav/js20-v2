import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'staircase',
  templateUrl: './staircase.component.html',
  styleUrls: ['./staircase.component.scss']
})
export class StaircaseComponent implements OnInit {

  // FormGroup - группа отдельных элементов управления (FormControl'ов)
  // FormControl - класс, который представляет элемент управления
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // FormBuilder - класс, предоставляющий удобный интерфейс для создания экземпляров FormControl'а
    this.loginForm = this.fb.group({
      // Validators - класс со статическими методами для валидации.
      // При передаче объекта структуры модели первый параметр - значение поля ввода,
      // второй параметр - валидатор или массив валидаторов.
      login: ['user1', Validators.required],
      password:['', [Validators.required, Validators.minLength(7)]]
    })
  }

  onSubmit(form) {
    console.log(form.valid)
    console.log(form.value)
  }

}
