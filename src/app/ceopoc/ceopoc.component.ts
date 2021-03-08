
import { CeoData } from './shared/ceodata.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Periodic } from './shared/Periodic.model';
import { SafeHtml, DomSanitizer, SafeUrl, SafeScript } from '@angular/platform-browser';

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

  // dynamic function
  // var functionName = 'myFunction';
  // this[functionName]();

  btnText: SafeHtml;

  tbodyInner = '';
  safeTbody : SafeHtml;

  safeFnc: SafeHtml;

  columnsToDisplay: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 : MatTableDataSource<Periodic>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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



  ELEMENT_DATA: Periodic[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      description: `Helium is a chemical element with symbol He and atomic number 2. It is a
          colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
          group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
          silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
          lightest solid element.`
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
          relatively rare element in the universe, usually occurring as a product of the spallation of
          larger atomic nuclei that have collided with cosmic rays.`
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B',
      description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
          by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
          low-abundance element in the Solar system and in the Earth's crust.`
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
          and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
          to group 14 of the periodic table.`
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
          discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
           the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
           agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
          lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
          conditions.`
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
          Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
          two-thirds the density of air.`
    },
  ];

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
          "grade": "B"
        },
        {
          "name": "Chemistry",
          "type": "Sciene",
          "grade": "A"
        },
        {
          "name": "Physics",
          "type": "Engineer",
          "grade": "C"
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
          "name": "Calculus",
          "type": "Math",
          "grade": "B+"
        },
        {
          "name": "Nuclear Physics",
          "type": "Physics",
          "grade": "C-"
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
 displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'isExpanded'];


  constructor(private domSan: DomSanitizer) {
    this.dataMonth = 0;
    this.safeFnc = this.domSan.bypassSecurityTrustScript('');

    this.btnText = this.domSan.bypassSecurityTrustHtml('<b>click</b>');
  }

  setText(){
    return this.domSan.bypassSecurityTrustHtml('<b>click</b>');
  }
  ngOnInit() {

    this.createTbody();

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

    this.dataSource2 = new MatTableDataSource<Periodic>(this.ELEMENT_DATA);
    this.dataSource2.paginator = this.paginator;

    console.log(this.dataSource2);
  }

  isChild(){
    console.log('is child');
  }
  createTbody(){

    let t = ``;
    this.STUDENTS_DATA.forEach( (obj, index) => {

      let c = ``;
      obj.subjects.forEach( (sub) => {

        c += `<tr>
          <td></td>
          <td>${sub.name}</td>
          <td>${sub.type}</td>
          <td>${sub.grade}</td>
          <td></td>
        </tr>`;
        // "name": "Bio",
        // "type": "Medical",
        // "grade": "A"
      });

      t +=  `<tr>
        <td>
          <button class="btn btn-primary" (click)="call_function()">click</button>
        </td>
        <td>${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.age}</td>
        <td>${obj.address}</td>

      </tr>`;
      if( obj.subjects ){
        t+= c;
      }
    });
    this.tbodyInner = t;
    this.safeTbody = this.domSan.bypassSecurityTrustHtml(this.tbodyInner);
  }

  call_function(){
    console.log('xxxx');
    return this.domSan.bypassSecurityTrustScript('javascript:alert("xx")');
  }

  addMonthData() {
    if (this.dataMonth !== 0) {
      let item1 = this.months.find(i => i.id === this.dataMonth);

      // delete array index by key
      // this.months = this.months.filter(item => item.id !== this.dataMonth);

      // ad column
      this.tableColumns.push(item1.name);

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
