import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  profile = {
    name: 'DIKSHYA SINGH SHAH',
    description: 'Aspiring Full Stack Developer',
    imageUrl: 'assets/image_50400513.JPG',
  };

  contactInfo = [
  { icon: 'fa-map-marker', text: 'Lyngby Hovedgade 106 st.mf, 2800 Lyngby' },
  { icon: 'bi bi-phone', text: '+45 22221844' },
  { icon: 'bi bi-envelope', text: 'dikshyasingh12@gmail.com' },
  { icon: 'fa-birthday-cake', text: '13.01.1991' },
  { icon: 'bi bi-linkedin', text: 'www.linkedin.com/me' },
  { icon: 'bi bi-github', text: 'www.github.com/dikshya' },
  { icon: '', text: 'ER ikke ryger' },
 
  ];

  education = [
    { year: '2020-2026', degree: 'Datatekniker med speciale i programmering ', institution: 'Technical Education Copenhagen, Ballerup' },
  //  { year: '2019-2020', degree: '9 Klasse afgangseksamen', institution: 'VUC Lyngby' },
    { year: '2008-2011', degree: 'Bachelors in Public Health', institution: 'Hope International College, Nepal' },
  ];

  languages = [
    'Flydende Engelsk, Nepalesisk, Urdu, Hindi (taler og skrive).',
    'Professionelt Dansk (taler og skrive).',
    'Nepali: Flydende',
    'Kørekort til almindelig personbil',
  ];

  skills = [
    'Angular','ASP.NET','IntelliJ Idea',
    'Android Studio','REST API','Python',
    'Java','SQL','SQLite',
    'Docker','XML','UML',
    'OOAD','SPSS','Excel',
    'Git','GitHub','Windows',
    'Cisco','CentOS','IoT',
    'Linux','PowerShell'
  ];

  experience = [
    { year: '2021-nu', role: 'Erfaring med både backend- og frontend-udvikling. Jeg har arbejdet med SQL-databaser, C# og objektorienteret design, samt Angular og ASP.NET. Jeg har udviklet webapplikationer med teknologier som WPF, Blazor og JavaScript. Et af mine projekter som en casino-hjemmeside med bruger- og adminfunktioner. Jeg sikrer kodekvalitet med XUnit-tests.', company: 'Technical Education Copenhagen, Hvidover' },
    { year: '2022- 2024',	role: 'Tilberedte og servering nærende måltider til Patienter. Udviklede evnen til at arbejde under pres og levere kvalitetssikrede resultater.',  company: 'Hospitalsmedhjælper i Herlev hospital. ||Deltid (hver anden weekend)'},
    { year: '2012-2014', role: 'Distrikt Projektkoordinator', company: 'Ipas-Nepal, Kathmandu, Nepal' },
    { year: '2011-2012', role: 'Distrikt Projektkoordinator', company: 'SOURCE-Nepal, Doti (NGO)' },
  ];

  workshops = [
    { year: '2014', details: 'Social Behavior Change Communication Learning Lab, Kathmandu' },
    { year: '2013', details: 'Capacity building training on Case study and report writing, Pokhara, Nepal' },
    { year: '2013', details: 'ToT on ASRH, Chitwan, Nepal' },
    { year: '2012', details: 'Advocacy training workshop, Doti, Nepal by Save the Children' },
  ];
  fritidsinteresser= ['Jeg nyder svømme, spille basketball, badminton og samt at tilbringe tid med venner og familie.'];
}
