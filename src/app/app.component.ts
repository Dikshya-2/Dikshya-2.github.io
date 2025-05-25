import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectSection') projectSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  // Scroll function
  scrollToSection(sectionId: string) {
    let targetElement: HTMLElement | null = null;

    if (sectionId === 'about') {
      targetElement = this.aboutSection?.nativeElement;
    } else if (sectionId === 'skills') {
      targetElement = this.skillsSection?.nativeElement;
    } else if (sectionId === 'contact') {
      targetElement = this.contactSection?.nativeElement;
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
