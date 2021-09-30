import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listclient';
  toggledrop = false;
  dropdown = "";
  navbutton = false;
  buttonstat = "collapsed";
  divstat="";
  locmenu = [{
    "id":1,
    "name": "Login",
    "navpath": "login"
    },{
      "id":2,
      "name": "Home",
      "navpath": ""
      }];
  constructor(private router: Router){

  }
  ngOnInit(){
    this.router.navigate(['']);
  }

  dropdowntoggle():void{
    this.toggledrop = !this.toggledrop;
    if(this.toggledrop){
      this.dropdown = "show";
    }else{
      this.dropdown = "";
    }
  }
  navbuttonclick():void{
    this.navbutton=!this.navbutton;
    if(this.navbutton){
      this.buttonstat ="";
      this.divstat="show";
    }else{
      this.buttonstat ="collapsed";
      this.divstat="";
    }
  }
  reset():void{
  this.toggledrop = false;
  this.dropdown = "";
  this.navbutton = false;
  this.buttonstat = "collapsed";
  this.divstat="";
  }
}
