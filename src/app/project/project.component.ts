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
      description: 'A secure login system using three-factor authentication.',
      link: 'https://github.com/Dikshya-2/BlazorAppWithHashing',
      image: '../assets/login.jpg'
    },
    {
      title: 'Mobile App In Java',
      description: 'A mobile application developed using Java.',
      link: 'https://github.com/Dikshya-2/webshop',
      image: '../assets/Food.jpg'
    },
    {
      title: 'Movie Web App',
      description: 'A web application for browsing movies.',
      link: 'https://github.com/Dikshya-2/H3-Projekt-Biograf',
      image:  '../assets/Movie.PNG'
    },
    {
      title: 'Arduino Projects',
      description: 'A collection of projects using Arduino.',
      link: 'https://github.com/Dikshya-2/Arudino',
      image:  '../assets/audrino.PNG'
    },
    {
      title: 'Studieteknik',
      description: 'A project focused on study techniques.',
      link: 'https://github.com/Dikshya-2/Studieteknik',
      image:  '../assets/st.png'
    },
    {
      title: 'Webshop 2',
      description: 'An online shopping platform.',
      link: 'https://github.com/H1-H3-Programmering/project002-matthias-dikshya',
      image:  '../assets/webshop.PNG'
    },
    {
      title: 'Webshop',
      description: 'A project for creating an e-commerce website.',
      link: 'https://github.com/TEC-Datatek-Progs-H3/webshop-project-dikshya-nisha/tree/main/WebShop%20Projekt',
      image:  '../assets/webshop.PNG'
    }
  ];

  trackByProject(index: number, project: Project): string {
    return project.title;
  }
}
