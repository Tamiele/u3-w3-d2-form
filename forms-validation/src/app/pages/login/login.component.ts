import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('form') form!: NgForm;

  submit(form: NgForm) {
    console.log('form inviato al submit', form);
    console.log(form.form.value);

    form.reset();
  }
}
