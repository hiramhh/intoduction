import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from './Home/about-me/about-me';
import { Header } from './Home/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutMe,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('introduction');
}
