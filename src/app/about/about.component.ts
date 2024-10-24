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

  description: string = `
  I am a 33-year-old programming student at TEC with experience in both web and mobile application development.
  I have developed mobile applications using Java in Android Studio and created web applications using .NET for the backend 
  and Angular for the frontend. With a bachelor's degree in public health focused on biostatistics and epidemiology, I bring strong analytical skills 
  to my programming journey. I am ambitious and passionate about technology, programming, and problem-solving, 
  always seeking to create dynamic, user-friendly applications that address real-world challenges.
`;

  // 'I am an ambitious Datatekniker student with a specialization in programming. My educational background has provided me with a solid foundation in both front-end and back-end technologies, and I thrive in dynamic work environments that challenge my technical skills and creative problem-solving abilities.';

}
