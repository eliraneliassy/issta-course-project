import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required,
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$')]),
    });
  }

  submit() {
    console.log(this.form);
  }

}
