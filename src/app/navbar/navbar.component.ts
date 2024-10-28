import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  @Output() scrollTo = new EventEmitter<string>();

  navigateTo(section: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
          this.viewportScroller.scrollToAnchor(section);
      });
  } else {
      this.viewportScroller.scrollToAnchor(section);
  }
  }
}
 