import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { CVComponent } from './cv/cv.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'skills', component: SkillsComponent},
    {path: 'cv', component: CVComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }  // Fallback route
  
];
