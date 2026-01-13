import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Home/header/header';
import { Footer } from './Home/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('introduction');
}
