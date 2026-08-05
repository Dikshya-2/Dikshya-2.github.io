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

description: string = `
<p>I’m a recently graduated Data Technician specializing in Programming from TEC – Technical Education Copenhagen,
 with a strong interest in full-stack development, secure applications, and data-driven solutions.
 I enjoy building software that solves real problems and creates a good user experience.
 </p>

<p>During my education, I have worked with ASP.NET Core, Angular, SQL databases, REST APIs, and Java to build web and
mobile applications. Through my projects, I’ve gained practical experience with authentication, database design,
API development, testing, and Agile development.</p>

<p>My portfolio includes secure authentication systems, event management platforms, web applications, mobile apps, and
database-driven solutions. These projects have helped me strengthen my problem-solving skills and my ability to design
applications with the user in mind.</p>

Before moving into software development, I completed a bachelor’s degree in Public Health with a focus on Biostatistics and
Epidemiology. That background has strengthened my analytical thinking and gives me a different perspective when working with
data-driven or healthcare-related solutions.</p>

<p>I’m passionate about technology, cybersecurity, and learning new things. As a junior developer, I’m excited to contribute
to a team, learn from experienced developers, and keep improving as a full-stack software developer.</p>
`;
}
