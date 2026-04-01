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
<p>
Programming graduate from TEC with a strong interest in full-stack development and secure applications.
I enjoy building scalable solutions and am looking for a <strong>Junior Developer</strong> role where I can make an impact and grow my expertise.
</p>
<p>I have experience building both mobile and web applications. I have developed Android applications using Java in Android Studio and created full-stack web applications using .NET for backend development and Angular for frontend development.</p>
<p>As part of my development experience, I independently built a full-stack web application with secure authentication using ASP.NET Identity. The system includes Two-Factor Authentication (2FA) with SMTP email verification and Google Authenticator. The project was developed using Agile principles and structured into five development phases to maintain focus, progress tracking, and continuous improvement.</p>
<p>In addition to my programming education, I hold a bachelor's degree in Public Health with a focus on biostatistics and epidemiology. This background strengthens my analytical thinking and problem-solving skills when designing and developing software solutions.</p>
<p>I am passionate about technology, problem-solving, and building practical applications. I am motivated to contribute to a development team, learn from experienced developers, and continue developing my skills as a full-stack software developer.</p>
`;

}
