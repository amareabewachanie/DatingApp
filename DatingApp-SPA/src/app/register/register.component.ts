import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome:any;
@Output() cancelRegister=new EventEmitter();
model:any={};
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
register(){
 this.authservice.register(this.model).subscribe(()=>{
   console.log('user successfully registerd!');
   
 },error=>{
   console.error(error);
   
 });
}
cancel(){
  this.cancelRegister.emit(false);
}
}
