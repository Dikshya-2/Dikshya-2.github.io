import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

   profileData = {
    name: 'Your Name',
    title: 'Programming Student & Full-Stack Developer',
    age: 33,
    education: 'TEC Programming Student',
    graduationDate: 'May 2026',
    finalExam: 'February 2026'
  };

  skills = [
    { name: 'Java', category: 'Mobile Development', icon: '☕' },
    { name: 'Android Studio', category: 'Mobile Development', icon: '📱' },
    { name: '.NET', category: 'Backend Development', icon: '🔧' },
    { name: 'Angular', category: 'Frontend Development', icon: '⚡' },
    { name: 'ASP.NET Identity', category: 'Security', icon: '🔐' },
    { name: 'Two-Factor Auth', category: 'Security', icon: '🛡️' },
    { name: 'Biostatistics', category: 'Analytics', icon: '📊' },
    { name: 'Epidemiology', category: 'Analytics', icon: '🔬' }
  ];

  achievements = [
    {
      title: 'Full-Stack Web Application',
      description: 'Developed independently with secure authentication',
      features: ['ASP.NET Identity', '2FA Implementation', 'SMTP Email', 'Google Authenticator']
    },
    {
      title: 'Agile Development',
      description: 'Applied structured methodology with 5 development phases',
      features: ['Progress Tracking', 'Continuous Improvement', 'Focus Management']
    },
    {
      title: 'Cross-Platform Experience',
      description: 'Mobile and web application development',
      features: ['Java Android Apps', '.NET Web Apps', 'Angular Frontend']
    }
  ];

  description: string = `
    <p>I am a 33-year-old programming student at TEC with experience in both web and mobile application development. I have developed mobile applications using Java in Android Studio and created web applications using .NET for the backend and Angular for the frontend. With a bachelor's degree in public health focused on biostatistics and epidemiology, I bring strong analytical skills to my programming journey.</p>

    <p>Recently, I developed a full-stack web application independently, implementing secure login using ASP.NET Identity, along with Two-Factor Authentication (2FA) using SMTP email confirmation and Google Authenticator. I applied Agile methodology, breaking the project into five structured development phases to ensure focus, progress tracking, and continuous improvement.</p>

    <p>I am currently preparing for my final exam in February 2026 and will complete my education in May 2026. I am actively seeking an internship opportunity where I can apply my skills, contribute to real-world projects, and continue learning alongside experienced developers.</p>

    <p>I am ambitious and passionate about technology, programming, and problem-solving, and I'm committed to building smart, user-friendly applications that solve real challenges.</p>
  `;
}
