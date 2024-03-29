import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RenduDirective } from "../shared/rendu.directive";
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from "./add-assignment/add-assignment.component";

@Component({
  selector: 'app-assignments',
  standalone: true,
    providers: [],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
    imports: [CommonModule, MatButtonModule, MatListModule, RenduDirective, AssignmentDetailComponent,
      AddAssignmentComponent]
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments';
  formVisible=false;

  // Mémorisation de l'assignment cliqué
  assignmentSelectionne:Assignment | undefined;


  assignments: Assignment[] = [
    {
      nom:"Devoir Angular de Michel Buffa",
      dateRendu: new Date("2024-02-15"),
      estRendu:false
    },
    {
      nom:"Devoir SQL3 de Serge Miranda",
      dateRendu: new Date("2024-01-15"),
      estRendu:true
    },
    {
      nom:"Devoir BD de Mr Gabriel Mopolo",
      dateRendu: new Date("2024-03-01"),
      estRendu:false
    }
  ];

  getColor(a:any) {
    return a.estRendu ? 'green' : 'red';
  }

  ngOnInit() {
    // appelée une seule fois à la création du composant
    // on active le bouton au bout de 3 secondes
    /*
    setTimeout(() => {
      this.boutonActive=true;
    }, 3000);
    */
  }


  assignmentClicke(a:Assignment) {
    console.log("Assignment cliqué: " + a.nom);

    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  ajouteAssignement(event:Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }

  onDeleteAssignment() {
    if (this.assignmentSelectionne) {
      let pos = this.assignments.indexOf(this.assignmentSelectionne);
      this.assignments.splice(pos, 1);
      this.assignmentSelectionne = undefined;
    }
  }
}
