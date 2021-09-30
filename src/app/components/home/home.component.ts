import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: any;
  carousal1= "active";
  carousal2= "";
  carousal3= "";
  

  constructor() { }

 
  ngOnInit():void {
    this.id = setInterval(() => {
      this.changecarousal(); 
    }, 5000);
  }
  changecarousal() {
    if(this.carousal1==="active"){
      this.carousal1= "";
      this.carousal2= "active";
      this.carousal3= "";
    }else if(this.carousal2==="active"){
      this.carousal1= "";
      this.carousal2= "";
      this.carousal3= "active";
    }else{
      this.carousal1= "active";
      this.carousal2= "";
      this.carousal3= "";
    }
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
