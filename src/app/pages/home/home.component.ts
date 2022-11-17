import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Response } from '../../model/response.interface';
import { Work } from '../../model/work.interface';

import { CrossrefService } from '../../services/crossref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'publisher', 'source', 'type', 'title' ];
  dataSource: MatTableDataSource<Work[]> = new MatTableDataSource<Work[]>();
  loading: boolean = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  query: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _crossrefService: CrossrefService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }


  loadData() {
    this.loading = true;
    this.dataSource = new MatTableDataSource<Work[]>([]);

    this._crossrefService.getWorks(
      this.pageSize * this.currentPage, 
      this.pageSize,
      this.query
    ).subscribe((result: Response<Work[]>) => {
      this.paginator.pageIndex = this.currentPage;
      this.paginator.length = result.message['total-results'];

      this.dataSource = new MatTableDataSource<Work[]>(result.message.items);
      
      this.loading = false;
    })
  }
}
