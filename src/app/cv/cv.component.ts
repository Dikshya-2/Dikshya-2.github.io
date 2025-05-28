import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  profile = {
    name: 'DIKSHYA SINGH SHAH',
    description: 'Aspiring Full Stack Developer',
    imageUrl: 'assets/image_50400513.JPG',
  };

  contactInfo = [
  { icon: 'fa-map-marker', text: 'Lyngby Hovedgade 106 st.mf, 2800 Lyngby' },
  { icon: 'bi bi-phone', text: '+45 22221844' },
  { icon: 'bi bi-envelope', text: 'dikshyasingh12@gmail.com' },
  { icon: 'fa-birthday-cake', text: '13.01.1991' },
  { icon: 'bi bi-linkedin', text: 'www.linkedin.com/me' },
  { icon: 'bi bi-github', text: 'www.github.com/dikshya' },
  { icon: '', text: 'ER ikke ryger' },

  ];

  education = [
    { year: '2020-2026', degree: 'Data Technician specializing in Programming', institution: 'Technical Education Copenhagen, Ballerup' },
    { year: '2008-2011', degree: 'Bachelor’s in Public Health', institution: 'Hope International College, Nepal' },
  ];

  languages = [
    'Fluent in English, Nepali, Urdu, Hindi (spoken and written).',
    'Professional Danish (spoken and written).',
    'Nepali: Fluent',
    'Driving license for regular passenger car',
  ];

  skills = [
    'Angular','ASP.NET','IntelliJ Idea',
    'Android Studio','REST API','Python',
    'Java','SQL','SQLite',
    'Docker','XML','UML',
    'OOAD','SPSS','Excel',
    'Git','GitHub','Windows',
    'Cisco','CentOS','IoT',
    'Linux','PowerShell'
  ];

  experience = [
    {
      year: '2021–Present',
      role: 'Experience in both backend and frontend development. I have worked with SQL databases, C#, and object-oriented design, as well as Angular and ASP.NET. I have developed web applications using technologies like WPF, Blazor, and JavaScript. One of my projects was a Biograf website with user and admin features. I ensure code quality with XUnit tests.',
      company: 'Technical Education Copenhagen, Hvidovre'
    },
    {
      year: '2022–2024',
      role: 'Prepared and served nutritious meals to patients. Developed the ability to work under pressure and deliver high-quality results.',
      company: 'Hospital Assistant at Herlev Hospital (Part-time, every other weekend)'
    },
    {
      year: '2012–2014',
      role: 'District Project Coordinator',
      company: 'Ipas-Nepal, Kathmandu, Nepal'
    },
    {
      year: '2011–2012',
      role: 'District Project Coordinator',
      company: 'SOURCE-Nepal, Doti (NGO)'
    },
  ];

  workshops = [
    { year: '2014', details: 'Social Behavior Change Communication Learning Lab, Kathmandu' },
    { year: '2013', details: 'Capacity building training on Case study and report writing, Pokhara, Nepal' },
    { year: '2013', details: 'ToT on ASRH, Chitwan, Nepal' },
    { year: '2012', details: 'Advocacy training workshop, Doti, Nepal by Save the Children' },
  ];
  fritidsinteresser= ['I enjoy swimming, playing basketball and badminton, and spending time with friends and family.'
];
}
