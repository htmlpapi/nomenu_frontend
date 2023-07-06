import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit{

  constructor(private http:HttpClient, private formBuilder: FormBuilder, private router: Router, private route:ActivatedRoute){}

  uploadedImage?: File;
  imageUrl?: string;
  itemName?: string;
  itemDescription?: string;
  itemId?: string | null;
  fileUrl?: string;
  itemData?: string;


  ngOnInit(): void {

    this.itemId = this.route.snapshot.paramMap.get('itemId')
    
    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const body = 
    {
      itemId: this.itemId
    }

    this.http.post<any>('http://localhost:3000/menu/get-item', body, { headers }).subscribe( data =>
    {
      console.log(data)

        this.itemData = data.data;
  
        if(data.data.length == 0)
        {
          this.router.navigate(['/not-found']);
        }
        else
        {
          this.itemName = data.data[0].itemName;
          this.itemDescription = data.data[0].itemDescription;
          this.imageUrl = data.data[0].fileUrl

          this.menuItem.patchValue({
            itemName: this.itemName,
            itemDescription: this.itemDescription
          });
        }
      
    })

  }


  menuItem = this.formBuilder.group(
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
    this.uploadedImage = event.target.files[0]
    this.imageUrl = URL.createObjectURL(event.target.files[0])
  }

  onDelete()
  {
    if (this.menuItem.invalid) {
      return;
    }

    const formData = new FormData();

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.delete<any>(`http://localhost:3000/menu/item/${this.itemId}`, { headers }).subscribe( data => 
    {
      console.log(data)
      if(data.status == 'ok')
      {

      }
    }
    );
  }

  onSubmit()
  {
    if (this.menuItem.invalid) {
      return;
    }

    const formData = new FormData();

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const itemName = this.menuItem.value.itemName;
    console.log('esto es item name:', itemName)

    if (itemName) {
      formData.append('itemName', itemName);
    }

    const itemId = this.itemId;

    if (itemId) {
      formData.append('itemId', itemId);
    }

    const itemDescription = this.menuItem.value.itemDescription;
    if (itemDescription) {
      formData.append('itemDescription', itemDescription);
    }

    if (this.uploadedImage) {
      formData.append('file', this.uploadedImage);
    }

    this.http.put<any>('http://localhost:3000/menu/item', formData, { headers }).subscribe( data => 
    {
      console.log(data)
      if(data.status == 'ok')
      {

      }
    }
    );

  }

}
