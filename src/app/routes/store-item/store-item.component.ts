import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})


export class StoreItemComponent implements OnInit{

  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router){}

  ngOnInit(): void {

    const menuUrl = this.route.snapshot.paramMap.get('storeUrl')
    const itemId = this.route.snapshot.paramMap.get('itemId')
    console.log(menuUrl, itemId)

    const headers = { 'Content-Type': 'application/json'};

    const body = {
      itemId: itemId,
      menuUrl: menuUrl,
    };

    this.http.post<any>('http://localhost:3000/stores/items', body, { headers }).subscribe(data => {
      console.log(data)

      this.itemData = data.data;

      if(this.itemData)
      {
        const menuData = Object.keys(this.itemData);
  
        if(menuData.length == 0)
        {
          this.router.navigate(['/not-found']);
        }
        else
        {
          this.itemName = data.data[0].itemName;
          this.itemDescription = data.data[0].itemDescription;
          this.fileUrl = data.data[0].fileUrl
        }
      }

  });

  }

  public itemData?: any;
  public itemName?: string;
  public itemDescription?: string;
  public fileUrl?: string;

}
