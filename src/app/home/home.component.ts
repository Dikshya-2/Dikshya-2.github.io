import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = 'Hi,';
  name = 'I\'m Dikshya';
  role = 'Junior Full-Stack Developer';
  description = `
I build secure, user-friendly web and mobile applications using Angular, ASP.NET Core, SQL, and Java.
With a background in Public Health and Biostatistics, I bring analytical thinking and problem-solving skills into software development. I enjoy creating practical solutions, learning new technologies, and growing as a developer.

  `;
  imageUrl = './assets/dikskya_id21_01.JPG';

  navigateToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

