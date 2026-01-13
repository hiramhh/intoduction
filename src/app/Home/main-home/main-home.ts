import { Component } from '@angular/core';
import { AboutMe } from '../about-me/about-me';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-main-home',
  imports: [AboutMe,Contact],
  templateUrl: './main-home.html',
  styleUrl: './main-home.css',
})
export class MainHome {

}
