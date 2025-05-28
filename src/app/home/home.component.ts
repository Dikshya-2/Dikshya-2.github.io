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
  role = 'Aspiring Full Stack Developer | Programming Student at TEC';
  description = `Passionate about both frontend and backend development,
    I am committed to creating dynamic, user-friendly applications that solve real-world problems.
    My journey in programming has equipped me with the skills to blend creativity with technical
    expertise, enabling me to deliver seamless digital experiences.`;
  imageUrl = 'assets/image_50400513.JPG';

  navigateToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

