import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-main-project',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './main-project.html',
  styleUrl: './main-project.css',
})
export class MainProject {

}
