import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = "Voici mon app sur les devoirs";
  assignments = [
    {
      nom: "Devoir 1",
      dateRendu: "2024-02-15",
      estRendu: false
    },
    {
      nom: "Devoir 2",
      dateRendu: "2024-02-20",
      estRendu: false
    },
    {
      nom: "Devoir 3",
      dateRendu: "2024-02-24",
      estRendu: true
    }
  ]
}
