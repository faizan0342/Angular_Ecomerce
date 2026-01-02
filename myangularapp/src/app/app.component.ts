import { Component, HostListener } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [StudentComponent ,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangularapp';
  name = "faizan";

  // show(){
  //     alert("hello word")
  // }
 
  cdata : any;

  getdata(data : any){

    this.cdata = data;
  }
  
}
