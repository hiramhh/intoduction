import { Routes } from '@angular/router';
import { MainProject } from './Projects/main-project/main-project';
import { MainHome } from './Home/main-home/main-home';
import { MainAboutMe } from './About-me/main-about-me/main-about-me';
import { MainBlog } from './Blogs/main-blog/main-blog';

export const routes: Routes = [
  {
    path:'',
    component: MainHome,
    title: 'Welcome'
  },
  {
    path:'Blog',
    component: MainAboutMe,
    title: 'My blog'
  },
  {
    path:'About me',
    component: MainBlog,
    title: 'My info'
  },
  {
    path:'Projects',
    component: MainProject,
    title: 'Projects'
  }
];
