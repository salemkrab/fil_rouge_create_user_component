import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {
  birthDateMax!: Date;
  birthDateMin!: Date;

  createUserForm!: FormGroup<{
    lastName: FormControl<string | null>;
    firstName: FormControl<string | null>;
    email: FormControl<string | null>;
    employeeNumber: FormControl<string | null>;
    address: FormControl<string | null>;
    birthDate: FormControl<string | null>;
    phoneNumber: FormControl<string | null>;
    employeeFunction: FormControl<string | null>;
    firstPassword: FormControl<string | null>;
    canShare: FormControl<string | null>;
    canModify: FormControl<string | null>;
  }>;

  static isBirthDateCorrect(control: AbstractControl): ValidationErrors | null {
    // control is a date input, so we can build the Date from the value
    const birthDateMin = new Date();
    birthDateMin.setFullYear(birthDateMin.getFullYear() - 100);
    const birthDateMax = new Date();
    birthDateMax.setFullYear(birthDateMax.getFullYear() - 18);
    const birthDatevalue = new Date(control.value);
    return birthDatevalue < birthDateMin ? { tooOld: true } : birthDatevalue > birthDateMax ? { tooYoung: true } : null;
  }
  static selectValidator(control: AbstractControl): ValidationErrors | null {
    const selectValue = control.value;
    return selectValue === "dafaultSelect" ? { notSelected: true } : null;
  }




  constructor(fb: FormBuilder) {
    this.createUserForm = fb.group({
      lastName: fb.control('', [Validators.required, Validators.minLength(2)]),
      firstName: fb.control('', [Validators.required, Validators.minLength(2)]),
      email: fb.control('', [Validators.required, Validators.email]),
      employeeNumber: fb.control('', [Validators.required, Validators.pattern('^[0-9]{8}$')]),
      address: fb.control('', [Validators.required]),
      birthDate: fb.control('', [Validators.required, CreateUserPageComponent.isBirthDateCorrect]),
      phoneNumber: fb.control('', [Validators.required, Validators.pattern("^0[1-9][0-9]{8}$")]),
      employeeFunction: fb.control('', [Validators.required, CreateUserPageComponent.selectValidator]),
      firstPassword: fb.control('', [Validators.required, Validators.pattern('^.{8,20}$')]),
      canShare: fb.control(''),
      canModify: fb.control('')

    });
  }

  ngOnInit(): void {
    this.birthDateMin = new Date();
    this.birthDateMin.setFullYear(this.birthDateMin.getFullYear() - 100);
    this.birthDateMax = new Date();
    this.birthDateMax.setFullYear(this.birthDateMax.getFullYear() - 18);
    this.createUserForm.get("canShare")?.setValue("true");
    this.createUserForm.get("canModify")?.setValue("true");
    this.createUserForm.get("employeeFunction")?.setValue("dafaultSelect");


  }
  ngOnDestroy() {

  }
  addUser(): void {
    console.log(this.createUserForm.value);
    if (this.createUserForm.invalid) {
      return;
    }

  }

}
