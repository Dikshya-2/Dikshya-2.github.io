import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Project } from '../Models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projects: Project[] = [
    {
      title: 'Dixen – Event Management Discovery & System',
      description: ` Dixen is a secure event management platform that allows users to discover, book, rating,
        commentand share events. It features user registration with email confirmation and 2FA, role-based access control for admins,
        hosts, and end users, event proposals and approvals, social media sharing, and real-time booking management.
        The system ensures secure authentication, session management, and data integrity.`,

      link: 'https://github.com/Dikshya-2/Dixen',
      image: '/assets/home.png',
      role: 'Full Stack Developer',
      technologies: ['Angular', 'ASP.NET Core Web API', 'Tailwind CSS', 'MSSQL', 'SMTP', 'Google Authenticator'],
      features: [
        'Role-based access (Admin, Organizer, Attendee)',
        'Angular services using generic architecture',
        'JWT authentication and guards',
        'Responsive UI with Angular Material',
        'QR code 2FA login flow'
      ]
    },
    {
      title: 'MFA Login With Hashing',
       description: 'A secure Blazor-based login system using password, Google Authenticator, and CPR verification before showing a personalized To-Do List.',
      link: 'https://github.com/Dikshya-2/BlazorAppWithHashing',
      image: '/assets/login.jpg'
    },
    {
      title: 'Mobile App In Java',
      description: 'A full-stack food ordering app using Java for the backend IntelliJ IDEA and Android for the frontend, with H2 as the database.',
      link: 'https://github.com/Dikshya-2/webshop',
      image: '/assets/Food.jpg'
    },
    {
      title: 'Movie Web App',
      description: 'A web application for browsing, booking, and managing movies with CRUD support for admins.',
      link: 'https://github.com/Dikshya-2/H3-Projekt-Biograf',
      image:  '/assets/Movie.PNG'
    },
    {
      title: 'First Arduino Projects',
       description: 'A collection of Arduino-based microcontroller projects involving sensors and automation.',
      link: '/assets/ARDUINOProjekt.pdf',
      image:  '/assets/audrino.PNG'
    },
    {
      title: 'Arduino Projects at school',
       description: 'A collection of Arduino-based microcontroller projects involving sensors and automation.',
      link: 'https://github.com/Dikshya-2/Arudino',
      image:  '/assets/aud.png'

    },

    {
      title: 'Studieteknik',
      description: 'A project focused on study techniques.',
      link: 'https://github.com/Dikshya-2/Studieteknik/wiki',
      image:  '/assets/st.png'
    },
    {
      title: 'Webshop 2',
      description: 'An e-commerce platform for managing product inventory, user shopping experience, and payment workflow.',
      link: 'https://github.com/H1-H3-Programmering/project002-matthias-dikshya',
      image:  '/assets/Screenshot.png'
    },
    {
      title: 'Webshop',
      description: 'A .NET-based webshop created to manage product listings, shopping carts, and orders.',
      link: 'https://github.com/TEC-Datatek-Progs-H3/webshop-project-dikshya-nisha/tree/main/WebShop%20Projekt',
      image:  '/assets/webshop.PNG'
    }
  ];

  trackByProject(index: number, project: Project): string {
    return project.title;
  }
}
