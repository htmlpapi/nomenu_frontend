import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private http: HttpClient){ }

  totalLikes?: number;
  totalDislikes?: number;
  itemsData?: ItemsData [];


  ngOnInit(): void {

    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<any>('http://localhost:3000/menu/get-items', { headers }).subscribe( data => 
    {
      if(data.status == 'ok')
      {

        console.log(data.data)
        this.itemsData = data.data

      }
    })

    this.http.get<any>('http://localhost:3000/menu/total-likes', { headers }).subscribe( data => 
    {
      if(data.status == 'ok')
      {
        console.log(data.data)

        this.totalLikes = data.data.totalLikes
        this.totalDislikes = data.data.totalDislikes
      }
    })

  }
}

export interface ItemsData {
  id: number;
  itemName: string;
  itemDescription: string;
  likes: number,
  dislikes: number
}
