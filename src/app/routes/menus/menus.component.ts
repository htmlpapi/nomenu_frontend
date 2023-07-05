import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
export class MenusComponent implements AfterViewInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){ }

  uploadedImage: any;
  settingsOptions: string = 'store';
  imageUrl: string = 'https://static.thenounproject.com/png/3674271-200.png';

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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

    this.http.post<any>('http://localhost:3000/menu/store', formData, { headers }).subscribe( data => 
    {
      console.log(data)
      if(data.status == 'ok')
      {

      }
    }
    );


    const file = this.restaurant.value.file;
    console.log(file)

  

  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

