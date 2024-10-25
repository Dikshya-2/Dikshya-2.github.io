import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  email: string = 'dikshyasingh12@gmail.com';
  name: string = 'Dikshya Singh Shah';
  phone: string= '+45 22221844';
  location: string = 'Lyngby Hovedgade 106, 2800 Lyngby, Denmark';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you can handle the form submission, e.g., send data to a server
      this.contactForm.reset(); // Reset the form after submission if needed
    } else {
      console.log('Form is invalid');
    }
  }
}
