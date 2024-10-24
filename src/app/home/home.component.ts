import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SkillsComponent],
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
  // socialLinks = [
  //   { name: 'GitHub', url: 'https://github.com/Dikshya-2', icon: 'bi bi-github' },
  //   { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dikshya-singh-shah-72b46391/', icon: 'bi bi-linkedin' },
  //   { name: 'Portfolio', url: 'https://example.com/', icon: 'fas fa-user' } 
  // ];
}
