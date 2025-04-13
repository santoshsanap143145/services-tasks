import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/models/std';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm!: NgForm;

  @Input() stdToBeEdit!: Istd;
  editMode: boolean = false;
  constructor(
    private _uuidService: UuidService,
    private _stdService: StudentService
  ) {}

  ngOnInit(): void {}

  submitOnClick() {
    if (this.stdForm.valid) {
      let newStd = this.stdForm.value;
      newStd.stdId = this._uuidService.uuid();
      this.stdForm.resetForm();
      this._stdService.createNewStd(newStd);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stdToBeEdit']) {
      setTimeout(() => {
        if (this.stdForm && this.stdToBeEdit) {
          this.stdForm.setValue({
            fname: this.stdToBeEdit.fname,
            lname: this.stdToBeEdit.lname,
            email: this.stdToBeEdit.email,
            contact: this.stdToBeEdit.contact,
          });
          this.editMode = true;
        }
      }, 50);
    }
  }

  updateOnClick() {
    let updatedStd: Istd = this.stdForm.value;
    updatedStd.stdId = this.stdToBeEdit.stdId;
    this._stdService.updateStd(updatedStd)
    this.editMode = false
    this.stdForm.resetForm()
  }
}
