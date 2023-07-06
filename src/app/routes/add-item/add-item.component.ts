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

    uploadedImage?: File;
    imageUrl?: string;

    menuItems = this.formBuilder.group(
      {
        itemName: ['',Validators.required],
        itemDescription: ['', Validators.required],
        file: ['']
      }
    )

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  openInput(): void
  {
    this.fileInput.nativeElement.click();
  }

  onImageUpload(event:any)
  {
    this.uploadedImage = event.target.files[0];
    this.imageUrl = URL.createObjectURL(event.target.files[0])
  }

  onSubmit()
  {
    if (this.menuItems.invalid) {
      return;
    }

    
    const formData = new FormData();

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const itemName = this.menuItems.value.itemName;
    if (itemName) {
      formData.append('itemName', itemName);
    }

    const itemDescription = this.menuItems.value.itemDescription;
    if (itemDescription) {
      formData.append('itemDescription', itemDescription);
    }

    if (this.uploadedImage) {
      formData.append('file', this.uploadedImage);
    }

    this.http.post<any>('http://localhost:3000/menu/add-item', formData, { headers }).subscribe( data => 
    {
      console.log(data)
      if(data.status == 'ok')
      {

      }
    }
    );

  }
}
