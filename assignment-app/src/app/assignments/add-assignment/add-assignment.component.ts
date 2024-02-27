import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css',
})
export class AddAssignmentComponent {
  @Output()
  nouvelAssignment = new EventEmitter<Assignment>();

  // champs du formulaire
  nomAssignment = '';
  dateRendu = undefined;

  onSubmit(event: any) {
    if((this.nomAssignment == '') || (this.dateRendu === undefined)) return;

    // on crée un nouvel assignment
    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateRendu = this.dateRendu;
    nouvelAssignment.estRendu = false;

    // on le rajoute au tableau des assignments
    //this.assignments.push(nouvelAssignment);
    this.nouvelAssignment.emit(nouvelAssignment);
  }

}
