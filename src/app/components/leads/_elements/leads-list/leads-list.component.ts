/*
ANTERA: LEADS - REPLICA
Author: 'eberry@anterasoftware.com'
This code is brought to you by Elwood Berry @ anterasoftware.com  
*/
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

/*
INTERFACE
*/
export interface LeadElement {
  position: number;
  name: string;
  title: string;
  referredBy: string;
  accountName: string;
  officePhone: string;
  email: string;
  salesRep: string;
  dateCreated: string;
  createdBy: string;
}

/*
SAMPLE DATA
*/
const ELEMENT_DATA: LeadElement[] = [
  {
    position: 1,
    name: 'Daenerys Targaryen', // Do we want to seperate??
    title: 'Accountant',
    referredBy: 'John Doe',
    accountName: 'Targaryen Inc',
    officePhone: '+1 (907) 200-6326',
    email: 'tormund.giantsbane@domainname.com',
    salesRep: 'Jane Doe',
    dateCreated: '2021-07-20',
    createdBy: 'Antera Support'
  }
];

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class LeadsListComponent implements OnInit {
  // PROPERTIES
  public displayedColumns: string[] = [
    'position',
    'name',
    'title',
    'referredBy',
    'accountName',
    'officePhone',
    'email',
    'salesRep',
    'dateCreated',
    'createdBy'
  ];

  public dataSource = new MatTableDataSource<LeadElement>(ELEMENT_DATA);
  selection = new SelectionModel<LeadElement>(true, []);

  ngOnInit() {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: LeadElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }
}
