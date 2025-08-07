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
      title: '3FA Login With Hashing',
        description: 'A secure Blazor-based login system using password, Google Authenticator, and CPR verification before showing a personalized To-Do List.',
      //description: 'A secure login system using three-factor authentication.',
      link: 'https://github.com/Dikshya-2/BlazorAppWithHashing',
      image: '../assets/login.jpg'
    },
    {
      title: 'Mobile App In Java',
      description: 'A full-stack food ordering app using Java for the backend IntelliJ IDEA and Android for the frontend, with H2 as the database.',
      // description: 'A mobile application developed using Java.',
      link: 'https://github.com/Dikshya-2/webshop',
      image: '../assets/Food.jpg'
    },
    {
      title: 'Movie Web App',
      description: 'A web application for browsing, booking, and managing movies with CRUD support for admins.',
      // description: 'A web application for browsing movies.',
      link: 'https://github.com/Dikshya-2/H3-Projekt-Biograf',
      image:  '../assets/Movie.PNG'
    },
    {
      title: 'First Arduino Projects',
       description: 'A collection of Arduino-based microcontroller projects involving sensors and automation.',
      link: '../assets/ARDUINOProjekt.pdf',
      image:  '../assets/audrino.PNG'
    },
    {
      title: 'Arduino Projects at school',
       description: 'A collection of Arduino-based microcontroller projects involving sensors and automation.',
      link: 'https://github.com/Dikshya-2/Arudino',
      image:  '../assets/aud.png'

    },

    {
      title: 'Studieteknik',
      description: 'A project focused on study techniques.',
      link: 'https://github.com/Dikshya-2/Studieteknik/wiki',
      image:  '../assets/st.png'
    },
    {
      title: 'Webshop 2',
      description: 'An e-commerce platform for managing product inventory, user shopping experience, and payment workflow.',
      link: 'https://github.com/H1-H3-Programmering/project002-matthias-dikshya',
      image:  '../assets/Screenshot.png'
    },
    {
      title: 'Webshop',
      description: 'A .NET-based webshop created to manage product listings, shopping carts, and orders.',
      link: 'https://github.com/TEC-Datatek-Progs-H3/webshop-project-dikshya-nisha/tree/main/WebShop%20Projekt',
      image:  '../assets/webshop.PNG'
    }
  ];

  trackByProject(index: number, project: Project): string {
    return project.title;
  }
}




//   projects: Project[] = [
//     {
//   title: 'DIxen – Event Management System',
//   description: 'A full-stack web app using Angular and ASP.NET Core for organizing and managing events.',
//   link: 'https://github.com/Dikshya-2/DIxen',
//   image: '../assets/dixen.jpg',
//   role: 'Full Stack Developer',
//   technologies: ['Angular', 'ASP.NET Core Web API', 'MS SQL', 'Google Authenticator'],
//   features: [
//     'Role-based access (Admin, Organizer, Attendee)',
//     'Angular services using generic architecture',
//     'JWT authentication and guards',
//     'Responsive UI with Angular Material',
//     'QR code check-in + 2FA login flow'
//   ]
// }
// ,
//  {
//   title: '3FA Login with Blazor',
//   description: 'A secure Blazor-based login system using password, Google Authenticator, and CPR verification before showing a personalized To-Do List.',
//   link: 'https://github.com/Dikshya-2/BlazorAppWithHashing',
//   image: '../assets/login.jpg',
//   role: 'Full Stack Developer',
//   technologies: ['Blazor', 'ASP.NET Core', 'Identity', 'Google Authenticator', 'C#'],
//   features: [
//     'Three-factor authentication: Password + CPR + Google Authenticator',
//     'User registration with secure password hashing',
//     'QR code setup for 2FA using Google Authenticator',
//     'CPR field validation as an additional identity step',
//     'Access to personalized To-Do List after successful login',
//     'Blazor WebAssembly front-end with clean UI'
//   ]
// },

// {
//   title: 'Mobile Food App',
//   description: 'A full-stack food ordering app using Java for the backend and Android for the frontend, with H2 as the database.',
//   link: 'https://github.com/Dikshya-2/webshop',
//   image: '../assets/Food.jpg',
//   role: 'Full Stack Developer',
//   technologies: ['Java', 'Android Studio', 'IntelliJ IDEA', 'Spring Boot', 'H2 Database', 'Postman'],
//   features: [
//     'Dynamic product listing and filtering',
//     'Cart and order functionality',
//     'User authentication and session handling',
//     'H2 in-memory database for development and testing',
//     'Postman APIs for frontend-backend communication',
//     'Responsive Android UI built with Material Design'
//   ]
// }
// ,
// {
//   title: 'Biograf – Movie Web App',
//   description: 'A web application for browsing, booking, and managing movies with CRUD support for admins.',
//   link: 'https://github.com/Dikshya-2/H3-Projekt-Biograf',
//   image: '../assets/Movie.PNG',
//   role: 'Full Stack Developer',
//   technologies: ['ASP.NET Core MVC', 'Entity Framework', 'Bootstrap', 'Angular'],
//   features: [
//     'Movie listing with poster images',
//     'Admin panel for managing movies',
//     'User registration and login',
//     'Clean Bootstrap UI',
//     'Search and filter movies'
//   ]
// }
// ,
//    {
//   title: 'Arduino Projects',
//   description: 'A collection of Arduino-based microcontroller projects involving sensors and automation.',
//   link: 'https://github.com/Dikshya-2/Arudino',
//   image: '../assets/audrino.PNG',
//   role: 'Embedded Developer',
//   technologies: ['Arduino', 'C++', 'Sensors', 'IR Modules'],
//   features: [
//     'Line-following robot',
//     'Ultrasonic distance sensor',
//     'Remote-controlled LEDs',
//     'Real-time temperature display',
//     'Analog signal control'
//   ]
// },

// {
//       title: 'Studieteknik',
//       description: 'A project focused on study techniques.',
//       link: 'https://github.com/Dikshya-2/Studieteknik',
//       image:  '../assets/st.png'
//     },
//     {
//   title: 'Webshop v2 – E-commerce App',
//   description: 'An e-commerce platform for managing product inventory, user shopping experience, and payment workflow.',
//   link: 'https://github.com/H1-H3-Programmering/project002-matthias-dikshya',
//   image: '../assets/Screenshot.png',
//   role: 'Full Stack Developer',
//   technologies: ['ASP.NET Core', 'Entity Framework', 'Angular', 'SQL Server', 'Bootstrap'],
//   features: [
//     'Product listing and filtering',
//     'Cart and checkout system',
//     'Login system with session handling',
//     'Admin product management',
//     'Fully responsive design'
//   ]
// }
// ,
// {
//   title: 'Webshop – E-commerce Platform',
//   description: 'A .NET-based webshop created to manage product listings, shopping carts, and orders.',
//   link: 'https://github.com/TEC-Datatek-Progs-H3/webshop-project-dikshya-nisha/tree/main/WebShop%20Projekt',
//   image: '../assets/webshop.PNG',
//   role: 'Backend Developer',
//   technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Bootstrap', 'Angular'],
//   features: [
//     'Product listing and purchase flow',
//     'Login and registration system',
//     'Cart and order summary',
//     'Bootstrap-based responsive UI'
//   ]
// }
//   ];

//   trackByProject(index: number, project: Project): string {
//     return project.title;
//   }
// }
