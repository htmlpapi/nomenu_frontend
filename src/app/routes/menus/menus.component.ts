import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){ }

  ngOnInit(): void {

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<any>('http://localhost:3000/menu/store-data', { headers }).subscribe( data => 
    {

      if(data.status == 'ok')
      {
        this.menuData = data.data
        this.imageUrl = data.data[0].fileUrl;
        this.restaurant.patchValue({
          restaurantName: data.data[0].restaurantName,
          menuUrl: data.data[0].menuUrl
        });

        console.log('menu',this.menuData)
      }
    })

    this.http.get<any>('http://localhost:3000/menu/get-items', { headers }).subscribe( data => 
    {
      if(data.status == 'ok')
      {
        this.itemsData = data.data

        this.dataSource = new MatTableDataSource<ItemsData>(this.itemsData);

        this.dataSource.paginator = this.paginator;

        console.log('items',this.itemsData)
      }
    })

  }

  menuData?: MenuData;
  itemsData?: ItemsData [];
  uploadedImage: any;
  settingsOptions: string = 'store';
  imageUrl?: string;
  dataSource: any;

  restaurant = this.formBuilder.group(
    {
      restaurantName: ['',Validators.required],
      menuUrl: ['', Validators.required],
      file: ['']
    }
  )

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  handleSettingStore(): void
  {
    this.settingsOptions = 'store';
  }

  handleSettingMenu(): void
  {
    this.settingsOptions = 'menu'
  }

  public openInput(): void
  {
    this.fileInput.nativeElement.click();
  }

  displayedColumns: string[] = ['id', 'itemName', 'itemDescription', 'likes', 'dislikes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  onImageUpload(event:any): void{
    this.uploadedImage = event.target.files[0];
    this.imageUrl = URL.createObjectURL(event.target.files[0])
  }


  onSubmit(): void
  {
    if (this.restaurant.invalid) {
      return;
    }

    const formData = new FormData();

    const restaurantName = this.restaurant.value.restaurantName;
    if (restaurantName) {
      formData.append('restaurantName', restaurantName);
    }

    const menuUrl = this.restaurant.value.menuUrl;
    if (menuUrl) {
      formData.append('menuUrl', menuUrl);
    }

    if (this.uploadedImage) {
      formData.append('file', this.uploadedImage);
    }

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    if(this.menuData)
    {
      const menuData = Object.keys(this.menuData);

      if(menuData.length == 0)
      {

        this.http.post<any>('http://localhost:3000/menu/store', formData, { headers }).subscribe( data => 
          {
            console.log(data)
            if(data.status == 'ok')
            {
              return(data)
            }
          }
        );
      }

      else
      {
        this.http.put<any>('http://localhost:3000/menu/store', formData, { headers }).subscribe( data => 
        {
          console.log(data)
          if(data.status == 'ok')
          {
            return(data)
          }
        }
      );
      }

    }


  }
}

export interface ItemsData {
  id: number;
  itemName: string;
  itemDescription: string;
  likes: number,
  dislikes: number
}

interface MenuData {
  fileUrl: string;
  menuUrl: string;
  restaurantName: string,
  id: number
}

