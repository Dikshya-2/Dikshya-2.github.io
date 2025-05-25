import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  email: string = 'dikshyasingh12@gmail.com';
  phone: string= '+45 22221844';
  location: string = 'Lyngby Hovedgade 106 st.mf, 2800 Lyngby, Denmark';
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Dikshya-2', icon: 'bi bi-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dikshya-singh-shah-72b46391/', icon: 'bi bi-linkedin' },
    { name: 'Portfolio', url: 'http://localhost:4200/', icon: 'fas fa-user' }
  ];
}
