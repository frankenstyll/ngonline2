import { CeoData } from './shared/ceodata.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceopoc',
  templateUrl: './ceopoc.component.html',
  styleUrls: ['./ceopoc.component.css']
})
export class CeopocComponent implements OnInit {

  dataSource: CeoData[];
  tableColumns: string[] = ['policyNumber', 'creationDate', 'expireDate', 'policyAmount', 'clientId', 'employeeId'];

  // 

  constructor() { }

  ngOnInit() {

    this.dataSource = [
      {
        policyNumber: '123456',
        creationDate: '12/10/2016',
        expireDate: '20/01/2021',
        policyAmount: '2500',
        clientId: '1155462222',
        employeeId: '670002',
      },
      {
        policyNumber: '123sa',
        creationDate: '12/10/2033',
        expireDate: '20/01/2089',
        policyAmount: '28500',
        clientId: null,
        employeeId: '5556',
      }
    ];
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
