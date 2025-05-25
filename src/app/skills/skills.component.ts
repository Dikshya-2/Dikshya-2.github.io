import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../Models/skill';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: '../assets/HTML.jpg' },
        { name: 'CSS', icon: '../assets/Logo.jpg' },
        { name: 'JavaScript', icon: '../assets/JavaScript-logo.png' },
        { name: 'TypeScript', icon: '../assets/Typescript.png' },
        { name: 'Angular', icon: '../assets/download.png' },
        { name: 'Bootstrap', icon: '../assets/bootstrap.png' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: '.NET', icon: '../assets/NET.jpg' },
        { name: 'C#', icon: '../assets/Csharp.png' },
        { name: 'PHP', icon: '../assets/images.png' },
        { name: 'Python', icon: '../assets/python.svg' }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Java', icon: '../assets/Java.png' }
        // Add Android if needed
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: '../assets/mysql.jpg' },
        { name: 'MS-SQL', icon: '../assets/ms-sql.jpg' },
        { name: 'SQLite', icon: '../assets/Sqlite.jpg' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Postman', icon: '../assets/postman.png' },
        { name: 'Swagger', icon: '../assets/swagger-logo-horizontal.jpeg' },
        { name: 'SPSS', icon: '../assets/spss.png' },
        { name: 'IoT', icon: '../assets/IoT.png' },
        { name: 'Cisco', icon: '../assets/cisco.png' }
      ]
    }
  ];
}
