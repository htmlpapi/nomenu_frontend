import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.css']
})
export class TopItemsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() itemsData?: ItemsData [];
  displayedColumns: string[] = ['id', 'itemName', 'itemDescription', 'likes', 'dislikes'];
  dataSource: any;
  topFive?: any;

  ngOnInit()
  {


    this.topFive = this.itemsData?.sort(function(a:any, b:any) {
      return b.likes - a.likes;
    });

    this.topFive = this.topFive.slice(0, 5);

    this.dataSource = new MatTableDataSource<ItemsData>(this.topFive);
    
    this.dataSource.paginator = this.paginator;

    console.log(this.topFive)




  }


  


  
  

}


export interface ItemsData {
  id: number;
  itemName: string;
  itemDescription: string;
  likes: number,
  dislikes: number
}
