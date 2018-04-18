import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  totalCount: number;
  pageSize: 10;
  pageIndex: 0;
  constructor() { }

  ngOnInit() {
  }

  page(pageNumber: number){

  }
}
