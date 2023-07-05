import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

    constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){ }

    formLogin = this.formBuilder.group(
    {
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
  )

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  openInput(): void
  {
    this.fileInput.nativeElement.click();
  }

}
