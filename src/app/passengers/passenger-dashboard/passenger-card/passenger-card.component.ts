import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent implements OnInit {
  @Input() passObj!: Ipassenger;

  editMode: boolean = false;

  @Output() emitRemoveFlag : EventEmitter<void> = new EventEmitter<void>()
  constructor(private _passService: PassengerService) {}

  ngOnInit(): void {}

  updateOnClick(updatedName: string) {
    if (this.editMode) {
      let updatedPassenger: Ipassenger = {
        ...this.passObj,
        fullname: updatedName,
      };
      console.log(updatedPassenger);

      this._passService.updatePassenger(updatedPassenger);
    }
    this.editMode = !this.editMode;
  }

  removeOnClick(){
    let confirm = window.confirm(`Are you sure, you want to remove the Passenger?`)

    if(confirm){
      this._passService.removePassenger(this.passObj)
      this.emitRemoveFlag.emit()
    }
  }
}
