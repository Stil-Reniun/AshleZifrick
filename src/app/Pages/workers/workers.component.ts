import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormField, MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit, AfterViewInit {
  workesData: any[] = [];
  displayedColumns: string[] = ['#','fullName', 'typeDocument', 'numberDocument', 'birthDate', 'entryDate', 'edit', 'delete', 'viewChildren'];
  dataSourceWorkers = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    (
      (data: any[]) => {
        this.workesData = data;
        this.dataSourceWorkers.data = this.workesData;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSourceWorkers.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceWorkers.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'DialogComponent',
  templateUrl: '../dialog/dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule, MatIconModule ],
})
export class DialogElementsExampleDialog {}