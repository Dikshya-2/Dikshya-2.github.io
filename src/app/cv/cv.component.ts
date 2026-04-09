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
    description: 'Junior Full Stack Developer',
    imageUrl: 'assets/dikskya_id21_01.JPG',
  };

  contactInfo = [
    { icon: 'bi bi-geo-alt', text: 'Kongens Lyngby' },
    { icon: 'bi bi-phone', text: '+45 22221844' },
    { icon: 'bi bi-envelope', text: 'dikshyasingh12@gmail.com' },
    { icon: 'bi bi-globe', text: 'https://dikshya-2.github.io/project' },
  ];

  profileSummary = `
  Ambitious and dedicated software developer specializing in backend and frontend development.
  Experienced in building secure and scalable web applications, including my main project “Dixen”
  – a role-based event management platform with JWT and 2FA.
  Strong in problem-solving, system architecture, and teamwork.
  `;

  skills = [
    'C# .NET Core', 'Python',
    'Angular', 'JavaScript', 'React Native',
    'HTML', 'CSS', 'Tailwind',
    'MSSQL', 'SQLite',
    'REST API', 'JWT Authentication',
    'Git & GitHub',
    'Docker (Basic)',
    'Embedded C'
  ];

  languages = [
    'English (Fluent)',
    'Nepali (Fluent)',
    'Danish (Intermediate)',
    'Hindi & Urdu (Fluent)'
  ];

  experience = [
    {
      year: '2021 – 2026',
      title: 'IT Specialist Apprentice – Programming',
      company: 'TEC – Technical Education Copenhagen',
      points: [
        'Develop full-stack applications using Angular and ASP.NET Core',
        'Implement authentication (JWT, 2FA)',
        'Design SQL databases and REST APIs',
        'Write unit tests with xUnit',
        'Work with scalable system architecture'
      ]
    },
    {
      year: '2022 – 2025',
      title: 'Hospital Assistant (Part-Time)',
      company: 'Herlev Hospital',
      points: [
        'Worked with digital patient meal system',
        'Ensured nutrition and hygiene standards',
        'Collaborated with healthcare staff',
        'Performed well under pressure'
      ]
    },
    {
      year: '2011 – 2014',
      title: 'District Project Coordinator',
      company: 'Ipas Nepal',
      points: [
        'Planned and coordinated district projects',
        'Communicated with stakeholders',
        'Prepared reports and documentation'
      ]
    }
  ];

  education = [
    {
      year: '2020 – 2026',
      degree: 'Data Technician – Programming',
      institution: 'TEC – Copenhagen'
    },
    {
      year: '2008 – 2011',
      degree: 'Bachelor in Public Health',
      institution: 'Hope International College, Nepal'
    }
  ];
  // workshops = [
  //   { year: '2014', details: 'Social Behavior Change Communication Learning Lab, Kathmandu' },
  //   { year: '2013', details: 'Capacity building training on Case study and report writing, Pokhara, Nepal' },
  //   { year: '2013', details: 'ToT on ASRH, Chitwan, Nepal' },
  //   { year: '2012', details: 'Advocacy training workshop, Doti, Nepal by Save the Children' },
  // ];

  funFact = `
  Curious about AI and Machine Learning – interested in combining software
  development with biostatistics and epidemiology.
  `;
}
