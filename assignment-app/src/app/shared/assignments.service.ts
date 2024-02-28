import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
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
  constructor(private logService:LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    this.logService.log(assignment.nom, "ajouté");
    return of("Assignment ajouté avec succès");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
   // l'assignent passÃ© en paramÃ¨tre est le mÃªme objet que dans le tableau
   // plus tard on verra comment faire avec une base de donnÃ©es
   // il faudra faire une requÃªte HTTP pour envoyer l'objet modifiÃ©
   this.logService.log(assignment.nom, "modifié");
    return of("Assignment modifié avec succès");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    // on va supprimer l'assignment dans le tableau
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    this.logService.log(assignment.nom, "supprimé");
    return of("Assignment supprimé avec succès");
  }
}