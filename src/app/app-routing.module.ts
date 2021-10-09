import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PosterComponent } from './components/poster/poster.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'bot',
    component : ChatbotComponent
  },
  {
    path:'poster',
    component : PosterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
