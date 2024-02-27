import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    CommonModule,
    RenduDirective,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AssignmentDetailComponent
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AssignmentsComponent {
  titre = "Voici mon app sur les devoirs";
  assignments: Assignment[] = [
    {
      nom: "Devoir 1",
      dateRendu: new Date("2024-02-15"),
      estRendu: false
    },
    {
      nom: "Devoir 2",
      dateRendu: new Date("2024-02-20"),
      estRendu: false
    },
    {
      nom: "Devoir 3",
      dateRendu: new Date("2024-02-24"),
      estRendu: true
    }
  ];
  nomAssignment: string = "";
  dateRendu = undefined;
assignmentSelectionne: Assignment|undefined;

  onSubmit(event: any) {
    if ((this.nomAssignment == '') || (this.dateRendu === undefined)) return;

    console.log("NOM ASSIGNMENT = " + this.nomAssignment);
    console.log("DATE RENDU = " + this.dateRendu);

    const newAssignment = {
      nom: this.nomAssignment,
      estRendu: false,
      dateRendu: this.dateRendu
    };

    console.log(newAssignment)
    this.assignments.push(newAssignment);
  }

  assignmentClick(assignment: Assignment) {
    console.log("CLICK SUR " + assignment.nom);

    this.assignmentSelectionne = assignment;
  }
}


