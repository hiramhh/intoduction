import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from './Home/about-me/about-me';
import { Header } from './Home/header/header';
import { Contact } from './Home/contact/contact';
import { Footer } from './Home/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutMe,Header,Contact,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('introduction');
}
