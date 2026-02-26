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

    this.frontEndDescription = `I have deep knowledge of the Angular enviroment. I have worked on making http requests and displaying data from databases in user interfaces`;
    this.backEndDescription = `I have experience connecting web services to databases, managing end-data user and performing calculations. Additionally, I have worked with different lenguages such as Java, PHP and Go`;
    this.dataBaseDescription = `I worked on developing scripts in an SQL environment, managing user data, and configuringg tables and conections with web services`;
  }

}
