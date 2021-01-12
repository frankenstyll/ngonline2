import { CeoData } from './shared/ceodata.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceopoc',
  templateUrl: './ceopoc.component.html',
  styleUrls: ['./ceopoc.component.css']
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

  constructor() {
    this.dataMonth = 0;
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

  ngOnInit() {
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


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
