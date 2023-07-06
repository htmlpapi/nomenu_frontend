import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router){}

  ngOnInit(): void {

    const menuUrl = this.route.snapshot.paramMap.get('storeUrl')
    console.log(menuUrl)

    const headers = { 'Content-Type': 'application/json'};

    const body = {
      menuUrl: menuUrl,
    };
  

    this.http.post<any>('http://localhost:3000/stores/data', body, { headers }).subscribe(data => {
        console.log(data)

        this.menuData = data.data;

        if(this.menuData)
        {
          const menuData = Object.keys(this.menuData);
    
          if(menuData.length == 0)
          {
            this.router.navigate(['/not-found']);
          }
          else
          {

           this.topFive = this.menuData.sort(function(a:any, b:any) {
              return b.likes - a.likes;
            });

            this.topFive = this.topFive.slice(0, 5);

            this.restaurantName = data.data[0].restaurantName
            this.storeUrl = data.data[0].storeUrl
            
          }
        }

    });

  }

  public menuData?: any;
  public topFive?: any;
  public restaurantName?: string;
  public storeUrl?: string;

}

interface MenuData 
{
  [index:number]:
{
  fileUrl: string,
  itemName: string,
  itemDescription: string,
  menuUrl: string
  id: number,
  itemId: number,
  likes: number,
  dislikes: number
}
}
