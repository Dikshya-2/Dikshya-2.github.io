import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from "../about/about.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from "../contact/contact.component";
import { ProjectComponent } from "../project/project.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title = 'Welcome to My Portfolio';
  name = 'Dikshya Singh Shah';
  role = 'Junior Full Stack Developer';
  description = `
    I am a passionate Full-Stack Developer with experience in both frontend and backend technologies.
    I specialize in building dynamic, secure, and user-friendly web and mobile applications using Angular,
    .NET, and Java for Android. With a background in Public Health (Biostatistics & Epidemiology),
    I bring strong analytical and problem-solving skills to software development.

    I have developed full-stack applications with secure authentication, Two-Factor Authentication (2FA),
    and Agile-based project management. I am eager to contribute to real-world projects, collaborate with
    experienced teams, and continue growing as a professional developer.
  `;
  imageUrl = './assets/dikskya_id21_01.JPG';

  navigateToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

