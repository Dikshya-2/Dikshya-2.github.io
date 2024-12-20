import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../Models/skill';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule ],
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
  name: '.Net',
  icon: '../assets/NET.jpg' 
},
{
  name: 'PHP',
  icon: '../assets/images.png' 
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
  name: 'Angular',
  icon: '../assets/download.png' 
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
  name: 'CSS',
    icon: '../assets/Logo.jpg' 

},
{
  name: 'Bootstrap',
    icon: '../assets/bootstrap.png' 
    
},
{
  name: 'SPSS',
    icon: '../assets/spss.png' 
},
{
  name: 'IoT',
    icon: '../assets/IoT.png' 
},
{
  name: 'cisco',
    icon: '../assets/cisco.png' 
},
{
  name: 'SQLite',
    icon: '../assets/Sqlite.jpg' 
},
{
  name: 'MS-SQL',
    icon: '../assets/ms-sql.jpg' 
},
{
  name: 'MySQL',
    icon: '../assets/mysql.jpg' 
},


];


}
