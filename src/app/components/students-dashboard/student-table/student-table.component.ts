import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/models/std';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  stdArr : Array<Istd> = []

  @Output() emitEditStd : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor(private _stdService: StudentService) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStds()
  }

  editOnClick(editStd: Istd){
    this.emitEditStd.emit(editStd)
  }

  removeOnClick(stdId: string){
    let confirmed = window.confirm(`Are you sure, you want to delete this Todo?`)
    if(confirmed){
      this._stdService.removeStd(stdId)
    }
  }

}
