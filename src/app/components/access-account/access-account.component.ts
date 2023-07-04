import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ilogin';
import { IResponse } from 'src/app/models/iresponse';

@Component({
  selector: 'app-access-account',
  templateUrl: './access-account.component.html',
  styleUrls: ['./access-account.component.css']
})
export class AccessAccountComponent {
  
  formLogin = this.formBuilder.group(
    {
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
  )

  constructor(private formBuilder: FormBuilder, private http: HttpClient){ }

  onSubmit(): void {
    if(this.formLogin.invalid)
    {
      return
    }

    const payload = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };

    this.http.post<IResponse>('endpoint', payload).subscribe(
      response =>
      {
        
      }
    )
  }


}
