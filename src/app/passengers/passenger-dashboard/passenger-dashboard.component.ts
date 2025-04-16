import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passArr : Array<Ipassenger> = []
  totalCheckIn !: number
  constructor(private _passService: PassengerService) { }

  ngOnInit(): void {
    this.passArr = this._passService.fetchAllPassInfo()
    this.gettotalCheckIn()
  }


  gettotalCheckIn(){
    this.totalCheckIn = this.passArr.filter(pass => pass.checkedIn).length
  }

 

}
