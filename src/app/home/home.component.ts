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
  imports: [CommonModule, RouterModule, SkillsComponent, AboutComponent, NavbarComponent, ContactComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title: string = 'Welcome to My Portfolio';
  name: string = 'Dikshya Singh Shah';
  role: string = 'Aspiring Full Stack Developer | Programming Student at TEC';
  description: string = `
    Passionate about both frontend and backend development,
    I am committed to creating dynamic, user-friendly applications that solve real-world problems. 
    My journey in programming has equipped me with the skills to blend creativity with technical 
    expertise, enabling me to deliver seamless digital experiences.
  `;
  imageUrl: string = "assets/image_50400513.JPG";
  isContactVisible: boolean = false;  
  constructor(private router: Router) {}

  toggleContact() {
    this.isContactVisible = !this.isContactVisible;
    if (this.isContactVisible) {
      this.router.navigate(['/contact']);
    } else {
      this.router.navigate(['/']); // Navigate back to home
    }
  }
}
