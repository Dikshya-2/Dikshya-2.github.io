import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  description: string = 'I am an ambitious Datatekniker student with a specialization in programming. My educational background has provided me with a solid foundation in both front-end and back-end technologies, and I thrive in dynamic work environments that challenge my technical skills and creative problem-solving abilities.';

}
