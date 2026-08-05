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
        { name: 'Angular', icon: '../assets/download.png' },
        { name: 'TypeScript', icon: '../assets/Typescript.png' },
        { name: 'JavaScript', icon: '../assets/JavaScript-logo.png' },
        { name: 'HTML5', icon: '../assets/HTML.jpg' },
        { name: 'CSS3', icon: '../assets/Logo.jpg' },
        { name: 'Bootstrap', icon: '../assets/bootstrap.png' },
        { name: 'Tailwind CSS', icon: '../assets/OIP.jpeg' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'ASP.NET Core', icon: '../assets/NET.jpg' },
        { name: 'C#', icon: '../assets/Csharp.png' },
        { name: 'PHP', icon: '../assets/images.png' },
        { name: 'Python', icon: '../assets/python.svg' },
        { name: 'REST APIs', icon: '../assets/API.jpeg' },
        { name: 'Dependency Injection', icon: '../assets/DI.jpeg' }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Java', icon: '../assets/Java.png' },
        { name: 'React Native', icon: '../assets/RN.jpeg' }

      ]
    },
    {
      title: 'Security',
      skills: [
        { name: 'ASP.NET Identity', icon: '../assets/mysql.jpg' },
        { name: 'JWT Authentication', icon: '../assets/AJWT.jpeg' },
        { name: 'Two-Factor Authentication (2FA)', icon: '../assets/2fa.jpeg' },
        { name: 'Role-Based Access Control (RBAC)', icon: '../assets/Role-Based Authorization.jpeg' }
      ]
    },
    {
      title: 'Database & Data Access',
      skills: [
        { name: 'Microsoft SQL Server (MSSQL)', icon: '../assets/ms-sql.jpg' },
        { name: 'MySQL', icon: '../assets/mysql.jpg' },
        { name: 'SQLite', icon: '../assets/Sqlite.jpg' },
        // { name: 'MariaDB', icon: '../assets/mariadb.png' },
        { name: 'Entity Framework Core', icon: '../assets/Entity Framework Core.jpeg' },
        { name: 'H2 Database', icon: '../assets/H2 Database.jpeg' }
      ]
    },

    {
      title: 'Testing & DevOps',
      skills: [
        { name: 'xUnit Testing (In-Memory, Moq)', icon: '../assets/Unit Testing.jpeg' },
        { name: 'Git & GitHub', icon: '../assets/git.jpeg' },
        { name: 'GitHub Actions (CI/CD)', icon: '../assets/githubAction.jpeg' },
        { name: 'Docker', icon: '../assets/Docker.jpeg' },
        { name: 'Linux', icon: '../assets/Linux.jpeg' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Visual Studio', icon: '../assets/VS.jpeg' },
        { name: 'Visual Studio Code', icon: '../assets/VSC.jpeg' },
        { name: 'Android Studio', icon: '../assets/Android Studio.jpeg' },
        { name: 'IntelliJ IDEA', icon: '../assets/IntelliJ IDEA.jpeg' },
        { name: 'Postman', icon: '../assets/postman.png' },
        { name: 'Swagger', icon: '../assets/swagger-logo-horizontal.jpeg' },
        { name: 'Chrome DevTools', icon: '../assets/DevTools.jpeg' }
      ]
      },
    {
      title: 'Others',
      skills: [
        { name: 'SPSS', icon: '../assets/spss.png' },
        { name: 'IoT', icon: '../assets/IoT.png' },
        { name: 'Cisco', icon: '../assets/cisco.png' }
      ]
    }
  ];
}


