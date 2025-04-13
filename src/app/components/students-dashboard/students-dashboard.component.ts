import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/models/std';

@Component({
  selector: 'app-students-dashboard',
  templateUrl: './students-dashboard.component.html',
  styleUrls: ['./students-dashboard.component.scss']
})
export class StudentsDashboardComponent implements OnInit {

  editStd !: Istd
  constructor() { }

  ngOnInit(): void {
  }

  editObj(editObj: Istd){
    this.editStd = editObj
  }

}
