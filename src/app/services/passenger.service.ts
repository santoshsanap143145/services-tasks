import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnackBarService } from './snackbar.service';

@Injectable()
export class PassengerService {
  passengersArr: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];

  constructor(private _snackbar: SnackBarService) {}

  fetchAllPassInfo() {
    return this.passengersArr;
  }

  updatePassenger(updatedPassObj: Ipassenger) {
    let updateIndex = this.passengersArr.findIndex(
      (pass) => pass.id === updatedPassObj.id
    );
    this.passengersArr[updateIndex] = updatedPassObj;
    this._snackbar.notification(
      `The Passenger is updated to ${updatedPassObj.fullname} successfully !!!`
    );
  }

  removePassenger(removePass: Ipassenger) {
    let removeIndex = this.passengersArr.findIndex(
      (pass) => pass.id === removePass.id
    );

    this.passengersArr.splice(removeIndex, 1);
    this._snackbar.notification(
      `The Passenger ${removePass.fullname} is removed successfully !!!`
    );
  }
}
