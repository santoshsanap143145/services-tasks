import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
@Input() totalpass !: number
@Input() totalCheckIn !: number
  constructor() { }

  ngOnInit(): void {
  }

}
