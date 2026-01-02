import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  // inputs : ['pdata'],
  outputs : ['childevent']
  
})
export class StudentComponent {
pdata : any;
childevent = new EventEmitter()
senddata(val:any){
  this.childevent.emit(val)
//  console.log("val", val)
}
}
