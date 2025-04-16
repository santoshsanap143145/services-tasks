import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


const matModuleArr = [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...matModuleArr
    ],
    exports: [
        ...matModuleArr
    ]
})
export class MaterialModule{

}