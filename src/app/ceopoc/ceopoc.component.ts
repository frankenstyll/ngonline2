import { CeoData } from './shared/ceodata.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ceopoc',
  templateUrl: './ceopoc.component.html',
  styleUrls: ['./ceopoc.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CeopocComponent implements OnInit {

  dataSource: CeoData[];
  tableColumns?: string[] = ['policyNumber', 'creationDate' , 'expireDate' , 'policyAmount' , 'clientId' , 'employeeId'] ;
  dataMonth: number;
  months = [
    {id: 1, name: 'Jan'},
    {id: 2, name: 'Feb'},
    {id: 3, name: 'Mar'},
    {id: 4, name: 'Apr'},
    {id: 5, name: 'May'},
    {id: 6, name: 'Jun'},
    {id: 7, name: 'Jul'},
    {id: 8, name: 'Aug'},
    {id: 9, name: 'Sep'},
    {id: 10, name: 'Oct'},
    {id: 11, name: 'Nov'},
    {id: 12, name: 'Dec'}
  ];

  isTableExpanded = false;

  STUDENTS_DATA = [
    {
      "id": 1,
      "name": "Abby Jaskolski ",
      "age": 21,
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": "Bio",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Chemistry",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Physics",
          "type": "Medical",
          "grade": "A"
        }
      ]
    },
    {
      "id": 2,
      "name": "Jabari Fritsch",
      "age": 20,
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": "Bio",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Chemistry",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Physics",
          "type": "Medical",
          "grade": "A"
        }
      ]
    },
    {
      "id": 3,
      "name": "Maybell Simonis",
      "age": 21,
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": "Bio",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Chemistry",
          "type": "Medical",
          "grade": "A"
        },
        {
          "name": "Physics",
          "type": "Medical",
          "grade": "A"
        }
      ]
    }
  ];

 dataStudentsList = new MatTableDataSource();
 displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];

  constructor() {
    this.dataMonth = 0;
  }

  ngOnInit() {

    this.dataStudentsList.data = this.STUDENTS_DATA;

    let ob = {} as CeoData;
    for (let i = 0; i < 5; i++) {
      ob.policyNumber = ''+i+i;
      ob.creationDate='1122212' + i;
      ob.expireDate='1122212' + i;
      ob.policyAmount = 1122212 + i;
      ob.clientId='1122212' + i;
      ob.employeeId = '1122212' + i;
      if (undefined === this.dataSource) {
        this.dataSource = [];
      }
      this.dataSource.push(ob);
    }
  }

  addMonthData() {
    if (this.dataMonth !== 0) {
      let item1 = this.months.find(i => i.id === this.dataMonth);

      // delete array index by key
      // this.months = this.months.filter(item => item.id !== this.dataMonth);

      // ad column
      // this.tableColumns.push(item1.name);

      // ad data
      let ob = {} as CeoData;
      for (let i = 0; i < 5; i++) {
        ob.policyNumber = ''+i+i;
        ob.creationDate='1122212' + i;
        ob.expireDate='1122212' + i;
        ob.policyAmount = 1122212 + i;
        ob.clientId='1122212' + i;
        ob.employeeId = '1122212' + i;
      }
      if (undefined === this.dataSource) {
        this.dataSource = [];
      }
      this.dataSource.push(ob);

    }
    this.dataMonth = 0;

  }

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }



  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
