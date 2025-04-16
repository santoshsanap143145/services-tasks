import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengerService } from '../services/passenger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PassengerCardComponent } from './passenger-dashboard/passenger-card/passenger-card.component';
import { PassengerCountComponent } from './passenger-dashboard/passenger-count/passenger-count.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCardComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerService
  ],
})
export class PassengersModule {}
