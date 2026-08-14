import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface ContactItem {
  icon: string;
  text: string;
  link?: string;
  external?: boolean;
}

interface SkillGroup {
  title: string;
  skills: string;
}

interface Experience {
  year: string;
  title: string;
  company: string;
  points: string[];
}

interface Education {
  year: string;
  degree: string;
  institution: string;
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  profile = {
    name: 'Dikshya Singh Shah',
    description:
      'Software Engineer (.NET | Angular | Python)',
    imageUrl:
      'assets/dikskya_id21_01.JPG'
  };

  contactInfo: ContactItem[] = [
    {
      icon: 'bi bi-geo-alt',
      text: 'Kongens Lyngby'
    },

    {
      icon: 'bi bi-phone',
      text: '+45 22221844',
      link: 'tel:+4522221844'
    },

    {
      icon: 'bi bi-envelope',
      text: 'dikshyasingh12@gmail.com',
      link: 'mailto:dikshyasingh12@gmail.com'
    },

    {
      icon: 'bi bi-globe',
      text: 'dikshya-2.github.io',
      link: 'https://dikshya-2.github.io',
      external: true
    }

  ];
  profileSummary = `Full-stack software developer with a background in Public Health and strong analytical skills. Experienced in building secure ASP.NET Core and Angular applications, designing SQL databases, and developing REST APIs. Combines software engineering with knowledge of epidemiology, biostatistics, and data analysis, making me well suited for healthcare technology, data engineering, and AI-driven solutions.
  `;

  skillGroups: SkillGroup[] = [
    {
      title: 'Programming & Development',
      skills:
        'C#, ASP.NET Core, Python, Angular, TypeScript, JavaScript, React Native, HTML, CSS, Bootstrap, Tailwind CSS, REST APIs, JWT Authentication, Dependency Injection'
    },

    {
      title: 'Database & Data',
      skills:
        'MSSQL, SQLite, MariaDB, MySQL, Database Design, Entity Framework Core, Normalization, Python ETL, Data Analysis & Visualization'
    },

    {
      title: 'Testing & DevOps',
      skills:
        'Unit Testing, Integration Testing (xUnit, Moq, InMemory), Git, GitHub, GitHub Actions CI/CD, Docker & Linux'
    }

  ];

  languages: string[] = [
    'English (Fluent)',
    'Nepali (Fluent)',
    'Danish (Intermediate)',
    'Hindi & Urdu (Fluent)'
  ];

  drivingLicense: string[] = [
    'Category B'
  ];

  experience: Experience[] = [
    {
      year: '2021 – 2026',
      title:
        'IT Specialist Apprentice – Programming',
      company:
        'TEC – Technical Education Copenhagen',
      points: [
        'Develop full-stack web applications using Angular and ASP.NET Core',
        'Implement authentication and security solutions including JWT and 2FA',
        'Design and work with SQL databases and REST APIs',
        'Write unit tests using xUnit',
        'Collaborate on system architecture and scalable application development'
      ]
    },

    {
      year: '2022 – 2025',
      title:
        'Hospital Assistant (Part-Time)',
      company:
        'Herlev Hospital',
      points: [
        'Worked with the hospital’s digital à la carte concept for patients',
        'Ensured correct handling and serving of nutrition-adapted meals',
        'Collaborated with kitchen staff and healthcare professionals',
        'Worked efficiently under pressure with strong focus on quality and hygiene'
      ]
    },

    {
      year: '2011 – 2014',
      title:
        'District Project Coordinator',
      company:
        'Ipas Nepal',
      points: [
        'Planned and coordinated district-level projects',
        'Communicated with stakeholders and project partners',
        'Prepared reports and maintained project documentation'
      ]
    }
  ];

  education: Education[] = [
    {
      year: '2020 – 2026',
      degree:
        'Data Technician – Specialization in Programming',
      institution:
        'TEC – Technical Education Copenhagen'
    },

    {
      year: '2008 – 2011',
      degree:
        'Bachelor’s Degree in Public Health',
      institution:
        'Hope International College, Nepal'
    }

  ];
  funFact = `
    Curious about AI and Machine Learning – eager to explore how technical development can meet biostatistics and epidemiology.
  `;
}
