import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
      
  }

  checkEmail (controlNameA: string, controlNameB: string) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const formGroup = control as FormGroup;

        const controlA = formGroup.get(controlNameA);
        const controlB = formGroup.get(controlNameB);
    
        const valueA = controlA?.value;
        const valueB = controlB?.value;

        if(valueA === valueB)
        {
          controlA?.setErrors(null);
          return null
        }else
        {
          controlA?.setErrors({ valueDoNotMatch: true });
          return { valueDoNotMatch: true}
        }
      } 

    }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }


  public createAccount: FormGroup = this.formBuilder.group(
    {
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      confirmEmail: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [this.checkEmail('confirmEmail', 'email'), this.checkEmail('confirmPassword', 'password')]
    }
  );

  // this.createAccount.setValidators([checkEmail])


  public showPassword: boolean = false;

  handleShowPassword(): void
  {
    this.showPassword = !this.showPassword
  }


  onSubmit()
  {
    if (this.createAccount.invalid) {
      return;
    }

    const payload = {
      name: this.createAccount.value.name,
      email: this.createAccount.value.email,
      password: this.createAccount.value.password
    };
  
    const headers = { 'Content-Type': 'application/json'};
    const body = payload;
    this.http.post<any>('http://localhost:3000/auth/register', body, { headers }).subscribe(data => {
        console.log(data)
        if(data.status == 'ok')
        {
          this.router.navigate(['/']);
          this.openSnackBar(data.message,'close')
        }

        if(data.status == 'error')
        {
          this.openSnackBar(data.message,'close')
        }
    });
  }

}
