import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'dikshyasingh12@gmail.com';
  name: string = 'Dikshya Singh Shah';
  phone: string= '+45 22221844';
  location: string = 'Lyngby Hovedgade 106, 2800 Lyngby, Denmark';

}
