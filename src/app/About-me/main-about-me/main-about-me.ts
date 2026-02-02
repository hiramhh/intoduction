import { Component } from '@angular/core';
import { MyDescriptionComponent } from '../my-description/my-description.component';
import { LinetimeComponent } from '../linetime/linetime.component';

@Component({
  selector: 'app-main-about-me',
  imports: [MyDescriptionComponent, LinetimeComponent],
  templateUrl: './main-about-me.html',
  styleUrl: './main-about-me.css',
})
export class MainAboutMe {

}
