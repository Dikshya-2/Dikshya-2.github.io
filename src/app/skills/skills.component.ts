import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../Models/skill';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'C#',
      icon: '../assets/Csharp.png'
    },
    {
      name: 'CSS',
        icon: '../assets/Logo.jpg' 

    },
    {
        name: 'Angular',
        icon: '../assets/download.png' 
    },
    {
        name: 'Java',
        icon: '../assets/Java.png' 
    },
    {
      name: 'JavaScript',
      icon: '../assets/JavaScript-logo.png' 
  },
  {
    name: 'Python',
    icon: '../assets/python.svg' 
},
{
  name: 'Postman',
  icon: '../assets/postman.png' 
},
{
  name: 'swagger',
  icon: '../assets/swagger-logo-horizontal.jpeg' 
},
{
  name: 'Typescript',
  icon: '../assets/Typescript.png' 
},

{
  name: 'HTML',
  icon: '../assets/HTML.jpg' 
},
{
  name: '.Net',
  icon: '../assets/NET.jpg' 
},
{
  name: 'PHP',
  icon: '../assets/images.png' 
}
];


}
