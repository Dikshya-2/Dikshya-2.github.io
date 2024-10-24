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
    I am a 33-year-old programming student at TEC with experience in both web and mobile application development.
    I have developed mobile applications using Java in Android Studio and created web applications using .NET for the backend 
    and Angular for the frontend. With a bachelor's degree in public health focused on biostatistics and epidemiology, I bring strong analytical skills 
    to my programming journey. I am ambitious and passionate about technology, programming, and problem-solving, 
    always seeking to create dynamic, user-friendly applications that address real-world challenges.
  `;
  imageUrl: string = "assets/image_50400513.JPG";
  // socialLinks = [
  //   { name: 'GitHub', url: 'https://github.com/Dikshya-2', icon: 'bi bi-github' },
  //   { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dikshya-singh-shah-72b46391/', icon: 'bi bi-linkedin' },
  //   { name: 'Portfolio', url: 'https://example.com/', icon: 'fas fa-user' } 
  // ];
}
