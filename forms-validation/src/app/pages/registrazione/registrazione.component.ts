import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],
})
export class RegistrazioneComponent implements OnInit {
  generi: string[] = ['uomo', 'donna', 'altro'];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nome: ['', Validators.required],
        cognome: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confermaPassword: ['', [Validators.required, Validators.minLength(8)]],
        genere: ['', Validators.required],
        immagineProfilo: ['', Validators.required],
        biografia: ['', Validators.required],
        userName: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  send() {
    console.log(this.form.value);
  }

  isValid(fieldName: string): boolean {
    return this.form.get(fieldName)?.valid || false;
  }

  isTouched(fieldName: string): boolean {
    return this.form.get(fieldName)?.touched || false;
  }

  isInValidTouched(fieldName: string): boolean {
    return !this.isValid(fieldName) && this.isTouched(fieldName);
  }

  // passwordMatchValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const password = control.get('password')?.value;
  //     const confermaPassword = control.get('confermaPassword')?.value;

  //     // Verifica che entrambe le password esistano e che siano diverse
  //     if (password && confermaPassword && password !== confermaPassword) {
  //       return { passwordsMismatch: true }; // Le password non corrispondono
  //     }

  //     return null; // Le password corrispondono
  //   };
  // }

  passwordMatchValidator = (control: FormControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confermaPassword = control.get('confermaPassword')?.value;

    // Verifica che entrambe le password esistano e che siano diverse
    if (password && confermaPassword && password !== confermaPassword) {
      return { passwordsMismatch: true }; // Le password non corrispondono
    }

    return null; // Le password corrispondono
  };

  isPasswordMismatch() {
    return (
      this.form.hasError('passwordsMismatch') &&
      this.form.get('confermaPassword')?.touched
    );
  }
}
