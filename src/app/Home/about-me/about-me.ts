import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {

  frontEndDescription: string = '';
  backEndDescription: string = '';
  dataBaseDescription: string = '';
  positionDeveloper: string = '';
  developerDescription: string = '';

  ngOnInit(){
    this.positionDeveloper = 'Sofware Engineer';
    this.developerDescription = `I'm a software developer about 2.5+ years of expirence at retail store. I've been working in diffents process related with the creating of loans and credits systems.`;

    this.frontEndDescription = ``
  }

}
